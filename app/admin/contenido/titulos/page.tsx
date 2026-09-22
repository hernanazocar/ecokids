"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Sparkles, Users, ShoppingBag, Zap, Image as ImageIcon, MessageSquare, HelpCircle, Tag, Type, AlignLeft } from "lucide-react";

export default function TitulosAdmin() {
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
      alert("✅ Títulos guardados exitosamente");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("❌ Error al guardar títulos");
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

  const secciones = [
    {
      key: 'experiencias',
      nombre: 'Experiencias',
      icon: Sparkles,
      gradient: 'from-orange-500 to-pink-500',
      shadowColor: 'shadow-orange-500/10',
      focusColor: 'focus:border-orange-400 focus:ring-orange-100'
    },
    {
      key: 'sobreNosotros',
      nombre: 'Sobre Nosotros',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500',
      shadowColor: 'shadow-purple-500/10',
      focusColor: 'focus:border-purple-400 focus:ring-purple-100'
    },
    {
      key: 'servicios',
      nombre: 'Servicios',
      icon: ShoppingBag,
      gradient: 'from-blue-500 to-indigo-500',
      shadowColor: 'shadow-blue-500/10',
      focusColor: 'focus:border-blue-400 focus:ring-blue-100'
    },
    {
      key: 'comoFunciona',
      nombre: 'Cómo Funciona',
      icon: Zap,
      gradient: 'from-green-500 to-emerald-500',
      shadowColor: 'shadow-green-500/10',
      focusColor: 'focus:border-green-400 focus:ring-green-100'
    },
    {
      key: 'galeria',
      nombre: 'Galería',
      icon: ImageIcon,
      gradient: 'from-amber-500 to-orange-500',
      shadowColor: 'shadow-amber-500/10',
      focusColor: 'focus:border-amber-400 focus:ring-amber-100'
    },
    {
      key: 'testimonios',
      nombre: 'Testimonios',
      icon: MessageSquare,
      gradient: 'from-rose-500 to-pink-500',
      shadowColor: 'shadow-rose-500/10',
      focusColor: 'focus:border-rose-400 focus:ring-rose-100'
    },
    {
      key: 'faq',
      nombre: 'Preguntas Frecuentes',
      icon: HelpCircle,
      gradient: 'from-indigo-500 to-purple-500',
      shadowColor: 'shadow-indigo-500/10',
      focusColor: 'focus:border-indigo-400 focus:ring-indigo-100'
    }
  ];

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
                  <Type className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Títulos de Secciones
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">Edita los encabezados de cada sección del sitio</p>
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

      {/* Content Grid */}
      <div className="max-w-[1600px] mx-auto px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          {secciones.map((seccion) => {
            const data = contenido.home.secciones[seccion.key];
            if (!data) return null;

            const Icon = seccion.icon;

            return (
              <div
                key={seccion.key}
                className={`backdrop-blur-xl bg-white/80 rounded-3xl border border-gray-200/50 shadow-xl ${seccion.shadowColor} overflow-hidden transition-all duration-300 hover:shadow-2xl`}
              >
                {/* Header con Gradiente */}
                <div className="p-6 border-b border-gray-100/50 bg-gradient-to-br from-gray-50/30 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${seccion.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{seccion.nombre}</h3>
                      <p className="text-xs text-gray-500">Sección del sitio web</p>
                    </div>
                  </div>
                </div>

                {/* Contenido de la Card */}
                <div className="p-6 space-y-5">
                  {/* Badge */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                      <Tag className="w-4 h-4 text-gray-400" />
                      Badge
                      <span className="ml-auto text-xs text-gray-400 font-normal">Opcional</span>
                    </label>
                    <input
                      type="text"
                      value={data.badge || ''}
                      onChange={(e) => actualizar(["home", "secciones", seccion.key, "badge"], e.target.value)}
                      placeholder="Etiqueta pequeña"
                      className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white ${seccion.focusColor} focus:ring-4 outline-none transition-all text-gray-900 font-medium placeholder-gray-400 shadow-sm hover:shadow-md`}
                    />
                  </div>

                  {/* Título Principal */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${seccion.gradient}`}></div>
                      Título principal
                    </label>
                    <input
                      type="text"
                      value={data.titulo || ''}
                      onChange={(e) => actualizar(["home", "secciones", seccion.key, "titulo"], e.target.value)}
                      placeholder="Título de la sección"
                      className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white ${seccion.focusColor} focus:ring-4 outline-none transition-all text-gray-900 font-semibold placeholder-gray-400 shadow-sm hover:shadow-md`}
                    />
                  </div>

                  {/* Descripción */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                      <AlignLeft className="w-4 h-4 text-gray-400" />
                      Descripción
                    </label>
                    <textarea
                      value={data.descripcion || ''}
                      onChange={(e) => actualizar(["home", "secciones", seccion.key, "descripcion"], e.target.value)}
                      rows={3}
                      placeholder="Descripción de la sección"
                      className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white ${seccion.focusColor} focus:ring-4 outline-none transition-all text-gray-900 font-medium placeholder-gray-400 resize-none shadow-sm hover:shadow-md`}
                    />
                  </div>
                </div>

                {/* Footer con Indicador de Color */}
                <div className="px-6 py-4 bg-gradient-to-br from-gray-50/50 to-transparent border-t border-gray-100/50">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${seccion.gradient} shadow-lg`}></div>
                    <span className="text-sm font-semibold text-gray-600">{seccion.nombre}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box Premium */}
        <div className="mt-10 backdrop-blur-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 rounded-3xl border border-blue-200/50 shadow-xl shadow-blue-500/10 overflow-hidden">
          <div className="p-8">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-30"></div>
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Sobre los Títulos de Sección</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-1.5 flex-shrink-0"></div>
                    <div><strong className="text-gray-900">Badge:</strong> Etiqueta pequeña opcional que aparece sobre el título</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-1.5 flex-shrink-0"></div>
                    <div><strong className="text-gray-900">Título:</strong> Encabezado principal de la sección</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-1.5 flex-shrink-0"></div>
                    <div><strong className="text-gray-900">Descripción:</strong> Texto explicativo debajo del título</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-1.5 flex-shrink-0"></div>
                    <div>Cada sección tiene su propio <strong className="text-gray-900">color identificador</strong> para una mejor organización</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
