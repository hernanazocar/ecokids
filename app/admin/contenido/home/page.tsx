"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Image as ImageIcon, Sparkles, Type, AlignLeft, MapPin, MousePointer } from "lucide-react";

export default function HomeAdmin() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [contenido, setContenido] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
      cargarContenido();
    }
  }, [router]);

  const cargarContenido = async () => {
    try {
      const res = await fetch("/api/contenido");
      const data = await res.json();
      setContenido(data);
    } catch (error) {
      console.error("Error al cargar contenido:", error);
    } finally {
      setLoading(false);
    }
  };

  const guardar = async () => {
    setSaving(true);
    try {
      await fetch("/api/contenido", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contenido)
      });
      alert("✅ Contenido guardado");
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error al guardar");
    } finally {
      setSaving(false);
    }
  };

  const actualizar = (path: string[], valor: any) => {
    const nuevo = { ...contenido };
    let current = nuevo;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    current[path[path.length - 1]] = valor;
    setContenido(nuevo);
  };

  if (!isAuth || loading || !contenido) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-pink-50/30">
      {/* Header Premium con Glassmorphism */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 shadow-lg shadow-orange-500/5">
        <div className="max-w-[1600px] mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Banner Principal
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">Edita el hero de tu página principal</p>
              </div>
            </div>
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

      {/* Content Grid Moderno */}
      <div className="max-w-[1600px] mx-auto px-8 py-10">
        <div className="grid grid-cols-5 gap-8">
          {/* Sidebar: Preview */}
          <div className="col-span-2 space-y-6">
            {/* Preview Card con Glassmorphism */}
            <div className="group sticky top-32 backdrop-blur-xl bg-white/80 rounded-3xl border border-gray-200/50 shadow-2xl shadow-orange-500/10 overflow-hidden transition-all duration-300 hover:shadow-orange-500/20">
              <div className="p-6 border-b border-gray-100/50 bg-gradient-to-br from-gray-50/50 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
                    <ImageIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Vista Previa</h3>
                    <p className="text-xs text-gray-500">Imagen del banner</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {/* Preview Image con efecto moderno */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200/50 shadow-inner group-hover:shadow-lg transition-shadow">
                  {contenido.home.hero.imagenFondo ? (
                    <img 
                      src={contenido.home.hero.imagenFondo} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <ImageIcon className="w-16 h-16 text-gray-300 mb-3" strokeWidth={1.5} />
                      <p className="text-sm text-gray-400 font-medium">Sin imagen</p>
                    </div>
                  )}
                </div>
                
                {/* Botón Upload Premium */}
                <label className="mt-6 block">
                  <div className="group/btn cursor-pointer relative overflow-hidden px-6 py-4 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    <div className="relative flex items-center justify-center gap-3 text-white">
                      <ImageIcon className="w-5 h-5" strokeWidth={2.5} />
                      <span className="font-semibold">Cambiar imagen</span>
                    </div>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        alert(`📸 Imagen: ${file.name}\n\n1. Copia a /public/\n2. Ruta: /${file.name}`);
                      }
                    }}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Main Content: Formularios */}
          <div className="col-span-3 space-y-6">
            {/* Card: Títulos */}
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl border border-gray-200/50 shadow-xl shadow-blue-500/5 overflow-hidden transition-all duration-300 hover:shadow-blue-500/10">
              <div className="p-6 border-b border-gray-100/50 bg-gradient-to-br from-blue-50/30 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                    <Type className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Títulos del Banner</h3>
                    <p className="text-xs text-gray-500">Encabezados principales</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                {/* Título Principal */}
                <div className="group/input">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                    Título principal
                  </label>
                  <input
                    type="text"
                    value={contenido.home.hero.titulo1}
                    onChange={(e) => actualizar(["home", "hero", "titulo1"], e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-gray-900 font-semibold placeholder-gray-400 shadow-sm hover:shadow-md"
                    placeholder="Experiencias"
                  />
                </div>

                {/* Título con Gradiente */}
                <div className="group/input">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500"></div>
                    Título con gradiente
                    <span className="ml-auto px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg">
                      Destacado
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={contenido.home.hero.titulo2}
                      onChange={(e) => actualizar(["home", "hero", "titulo2"], e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-pink-50 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 placeholder-orange-300 shadow-sm hover:shadow-md"
                      placeholder="creativas"
                      style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                    />
                    <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
                  </div>
                  <p className="mt-2 text-xs text-gray-500 flex items-center gap-2">
                    <Sparkles className="w-3 h-3" />
                    Este texto aparece con gradiente naranja-rosa en el sitio
                  </p>
                </div>
              </div>
            </div>

            {/* Card: Descripción */}
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl border border-gray-200/50 shadow-xl shadow-purple-500/5 overflow-hidden transition-all duration-300 hover:shadow-purple-500/10">
              <div className="p-6 border-b border-gray-100/50 bg-gradient-to-br from-purple-50/30 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <AlignLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Descripción</h3>
                    <p className="text-xs text-gray-500">Texto de presentación</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <textarea
                  value={contenido.home.hero.descripcion}
                  onChange={(e) => actualizar(["home", "hero", "descripcion"], e.target.value)}
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all text-gray-900 font-medium placeholder-gray-400 resize-none shadow-sm hover:shadow-md"
                  placeholder="Describe tu negocio aquí..."
                />
              </div>
            </div>

            {/* Card: Detalles */}
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl border border-gray-200/50 shadow-xl shadow-emerald-500/5 overflow-hidden transition-all duration-300 hover:shadow-emerald-500/10">
              <div className="p-6 border-b border-gray-100/50 bg-gradient-to-br from-emerald-50/30 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg">
                    <MousePointer className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Información Adicional</h3>
                    <p className="text-xs text-gray-500">Detalles y llamada a acción</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500"></div>
                      Tagline 1
                    </label>
                    <input
                      type="text"
                      value={contenido.home.hero.tagline1}
                      onChange={(e) => actualizar(["home", "hero", "tagline1"], e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-gray-900 font-medium shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500"></div>
                      Tagline 2
                    </label>
                    <input
                      type="text"
                      value={contenido.home.hero.tagline2}
                      onChange={(e) => actualizar(["home", "hero", "tagline2"], e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-gray-900 font-medium shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                      <MapPin className="w-4 h-4 text-emerald-500" />
                      Ubicación
                    </label>
                    <input
                      type="text"
                      value={contenido.home.hero.ubicacion}
                      onChange={(e) => actualizar(["home", "hero", "ubicacion"], e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-gray-900 font-medium shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                      <MousePointer className="w-4 h-4 text-emerald-500" />
                      Texto del botón
                    </label>
                    <input
                      type="text"
                      value={contenido.home.hero.botonTexto}
                      onChange={(e) => actualizar(["home", "hero", "botonTexto"], e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gradient-to-r from-emerald-50 to-green-50 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-gray-900 font-semibold shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
