"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Trash2, Plus, Image as ImageIcon, Type } from "lucide-react";

export default function GaleriaAdmin() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [galeria, setGaleria] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
      cargarGaleria();
    }
  }, [router]);

  const cargarGaleria = async () => {
    try {
      const res = await fetch("/api/galeria");
      const data = await res.json();
      setGaleria(data);
    } catch (error) {
      console.error("Error al cargar galería:", error);
    } finally {
      setLoading(false);
    }
  };

  const guardar = async () => {
    setSaving(true);
    try {
      await fetch("/api/galeria", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(galeria)
      });
      alert("✅ Galería guardada exitosamente");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("❌ Error al guardar galería");
    } finally {
      setSaving(false);
    }
  };

  const agregarImagen = () => {
    const nuevaImagen = {
      id: galeria.imagenes.length + 1,
      archivo: "",
      alt: `Galería EcoKids ${galeria.imagenes.length + 1}`
    };
    setGaleria({
      ...galeria,
      imagenes: [...galeria.imagenes, nuevaImagen]
    });
  };

  const actualizarImagen = (index: number, campo: string, valor: any) => {
    const nuevas = [...galeria.imagenes];
    nuevas[index][campo] = valor;
    setGaleria({...galeria, imagenes: nuevas});
  };

  const eliminarImagen = (index: number) => {
    if (confirm("¿Seguro que quieres eliminar esta imagen?")) {
      const nuevas = galeria.imagenes.filter((_: any, i: number) => i !== index);
      setGaleria({...galeria, imagenes: nuevas});
    }
  };

  if (!isAuth || loading || !galeria) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/30">
      {/* Header Premium con Glassmorphism */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 shadow-lg shadow-amber-500/5">
        <div className="max-w-[1600px] mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <ImageIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Galería de Fotos
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">Gestiona las imágenes de la galería</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={agregarImagen}
                className="group relative overflow-hidden px-6 py-3.5 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                  <span>Agregar Imagen</span>
                </div>
              </button>
              <button
                onClick={guardar}
                disabled={saving}
                className="group relative overflow-hidden px-8 py-3.5 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-pink-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <Save className="w-4 h-4" strokeWidth={2.5} />
                  <span>{saving ? "Guardando..." : "Guardar Cambios"}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 py-6">
        <div className="grid md:grid-cols-3 gap-4">
          {galeria.imagenes.map((img: any, index: number) => (
            <div
              key={img.id}
              className="group backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-amber-500/5 overflow-hidden hover:shadow-amber-500/10 hover:shadow-2xl transition-all duration-300 relative"
            >
              <button
                onClick={() => eliminarImagen(index)}
                className="absolute top-3 right-3 z-10 px-3 py-1.5 flex items-center gap-1.5 rounded-lg bg-red-500 text-white opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all shadow-lg text-xs font-bold"
              >
                <Trash2 className="w-3 h-3" strokeWidth={2.5} />
                <span>Eliminar</span>
              </button>

              {/* Preview de Imagen */}
              <div className="p-4 pb-0">
                <div className="rounded-xl overflow-hidden bg-white border-2 border-gray-200 relative aspect-square shadow-inner">
                  {img.archivo ? (
                    <img
                      src={img.archivo}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Error cargando imagen:', img.archivo);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                      <ImageIcon className="w-12 h-12 text-gray-300 mb-2" strokeWidth={1.5} />
                      <p className="text-xs text-gray-400 font-medium">Imagen #{index + 1}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-4 space-y-3">
                {/* Botón Cargar */}
                <div>
                  <label className="block">
                    <div className="group/btn cursor-pointer relative overflow-hidden px-3 py-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]">
                      <div className="flex items-center justify-center gap-2 text-white text-sm font-bold">
                        <ImageIcon className="w-4 h-4" strokeWidth={2.5} />
                        <span>Cargar Foto</span>
                      </div>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const nuevaRuta = `/galeria/${file.name}`;
                          actualizarImagen(index, "archivo", nuevaRuta);
                          alert(`📸 Imagen: ${file.name}\n\n⚠️ Copiar a /public/galeria/\nRuta: ${nuevaRuta}`);
                        }
                      }}
                    />
                  </label>
                  {img.archivo && (
                    <p className="text-xs text-gray-600 font-medium truncate mt-1.5">
                      📁 {img.archivo}
                    </p>
                  )}
                </div>

                {/* Texto Alternativo */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                    <Type className="w-4 h-4 text-amber-500" />
                    Texto alternativo
                  </label>
                  <input
                    type="text"
                    value={img.alt}
                    onChange={(e) => actualizarImagen(index, "alt", e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                    placeholder="Descripción de la imagen"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
