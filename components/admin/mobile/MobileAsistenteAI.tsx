"use client";

import { useState, useEffect } from "react";
import { Save, Bot, MessageSquare, Sparkles } from "lucide-react";

export default function MobileAsistenteAI() {
  const [asistente, setAsistente] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    cargarAsistente();
  }, []);

  const cargarAsistente = async () => {
    try {
      const res = await fetch("/api/asistente-ai");
      const data = await res.json();
      setAsistente(data);
    } catch (error) {
      console.error("Error:", error);
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
      alert("✅ Asistente AI guardado");
    } catch (error) {
      alert("❌ Error al guardar");
    } finally {
      setSaving(false);
    }
  };

  if (!asistente) {
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
        <h2 className="text-xl font-bold text-gray-900">Asistente AI</h2>
        <button
          onClick={guardar}
          disabled={saving}
          className="px-5 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-all disabled:opacity-50 flex items-center gap-2"
        >
          <Save size={18} strokeWidth={2.5} />
          <span>{saving ? "..." : "Guardar"}</span>
        </button>
      </div>

      {/* Configuración */}
      <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
            <Bot size={20} className="text-white" strokeWidth={2.5} />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">Configuración</h3>
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Nombre</label>
            <input
              type="text"
              value={asistente.configuracion?.nombre || ""}
              onChange={(e) => setAsistente({
                ...asistente,
                configuracion: { ...asistente.configuracion, nombre: e.target.value }
              })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium text-gray-900"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Avatar (Emoji)</label>
            <input
              type="text"
              value={asistente.configuracion?.avatar || ""}
              onChange={(e) => setAsistente({
                ...asistente,
                configuracion: { ...asistente.configuracion, avatar: e.target.value }
              })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none text-2xl text-center font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Mensaje de Bienvenida</label>
            <textarea
              value={asistente.configuracion?.mensajeBienvenida || ""}
              onChange={(e) => setAsistente({
                ...asistente,
                configuracion: { ...asistente.configuracion, mensajeBienvenida: e.target.value }
              })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium text-gray-900 resize-none"
            />
          </div>
        </div>
      </div>

      <div className="h-4"></div>
    </div>
  );
}
