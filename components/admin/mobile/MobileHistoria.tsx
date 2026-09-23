"use client";

import { useState, useEffect } from "react";
import { Save, Users } from "lucide-react";

export default function MobileHistoria() {
  const [historia, setHistoria] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    cargarHistoria();
  }, []);

  const cargarHistoria = async () => {
    try {
      const res = await fetch("/api/historia");
      const data = await res.json();
      setHistoria(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const guardar = async () => {
    setSaving(true);
    try {
      await fetch("/api/historia", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(historia)
      });
      alert("✅ Historia guardada");
    } catch (error) {
      alert("❌ Error al guardar");
    } finally {
      setSaving(false);
    }
  };

  if (!historia) {
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
        <h2 className="text-xl font-bold text-gray-900">Historia</h2>
        <button
          onClick={guardar}
          disabled={saving}
          className="px-5 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-all disabled:opacity-50 flex items-center gap-2"
        >
          <Save size={18} strokeWidth={2.5} />
          <span>{saving ? "..." : "Guardar"}</span>
        </button>
      </div>

      {/* Secciones */}
      <div className="space-y-4">
        {historia.secciones?.map((seccion: any, index: number) => (
          <div key={index} className="bg-white rounded-2xl p-5 shadow-lg border-2 border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Users size={20} className="text-white" strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{seccion.titulo}</h3>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Título</label>
                <input
                  type="text"
                  value={seccion.titulo}
                  onChange={(e) => {
                    const nuevas = [...historia.secciones];
                    nuevas[index].titulo = e.target.value;
                    setHistoria({ ...historia, secciones: nuevas });
                  }}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium text-gray-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Contenido</label>
                <textarea
                  value={seccion.contenido}
                  onChange={(e) => {
                    const nuevas = [...historia.secciones];
                    nuevas[index].contenido = e.target.value;
                    setHistoria({ ...historia, secciones: nuevas });
                  }}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium text-gray-900 resize-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-4"></div>
    </div>
  );
}
