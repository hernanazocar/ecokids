"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Trash2, Plus, Sparkles, ShoppingBag, Palette, Type, AlignLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import MobileServicios from "@/components/admin/mobile/MobileServicios";

export default function ServiciosAdmin() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [servicios, setServicios] = useState<any>(null);
  const { isMobile, isClient } = useIsMobile();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
      cargarServicios();
    }
  }, [router]);

  const cargarServicios = async () => {
    try {
      const res = await fetch("/api/servicios");
      const data = await res.json();

      // Asegurar que ctaBanner existe
      if (!data.ctaBanner) {
        data.ctaBanner = {
          titulo: "¿Listo para comenzar?",
          descripcion: "Reserva tu experiencia hoy",
          boton: "Contactar"
        };
      }

      setServicios(data);
    } catch (error) {
      console.error("Error al cargar servicios:", error);
    } finally {
      setLoading(false);
    }
  };

  const guardar = async () => {
    setSaving(true);
    try {
      await fetch("/api/servicios", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(servicios)
      });
      alert("✅ Servicios guardados exitosamente");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("❌ Error al guardar servicios");
    } finally {
      setSaving(false);
    }
  };

  const actualizarServicio = (index: number, campo: string, valor: any) => {
    const nuevos = [...servicios.servicios];
    (nuevos[index] as any)[campo] = valor;
    setServicios({ ...servicios, servicios: nuevos });
  };

  const eliminarServicio = (index: number) => {
    if (confirm("¿Eliminar este servicio?")) {
      const nuevos = servicios.servicios.filter((_: any, i: number) => i !== index);
      setServicios({ ...servicios, servicios: nuevos });
    }
  };

  const agregarServicio = () => {
    const nuevo = {
      id: servicios.servicios.length + 1,
      icono: "✨",
      nombre: "Nuevo Servicio",
      titulo: "Nuevo Servicio",
      descripcion: "Descripción del servicio",
      color: "from-orange-500 to-pink-500"
    };
    setServicios({ ...servicios, servicios: [...servicios.servicios, nuevo] });
  };

  if (!isAuth || loading || !servicios) {
    if (isClient && isMobile && isAuth) return <MobileServicios />;
    return null;
  }

  if (isClient && isMobile) return <MobileServicios />;

  const gradientes = [
    { value: "from-orange-500 to-pink-500", label: "Naranja → Rosa" },
    { value: "from-purple-500 to-pink-500", label: "Morado → Rosa" },
    { value: "from-blue-500 to-indigo-500", label: "Azul → Índigo" },
    { value: "from-green-500 to-emerald-500", label: "Verde → Esmeralda" },
    { value: "from-amber-500 to-orange-500", label: "Ámbar → Naranja" },
    { value: "from-rose-500 to-pink-500", label: "Rosa → Pink" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-pink-50/30">
      {/* Header Premium con Glassmorphism */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 shadow-lg shadow-blue-500/5">
        <div className="max-w-[1600px] mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                  <ShoppingBag className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Servicios
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">Los tipos de servicios que ofrece EcoKids</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={agregarServicio}
                className="group relative overflow-hidden px-6 py-3.5 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                  <span>Nuevo Servicio</span>
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
        {/* Servicios Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {servicios.servicios.map((serv: any, index: number) => (
            <div
              key={serv.id}
              className="group backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-blue-500/5 overflow-hidden hover:shadow-blue-500/10 hover:shadow-2xl transition-all duration-300 relative"
            >
              <button
                onClick={() => eliminarServicio(index)}
                className="absolute top-3 right-3 z-10 px-3 py-1.5 flex items-center gap-1.5 rounded-lg bg-red-500 text-white opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all shadow-lg text-xs font-bold"
              >
                <Trash2 className="w-3 h-3" strokeWidth={2.5} />
                <span>Eliminar</span>
              </button>

              {/* Header con Gradiente */}
              <div className="p-4 border-b border-gray-100/50 bg-gradient-to-br from-gray-50/30 to-transparent">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${typeof serv.color === 'string' ? serv.color : 'from-orange-500 to-pink-500'} flex items-center justify-center shadow-lg text-xl`}>
                    {serv.icono || '✨'}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Servicio #{index + 1}</p>
                    <h3 className="text-base font-bold text-gray-900">{serv.nombre || serv.titulo || `Servicio ${index + 1}`}</h3>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-4 space-y-3">
                {/* Icono */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Icono (Emoji)</label>
                  <input
                    type="text"
                    value={serv.icono}
                    onChange={(e) => actualizarServicio(index, "icono", e.target.value)}
                    placeholder="✨"
                    className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-xl text-center transition-all shadow-sm hover:shadow-md"
                  />
                </div>

                {/* Nombre */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                    <Type className="w-4 h-4 text-blue-500" />
                    Nombre del Servicio
                  </label>
                  <input
                    type="text"
                    value={serv.nombre || serv.titulo || ''}
                    onChange={(e) => {
                      actualizarServicio(index, "nombre", e.target.value);
                      actualizarServicio(index, "titulo", e.target.value);
                    }}
                    placeholder="Ej: Aventuras EcoKids"
                    className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md"
                  />
                </div>

                {/* Descripción */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                    <AlignLeft className="w-4 h-4 text-purple-500" />
                    Descripción
                  </label>
                  <textarea
                    value={serv.descripcion}
                    onChange={(e) => actualizarServicio(index, "descripcion", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-gray-900 font-medium transition-all resize-none shadow-sm hover:shadow-md"
                    placeholder="Descripción del servicio..."
                  />
                </div>

                {/* Color Gradiente */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Palette className="w-4 h-4 text-pink-500" />
                    Color del Servicio
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {gradientes.map((grad) => (
                      <button
                        key={grad.value}
                        onClick={() => actualizarServicio(index, "color", grad.value)}
                        className={`p-2 rounded-lg border-2 transition-all ${
                          serv.color === grad.value
                            ? 'border-blue-500 bg-blue-50 scale-105'
                            : 'border-gray-200 hover:border-gray-300 hover:scale-105'
                        }`}
                      >
                        <div className={`h-5 rounded-lg bg-gradient-to-r ${grad.value} mb-1.5 shadow-sm`}></div>
                        <p className="text-xs font-semibold text-gray-700">{grad.label}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-orange-500/5 overflow-hidden">
          <div className="p-4 border-b border-gray-100/50 bg-gradient-to-br from-orange-50/30 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Banner de Llamado a Acción</h3>
                <p className="text-xs text-gray-500">Invitación final para contactar</p>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Título del Banner</label>
              <input
                type="text"
                value={servicios.ctaBanner.titulo}
                onChange={(e) => setServicios({...servicios, ctaBanner: {...servicios.ctaBanner, titulo: e.target.value}})}
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-gradient-to-r from-orange-50 to-pink-50 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-gray-900 font-bold transition-all shadow-sm hover:shadow-md"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Descripción</label>
              <textarea
                value={servicios.ctaBanner.descripcion}
                onChange={(e) => setServicios({...servicios, ctaBanner: {...servicios.ctaBanner, descripcion: e.target.value}})}
                rows={2}
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-gray-900 font-medium transition-all resize-none shadow-sm hover:shadow-md"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Texto del Botón</label>
              <input
                type="text"
                value={servicios.ctaBanner.boton}
                onChange={(e) => setServicios({...servicios, ctaBanner: {...servicios.ctaBanner, boton: e.target.value}})}
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
