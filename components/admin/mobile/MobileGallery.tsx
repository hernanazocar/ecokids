"use client";

import { useState, useEffect } from "react";
import { Save, Trash2, Plus, ImageIcon, Camera } from "lucide-react";

export default function MobileGallery() {
  const [galeria, setGaleria] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    cargarGaleria();
  }, []);

  const cargarGaleria = async () => {
    try {
      const res = await fetch("/api/galeria");
      const data = await res.json();
      setGaleria(data);
    } catch (error) {
      console.error("Error al cargar galería:", error);
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
      alert("✅ Galería guardada");
    } catch (error) {
      alert("❌ Error al guardar");
    } finally {
      setSaving(false);
    }
  };

  const actualizarImagen = (index: number, campo: string, valor: any) => {
    const nuevas = [...galeria.imagenes];
    nuevas[index][campo] = valor;
    setGaleria({ ...galeria, imagenes: nuevas });
  };

  const eliminarImagen = (index: number) => {
    if (confirm("¿Eliminar esta imagen?")) {
      const nuevas = galeria.imagenes.filter((_: any, i: number) => i !== index);
      setGaleria({ ...galeria, imagenes: nuevas });
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

  if (!galeria) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-gray-600 font-medium">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Galería ({galeria.imagenes.length})</h2>
        <button
          onClick={guardar}
          disabled={saving}
          className="px-5 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold shadow-lg active:shadow-xl active:scale-95 transition-all disabled:opacity-50 flex items-center gap-2"
        >
          <Save size={18} strokeWidth={2.5} />
          <span>{saving ? "Guardando..." : "Guardar"}</span>
        </button>
      </div>

      {/* Add Image Button */}
      <button
        onClick={agregarImagen}
        className="w-full p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-dashed border-emerald-300 rounded-2xl active:bg-emerald-100 transition-all flex flex-col items-center gap-3"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg">
          <Plus size={28} className="text-white" strokeWidth={2.5} />
        </div>
        <span className="font-bold text-emerald-700 text-base">Agregar Nueva Imagen</span>
      </button>

      {/* Images List */}
      <div className="space-y-4">
        {galeria.imagenes.map((img: any, index: number) => (
          <div
            key={img.id}
            className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden"
          >
            {/* Image Preview */}
            <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative">
              {img.archivo ? (
                <img
                  src={img.archivo}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-gray-300 mb-2" strokeWidth={1.5} />
                  <p className="text-sm text-gray-400 font-medium">Sin imagen</p>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="p-4 space-y-3">
              {/* Upload Button */}
              <label className="block">
                <div className="w-full p-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold shadow-md active:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  <Camera size={20} strokeWidth={2.5} />
                  <span>Cambiar Foto</span>
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
                      alert(`📸 Imagen: ${file.name}\n\n⚠️ Recuerda copiarla a /public/galeria/`);
                    }
                  }}
                />
              </label>

              {/* Alt Text */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">
                  Descripción
                </label>
                <input
                  type="text"
                  value={img.alt}
                  onChange={(e) => actualizarImagen(index, "alt", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none text-base font-medium text-gray-900 transition-all"
                  placeholder="Ej: Niños pintando"
                />
              </div>

              {/* File Path */}
              {img.archivo && (
                <div className="text-xs text-gray-500 font-medium bg-gray-50 px-3 py-2 rounded-lg">
                  📁 {img.archivo}
                </div>
              )}

              {/* Delete Button */}
              <button
                onClick={() => eliminarImagen(index)}
                className="w-full p-4 bg-red-500 text-white rounded-xl font-bold shadow-md active:bg-red-600 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Trash2 size={18} strokeWidth={2.5} />
                <span>Eliminar Imagen</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Space */}
      <div className="h-4"></div>
    </div>
  );
}
