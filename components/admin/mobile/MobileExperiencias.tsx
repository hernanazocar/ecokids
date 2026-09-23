"use client";

import { useState, useEffect } from "react";
import { Save, Trash2, Plus, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

export default function MobileExperiencias() {
  const [experiencias, setExperiencias] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    cargarExperiencias();
  }, []);

  const cargarExperiencias = async () => {
    try {
      const res = await fetch("/api/experiencias");
      const data = await res.json();
      setExperiencias(data.experiencias || []);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const guardar = async () => {
    setSaving(true);
    try {
      await fetch("/api/experiencias", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ experiencias })
      });
      alert("✅ Experiencias guardadas");
    } catch (error) {
      alert("❌ Error al guardar");
    } finally {
      setSaving(false);
    }
  };

  const actualizar = (index: number, campo: string, valor: any) => {
    const nuevas = [...experiencias];
    (nuevas[index] as any)[campo] = valor;
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
    setExpandedId(nueva.id);
  };

  const eliminar = (index: number) => {
    if (confirm("¿Eliminar esta experiencia?")) {
      setExperiencias(experiencias.filter((_, i) => i !== index));
    }
  };

  if (experiencias.length === 0) {
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
        <h2 className="text-xl font-bold text-gray-900">Experiencias ({experiencias.length})</h2>
        <button
          onClick={guardar}
          disabled={saving}
          className="px-5 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-all disabled:opacity-50 flex items-center gap-2"
        >
          <Save size={18} strokeWidth={2.5} />
          <span>{saving ? "Guardando..." : "Guardar"}</span>
        </button>
      </div>

      {/* Add Button */}
      <button
        onClick={agregarExperiencia}
        className="w-full p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-dashed border-emerald-300 rounded-2xl active:bg-emerald-100 transition-all flex flex-col items-center gap-3"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg">
          <Plus size={28} className="text-white" strokeWidth={2.5} />
        </div>
        <span className="font-bold text-emerald-700 text-base">Nueva Experiencia</span>
      </button>

      {/* Experiences List */}
      <div className="space-y-3">
        {experiencias.map((exp, index) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div
              key={exp.id}
              className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden"
            >
              {/* Header Card */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                className="w-full p-5 flex items-center justify-between active:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Sparkles size={24} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-base truncate">{exp.nombre}</h3>
                    <p className="text-sm text-gray-500 font-medium">{exp.estadoTexto}</p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp size={24} className="text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown size={24} className="text-gray-400 flex-shrink-0" />
                )}
              </button>

              {/* Expanded Form */}
              {isExpanded && (
                <div className="p-5 pt-0 space-y-4 border-t border-gray-100">
                  {/* Nombre */}
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Nombre</label>
                    <input
                      type="text"
                      value={exp.nombre}
                      onChange={(e) => actualizar(index, "nombre", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none font-medium text-gray-900"
                    />
                  </div>

                  {/* Descripción */}
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Descripción</label>
                    <textarea
                      value={exp.descripcion}
                      onChange={(e) => actualizar(index, "descripcion", e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none font-medium text-gray-900 resize-none"
                    />
                  </div>

                  {/* Detalles Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Duración</label>
                      <input
                        type="text"
                        value={exp.duracion}
                        onChange={(e) => actualizar(index, "duracion", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Edades</label>
                      <input
                        type="text"
                        value={exp.edades}
                        onChange={(e) => actualizar(index, "edades", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium text-gray-900"
                      />
                    </div>
                  </div>

                  {/* Precio y Estado */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Precio</label>
                      <input
                        type="text"
                        value={exp.precio}
                        onChange={(e) => actualizar(index, "precio", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">Estado</label>
                      <select
                        value={exp.estado}
                        onChange={(e) => actualizar(index, "estado", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium text-gray-900"
                      >
                        <option value="proximamente">Próximamente</option>
                        <option value="disponible">Disponible</option>
                        <option value="realizada">Realizada</option>
                      </select>
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => eliminar(index)}
                    className="w-full p-4 bg-red-500 text-white rounded-xl font-bold shadow-md active:bg-red-600 transition-all flex items-center justify-center gap-2"
                  >
                    <Trash2 size={18} strokeWidth={2.5} />
                    <span>Eliminar Experiencia</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="h-4"></div>
    </div>
  );
}
