"use client";

import { useState, useEffect } from "react";
import { Save, Settings as SettingsIcon } from "lucide-react";

export default function MobileConfiguracion() {
  const [config, setConfig] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    cargarConfig();
  }, []);

  const cargarConfig = async () => {
    try {
      const res = await fetch("/api/configuracion");
      const data = await res.json();
      setConfig(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const guardar = async () => {
    setSaving(true);
    try {
      await fetch("/api/configuracion", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config)
      });
      alert("✅ Configuración guardada");
    } catch (error) {
      alert("❌ Error al guardar");
    } finally {
      setSaving(false);
    }
  };

  const actualizar = (seccion: string, campo: string, valor: any) => {
    setConfig({
      ...config,
      [seccion]: {
        ...config[seccion],
        [campo]: valor
      }
    });
  };

  if (!config) {
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
        <h2 className="text-xl font-bold text-gray-900">Configuración</h2>
        <button
          onClick={guardar}
          disabled={saving}
          className="px-5 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-all disabled:opacity-50 flex items-center gap-2"
        >
          <Save size={18} strokeWidth={2.5} />
          <span>{saving ? "..." : "Guardar"}</span>
        </button>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {/* Contacto */}
        <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-gray-100">
          <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <SettingsIcon size={20} className="text-white" strokeWidth={2.5} />
            </div>
            Contacto
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Teléfono</label>
              <input
                type="text"
                value={config.contacto?.telefono || ""}
                onChange={(e) => actualizar("contacto", "telefono", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium text-gray-900"
                placeholder="+56 9 1234 5678"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Email</label>
              <input
                type="email"
                value={config.contacto?.email || ""}
                onChange={(e) => actualizar("contacto", "email", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium text-gray-900"
                placeholder="contacto@ecokids.cl"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Ubicación</label>
              <input
                type="text"
                value={config.contacto?.ubicacion || ""}
                onChange={(e) => actualizar("contacto", "ubicacion", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium text-gray-900"
                placeholder="Concón, V Región"
              />
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-gray-100">
          <h3 className="font-bold text-gray-900 text-lg mb-4">Redes Sociales</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Instagram</label>
              <input
                type="text"
                value={config.redesSociales?.instagram?.usuario || ""}
                onChange={(e) => actualizar("redesSociales", "instagram", { ...config.redesSociales?.instagram, usuario: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium text-gray-900"
                placeholder="@ecokids.experiencias"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-4"></div>
    </div>
  );
}
