"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Plus, Trash2, Image as ImageIcon, Type, Clock, Users, DollarSign, CheckCircle, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import MobileExperiencias from "@/components/admin/mobile/MobileExperiencias";

interface Experiencia {
  id: number;
  nombre: string;
  titulo1: string;
  titulo2: string;
  color: string;
  imagen: string;
  descripcion: string;
  incluye: string[];
  duracion: string;
  edades: string;
  precio: string;
  estado: string;
  estadoTexto: string;
}

export default function ExperienciasAdmin() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [experiencias, setExperiencias] = useState<Experiencia[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { isMobile, isClient } = useIsMobile();

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
      cargarExperiencias();
    }
  }, [router]);

  const cargarExperiencias = async () => {
    try {
      const res = await fetch("/api/experiencias");
      const data = await res.json();
      setExperiencias(data.experiencias || []);
    } catch (error) {
      console.error("Error al cargar experiencias:", error);
    } finally {
      setLoading(false);
    }
  };

  const guardarExperiencias = async () => {
    setSaving(true);
    try {
      await fetch("/api/experiencias", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ experiencias })
      });
      alert("✅ Experiencias guardadas exitosamente");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("❌ Error al guardar experiencias");
    } finally {
      setSaving(false);
    }
  };

  const actualizarExperiencia = (index: number, campo: string, valor: any) => {
    const nuevas = [...experiencias];
    (nuevas[index] as any)[campo] = valor;
    setExperiencias(nuevas);
  };

  const actualizarIncluye = (expIndex: number, incluyeIndex: number, valor: string) => {
    const nuevas = [...experiencias];
    nuevas[expIndex].incluye[incluyeIndex] = valor;
    setExperiencias(nuevas);
  };

  const agregarIncluye = (expIndex: number) => {
    const nuevas = [...experiencias];
    nuevas[expIndex].incluye.push("");
    setExperiencias(nuevas);
  };

  const eliminarIncluye = (expIndex: number, incluyeIndex: number) => {
    const nuevas = [...experiencias];
    nuevas[expIndex].incluye.splice(incluyeIndex, 1);
    setExperiencias(nuevas);
  };

  const agregarExperiencia = () => {
    const nueva = {
      id: experiencias.length + 1,
      nombre: "Nueva Experiencia",
      titulo1: "Nueva",
      titulo2: "Experiencia",
      color: "#ff6b35",
      gradiente: "from-orange-100 to-white",
      gradienteBoton: "from-orange-500 to-pink-500",
      imagen: "/cangrejo1.png",
      descripcion: "",
      incluye: [""],
      duracion: "2 horas",
      edades: "3-12 años",
      precio: "$8.000",
      estado: "proximamente",
      estadoTexto: "Próximamente"
    };
    setExperiencias([...experiencias, nueva]);
  };

  const eliminarExperiencia = (index: number) => {
    if (confirm("¿Seguro que quieres eliminar esta experiencia?")) {
      const nuevas = experiencias.filter((_, i) => i !== index);
      setExperiencias(nuevas);
    }
  };

  if (!isAuth || loading) return null;

  // Versión móvil
  if (isClient && isMobile) {
    return <MobileExperiencias />;
  }

  // Versión desktop
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-pink-50/30">
      {/* Header Premium con Glassmorphism */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 shadow-lg shadow-orange-500/5">
        <div className="max-w-[1600px] mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Experiencias
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">Gestiona las aventuras y talleres disponibles</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={agregarExperiencia}
                className="group relative overflow-hidden px-6 py-3.5 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                  <span>Nueva Experiencia</span>
                </div>
              </button>
              <button
                onClick={guardarExperiencias}
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

      {/* Content */}
      <div className="max-w-[1600px] mx-auto px-8 py-6 space-y-5">
        {experiencias.map((exp, index) => (
          <div
            key={exp.id}
            className="group backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-orange-500/5 overflow-hidden transition-all duration-300 hover:shadow-orange-500/10 hover:shadow-2xl relative"
          >
            <button
              onClick={() => eliminarExperiencia(index)}
              className="absolute top-3 right-3 z-20 px-3 py-1.5 flex items-center gap-1.5 rounded-lg bg-red-500 text-white opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all shadow-lg text-xs font-bold"
            >
              <Trash2 className="w-3 h-3" strokeWidth={2.5} />
              <span>Eliminar</span>
            </button>

            <div className="grid lg:grid-cols-5 gap-2">
              {/* Sidebar: Imagen y Preview */}
              <div className="lg:col-span-1">
                <div className="h-full bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 p-3 flex flex-col border-r border-gray-200/50">
                  {/* Header de la experiencia */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold shadow-lg"
                      style={{background: exp.color, color: 'white'}}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Experiencia</p>
                      <h3 className="text-sm font-bold text-gray-900">{exp.nombre}</h3>
                    </div>
                  </div>

                  {/* Preview de Imagen */}
                  <div className="flex-1 rounded-xl overflow-hidden bg-white border-2 border-gray-200 mb-2 relative shadow-inner">
                    {exp.imagen ? (
                      <img src={exp.imagen} alt={exp.nombre} className="w-full h-full object-cover min-h-[80px] max-h-[120px]" />
                    ) : (
                      <div className="w-full h-full min-h-[80px] max-h-[120px] flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                        <ImageIcon className="w-10 h-10 text-gray-300 mb-1.5" strokeWidth={1.5} />
                        <p className="text-xs text-gray-400 font-medium">Sin imagen</p>
                      </div>
                    )}
                  </div>

                  {/* Controles de Imagen */}
                  <div>
                    {/* Botón Upload Premium */}
                    <label className="block">
                      <div className="group/btn cursor-pointer relative overflow-hidden px-4 py-2.5 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                        <div className="flex items-center justify-center gap-2 text-white font-bold text-sm">
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
                            const nuevaRuta = `/${file.name}`;
                            actualizarExperiencia(index, "imagen", nuevaRuta);
                            alert(`📸 Imagen seleccionada: ${file.name}\n\n⚠️ Recuerda copiar esta imagen a /public/\nRuta actualizada: ${nuevaRuta}`);
                          }
                        }}
                      />
                    </label>
                    {exp.imagen && (
                      <p className="mt-1.5 text-xs text-gray-600 font-medium truncate">
                        📁 {exp.imagen}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Main Content: Formularios */}
              <div className="lg:col-span-4 p-4 space-y-2">
                {/* Títulos */}
                <div className="backdrop-blur-xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-xl border border-blue-200/30 p-3">
                  <h4 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Type className="w-4 h-4" />
                    Títulos del Banner
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Título parte 1</label>
                      <input
                        type="text"
                        value={exp.titulo1}
                        onChange={(e) => actualizarExperiencia(index, "titulo1", e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Título parte 2 (gradiente)</label>
                      <input
                        type="text"
                        value={exp.titulo2}
                        onChange={(e) => actualizarExperiencia(index, "titulo2", e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-pink-50 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-orange-600 font-bold transition-all shadow-sm hover:shadow-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    Descripción
                  </label>
                  <textarea
                    value={exp.descripcion}
                    onChange={(e) => actualizarExperiencia(index, "descripcion", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 text-sm rounded-lg border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-gray-900 font-medium transition-all resize-none shadow-sm hover:shadow-md"
                  />
                </div>

                {/* Detalles en Grid */}
                <div className="grid md:grid-cols-4 gap-2">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      Duración
                    </label>
                    <input
                      type="text"
                      value={exp.duracion}
                      onChange={(e) => actualizarExperiencia(index, "duracion", e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      Edades
                    </label>
                    <input
                      type="text"
                      value={exp.edades}
                      onChange={(e) => actualizarExperiencia(index, "edades", e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-amber-500" />
                      Precio
                    </label>
                    <input
                      type="text"
                      value={exp.precio}
                      onChange={(e) => actualizarExperiencia(index, "precio", e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-500" />
                      Estado
                    </label>
                    <select
                      value={exp.estado}
                      onChange={(e) => {
                        actualizarExperiencia(index, "estado", e.target.value);
                        actualizarExperiencia(index, "estadoTexto", e.target.value === "finalizada" ? "Ya vivimos esta aventura" : "Próximamente");
                      }}
                      className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md"
                    >
                      <option value="proximamente">Próximamente</option>
                      <option value="finalizada">Finalizada</option>
                      <option value="activa">Activa</option>
                    </select>
                  </div>
                </div>

                {/* Qué Incluye */}
                <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-50/80 to-green-50/80 rounded-2xl border border-emerald-200/50 p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" strokeWidth={2.5} />
                      Qué Incluye
                    </h4>
                    <button
                      onClick={() => agregarIncluye(index)}
                      className="group/btn relative overflow-hidden px-4 py-2 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center gap-1.5 text-sm">
                        <Plus className="w-4 h-4" strokeWidth={2.5} />
                        <span>Agregar</span>
                      </div>
                    </button>
                  </div>
                  <div className="space-y-2">
                    {exp.incluye.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex gap-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => actualizarIncluye(index, itemIndex, e.target.value)}
                          placeholder="Item incluido..."
                          className="flex-1 px-3 py-2 text-sm rounded-lg border-2 border-gray-200 bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                        />
                        <button
                          onClick={() => eliminarIncluye(index, itemIndex)}
                          className="px-3 py-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm hover:shadow-md"
                        >
                          <Trash2 className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
