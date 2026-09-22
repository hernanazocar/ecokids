"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Bot, MessageSquare, Trash2, Plus, Type, AlignLeft, Sparkles, ToggleLeft, ToggleRight } from "lucide-react";

export default function AsistenteAIAdmin() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [asistente, setAsistente] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
      cargarAsistente();
    }
  }, [router]);

  const cargarAsistente = async () => {
    try {
      const res = await fetch("/api/asistente-ai");
      const data = await res.json();
      setAsistente(data);
    } catch (error) {
      console.error("Error al cargar asistente:", error);
    } finally {
      setLoading(false);
    }
  };

  const guardar = async () => {
    setSaving(true);
    try {
      await fetch("/api/asistente-ai", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(asistente)
      });
      alert("✅ Asistente AI guardado exitosamente");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("❌ Error al guardar asistente");
    } finally {
      setSaving(false);
    }
  };

  const actualizarConfig = (campo: string, valor: any) => {
    setAsistente({
      ...asistente,
      configuracion: {
        ...asistente.configuracion,
        [campo]: valor
      }
    });
  };

  const actualizarRespuesta = (campo: string, valor: string) => {
    setAsistente({
      ...asistente,
      respuestas: {
        ...asistente.respuestas,
        [campo]: valor
      }
    });
  };

  const agregarPregunta = () => {
    const nuevaPregunta = {
      id: asistente.preguntasRapidas.length + 1,
      pregunta: "Nueva pregunta",
      categoria: "general"
    };
    setAsistente({
      ...asistente,
      preguntasRapidas: [...asistente.preguntasRapidas, nuevaPregunta]
    });
  };

  const actualizarPregunta = (index: number, campo: string, valor: any) => {
    const nuevas = [...asistente.preguntasRapidas];
    nuevas[index][campo] = valor;
    setAsistente({ ...asistente, preguntasRapidas: nuevas });
  };

  const eliminarPregunta = (index: number) => {
    if (confirm("¿Eliminar esta pregunta rápida?")) {
      const nuevas = asistente.preguntasRapidas.filter((_: any, i: number) => i !== index);
      setAsistente({ ...asistente, preguntasRapidas: nuevas });
    }
  };

  if (!isAuth || loading || !asistente) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      {/* Header Premium con Glassmorphism */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 shadow-lg shadow-blue-500/5">
        <div className="max-w-[1600px] mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Asistente AI
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">Configura el chatbot del sitio web</p>
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

      <div className="max-w-[1600px] mx-auto px-8 py-6 space-y-4">
        {/* Configuración General */}
        <div className="backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-blue-500/5 overflow-hidden">
          <div className="p-4 border-b border-gray-100/50 bg-gradient-to-br from-blue-50/30 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Configuración General</h3>
                <p className="text-xs text-gray-500">Personaliza el asistente virtual</p>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-4">
            {/* Activado/Desactivado */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Estado del Asistente</h4>
                <p className="text-sm text-gray-600">Activar o desactivar el chatbot en el sitio web</p>
              </div>
              <button
                onClick={() => actualizarConfig("activado", !asistente.configuracion.activado)}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  asistente.configuracion.activado
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/30"
                    : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ${
                    asistente.configuracion.activado ? "right-1" : "left-1"
                  }`}
                >
                  {asistente.configuracion.activado ? (
                    <ToggleRight className="w-6 h-6 text-green-600" />
                  ) : (
                    <ToggleLeft className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                  <Type className="w-4 h-4 text-blue-500" />
                  Nombre del Asistente
                </label>
                <input
                  type="text"
                  value={asistente.configuracion.nombre}
                  onChange={(e) => actualizarConfig("nombre", e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md"
                  placeholder="Colorín"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Avatar (Emoji)</label>
                <input
                  type="text"
                  value={asistente.configuracion.avatar}
                  onChange={(e) => actualizarConfig("avatar", e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-2xl text-center transition-all shadow-sm hover:shadow-md"
                  placeholder="🦀"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                <AlignLeft className="w-4 h-4 text-indigo-500" />
                Descripción
              </label>
              <input
                type="text"
                value={asistente.configuracion.descripcion}
                onChange={(e) => actualizarConfig("descripcion", e.target.value)}
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                placeholder="Tu amigo cangrejo y asistente de EcoKids"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-purple-500" />
                Mensaje de Bienvenida
              </label>
              <textarea
                value={asistente.configuracion.mensajeBienvenida}
                onChange={(e) => actualizarConfig("mensajeBienvenida", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-gray-900 font-medium transition-all resize-none shadow-sm hover:shadow-md"
                placeholder="¡Hola! Soy tu asistente virtual..."
              />
            </div>
          </div>
        </div>

        {/* Preguntas Rápidas */}
        <div className="backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-purple-500/5 overflow-hidden">
          <div className="p-4 border-b border-gray-100/50 bg-gradient-to-br from-purple-50/30 to-transparent">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Preguntas Rápidas</h3>
                  <p className="text-xs text-gray-500">Botones de acceso rápido para usuarios</p>
                </div>
              </div>
              <button
                onClick={agregarPregunta}
                className="group relative overflow-hidden px-4 py-2 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-xs"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-1.5">
                  <Plus className="w-3 h-3" strokeWidth={2.5} />
                  <span>Agregar Pregunta</span>
                </div>
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="grid md:grid-cols-2 gap-3">
              {asistente.preguntasRapidas.map((pregunta: any, index: number) => (
                <div
                  key={pregunta.id}
                  className="group p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 hover:border-purple-300 transition-all relative"
                >
                  <button
                    onClick={() => eliminarPregunta(index)}
                    className="absolute top-2 right-2 px-2 py-1 flex items-center gap-1 rounded-lg bg-red-500 text-white opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all text-xs font-bold z-10"
                  >
                    <Trash2 className="w-3 h-3" strokeWidth={2.5} />
                  </button>
                  <input
                    type="text"
                    value={pregunta.pregunta}
                    onChange={(e) => actualizarPregunta(index, "pregunta", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-gray-900 font-semibold transition-all text-sm"
                    placeholder="¿Pregunta?"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Respuestas Predefinidas */}
        <div className="backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-emerald-500/5 overflow-hidden">
          <div className="p-4 border-b border-gray-100/50 bg-gradient-to-br from-emerald-50/30 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg">
                <AlignLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Respuestas Predefinidas</h3>
                <p className="text-xs text-gray-500">Personaliza las respuestas automáticas del chatbot</p>
              </div>
            </div>
          </div>

          <div className="p-4 grid md:grid-cols-2 gap-4">
            {Object.entries(asistente.respuestas).map(([key, value]: [string, any]) => (
              <div key={key}>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 capitalize">
                  {key === 'experiencias' && '🎨 Experiencias'}
                  {key === 'precios' && '💰 Precios'}
                  {key === 'reservas' && '📅 Reservas'}
                  {key === 'ubicacion' && '📍 Ubicación'}
                  {key === 'cumpleanos' && '🎂 Cumpleaños'}
                  {key === 'edades' && '👶 Edades'}
                  {key === 'duracion' && '⏰ Duración'}
                  {key === 'materiales' && '✂️ Materiales'}
                  {key === 'despedida' && '👋 Despedida'}
                  {key === 'agradecimiento' && '🙏 Agradecimiento'}
                </label>
                <textarea
                  value={value}
                  onChange={(e) => actualizarRespuesta(key, e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-gray-900 font-medium transition-all resize-none shadow-sm hover:shadow-md text-sm"
                  placeholder={`Respuesta para ${key}...`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
