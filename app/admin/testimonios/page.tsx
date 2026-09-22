"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Trash2, Plus, Star, MessageSquare, User, Type, AlignLeft } from "lucide-react";

export default function TestimoniosAdmin() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [testimonios, setTestimonios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
      cargarTestimonios();
    }
  }, [router]);

  const cargarTestimonios = async () => {
    try {
      const res = await fetch("/api/testimonios");
      const data = await res.json();
      setTestimonios(data.testimonios || []);
    } catch (error) {
      console.error("Error al cargar testimonios:", error);
    } finally {
      setLoading(false);
    }
  };

  const guardar = async () => {
    setSaving(true);
    try {
      await fetch("/api/testimonios", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ testimonios })
      });
      alert("✅ Testimonios guardados exitosamente");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("❌ Error al guardar testimonios");
    } finally {
      setSaving(false);
    }
  };

  const actualizarTestimonio = (index: number, campo: string, valor: any) => {
    const nuevos = [...testimonios];
    (nuevos[index] as any)[campo] = valor;
    setTestimonios(nuevos);
  };

  const eliminarTestimonio = (index: number) => {
    if (confirm("¿Eliminar este testimonio?")) {
      setTestimonios(testimonios.filter((_, i) => i !== index));
    }
  };

  const agregarTestimonio = () => {
    const nuevo = {
      id: testimonios.length + 1,
      nombre: "Nombre del padre/madre",
      texto: "Testimonio aquí...",
      rating: 5,
      avatar: "👤",
      destacado: false
    };
    setTestimonios([...testimonios, nuevo]);
  };

  if (!isAuth || loading) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30">
      {/* Header Premium con Glassmorphism */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 shadow-lg shadow-purple-500/5">
        <div className="max-w-[1600px] mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Testimonios
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">Opiniones de las familias</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={agregarTestimonio}
                className="group relative overflow-hidden px-6 py-3.5 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                  <span>Nuevo Testimonio</span>
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
        <div className="grid md:grid-cols-2 gap-4">
          {testimonios.map((test, index) => (
            <div
              key={test.id}
              className="group backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-purple-500/5 overflow-hidden hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300 relative"
            >
              <button
                onClick={() => eliminarTestimonio(index)}
                className="absolute top-3 right-3 z-10 px-3 py-1.5 flex items-center gap-1.5 rounded-lg bg-red-500 text-white opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all shadow-lg text-xs font-bold"
              >
                <Trash2 className="w-3 h-3" strokeWidth={2.5} />
                <span>Eliminar</span>
              </button>

              {/* Header */}
              <div className="p-4 border-b border-gray-100/50 bg-gradient-to-br from-gray-50/30 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg text-xl">
                    {test.avatar || '👤'}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Testimonio #{index + 1}</p>
                    <h3 className="text-base font-bold text-gray-900">{test.nombre}</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < test.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-4 space-y-3">
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                    <User className="w-4 h-4 text-purple-500" />
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={test.nombre}
                    onChange={(e) => actualizarTestimonio(index, "nombre", e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md"
                    placeholder="Nombre del padre/madre"
                  />
                </div>

                {/* Avatar y Rating en Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Avatar (Emoji)</label>
                    <input
                      type="text"
                      value={test.avatar}
                      onChange={(e) => actualizarTestimonio(index, "avatar", e.target.value)}
                      placeholder="👤"
                      className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-2xl text-center transition-all shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Rating</label>
                    <select
                      value={test.rating}
                      onChange={(e) => actualizarTestimonio(index, "rating", parseInt(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md"
                    >
                      {[5, 4, 3, 2, 1].map(n => (
                        <option key={n} value={n}>{n} estrellas</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Testimonio */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                    <AlignLeft className="w-4 h-4 text-purple-500" />
                    Testimonio
                  </label>
                  <textarea
                    value={test.texto}
                    onChange={(e) => actualizarTestimonio(index, "texto", e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-gray-900 font-medium transition-all resize-none shadow-sm hover:shadow-md"
                    placeholder="El testimonio de la familia..."
                  />
                </div>

                {/* Destacado */}
                <label className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 cursor-pointer hover:bg-purple-100/50 transition-all">
                  <input
                    type="checkbox"
                    checked={test.destacado}
                    onChange={(e) => actualizarTestimonio(index, "destacado", e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-purple-500 focus:ring-purple-500 cursor-pointer"
                  />
                  <div>
                    <span className="text-sm font-bold text-gray-900">Destacar este testimonio</span>
                    <p className="text-xs text-gray-600">Aparecerá en una posición destacada</p>
                  </div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
