"use client";

import { useState, useEffect } from "react";
import { Save, Trash2, Plus, ChevronDown, ChevronUp } from "lucide-react";

interface Field {
  key: string;
  label: string;
  type: "text" | "textarea" | "select";
  options?: string[];
  rows?: number;
}

interface Props {
  title: string;
  apiEndpoint: string;
  dataKey: string;
  icon: React.ComponentType<any>;
  fields: Field[];
  newItemTemplate: any;
}

export default function MobileGenericList({ title, apiEndpoint, dataKey, icon: Icon, fields, newItemTemplate }: Props) {
  const [items, setItems] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const res = await fetch(apiEndpoint);
      const data = await res.json();
      setItems(data[dataKey] || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const guardar = async () => {
    setSaving(true);
    try {
      await fetch(apiEndpoint, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [dataKey]: items })
      });
      alert(`✅ ${title} guardados`);
    } catch (error) {
      alert("❌ Error al guardar");
    } finally {
      setSaving(false);
    }
  };

  const actualizar = (index: number, campo: string, valor: any) => {
    const nuevos = [...items];
    nuevos[index][campo] = valor;
    setItems(nuevos);
  };

  const agregar = () => {
    const nuevo = { ...newItemTemplate, id: items.length + 1 };
    setItems([...items, nuevo]);
    setExpandedId(nuevo.id);
  };

  const eliminar = (index: number) => {
    if (confirm(`¿Eliminar este ${title.toLowerCase().slice(0, -1)}?`)) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  if (loading) {
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
        <h2 className="text-xl font-bold text-gray-900">{title} ({items.length})</h2>
        <button
          onClick={guardar}
          disabled={saving}
          className="px-5 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-all disabled:opacity-50 flex items-center gap-2"
        >
          <Save size={18} strokeWidth={2.5} />
          <span>{saving ? "..." : "Guardar"}</span>
        </button>
      </div>

      {/* Add Button */}
      <button
        onClick={agregar}
        className="w-full p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-dashed border-emerald-300 rounded-2xl active:bg-emerald-100 transition-all flex flex-col items-center gap-3"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg">
          <Plus size={28} className="text-white" strokeWidth={2.5} />
        </div>
        <span className="font-bold text-emerald-700 text-base">Agregar Nuevo</span>
      </button>

      {/* Items List */}
      <div className="space-y-3">
        {items.map((item, index) => {
          const isExpanded = expandedId === item.id;
          const displayName = item[fields[0].key] || "Sin nombre";

          return (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden">
              {/* Header */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="w-full p-5 flex items-center justify-between active:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Icon size={24} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-base truncate">{displayName}</h3>
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
                  {fields.map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">{field.label}</label>
                      {field.type === "textarea" ? (
                        <textarea
                          value={item[field.key] || ""}
                          onChange={(e) => actualizar(index, field.key, e.target.value)}
                          rows={field.rows || 4}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none font-medium text-gray-900 resize-none"
                        />
                      ) : field.type === "select" ? (
                        <select
                          value={item[field.key] || ""}
                          onChange={(e) => actualizar(index, field.key, e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none font-medium text-gray-900"
                        >
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          value={item[field.key] || ""}
                          onChange={(e) => actualizar(index, field.key, e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none font-medium text-gray-900"
                        />
                      )}
                    </div>
                  ))}

                  {/* Delete Button */}
                  <button
                    onClick={() => eliminar(index)}
                    className="w-full p-4 bg-red-500 text-white rounded-xl font-bold shadow-md active:bg-red-600 transition-all flex items-center justify-center gap-2"
                  >
                    <Trash2 size={18} strokeWidth={2.5} />
                    <span>Eliminar</span>
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
