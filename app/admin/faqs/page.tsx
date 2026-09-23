"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Trash2, Plus, HelpCircle, Type, AlignLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import MobileFAQs from "@/components/admin/mobile/MobileFAQs";

export default function FAQsAdmin() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [faqs, setFaqs] = useState<any[]>([]);
  const { isMobile, isClient } = useIsMobile();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
      cargarFaqs();
    }
  }, [router]);

  const cargarFaqs = async () => {
    try {
      const res = await fetch("/api/faqs");
      const data = await res.json();
      setFaqs(data.faqs || []);
    } catch (error) {
      console.error("Error al cargar FAQs:", error);
    } finally {
      setLoading(false);
    }
  };

  const guardar = async () => {
    setSaving(true);
    try {
      await fetch("/api/faqs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ faqs })
      });
      alert("✅ FAQs guardadas exitosamente");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("❌ Error al guardar FAQs");
    } finally {
      setSaving(false);
    }
  };

  const actualizarFaq = (index: number, campo: string, valor: any) => {
    const nuevos = [...faqs];
    (nuevos[index] as any)[campo] = valor;
    setFaqs(nuevos);
  };

  const eliminarFaq = (index: number) => {
    if (confirm("¿Eliminar esta pregunta?")) {
      setFaqs(faqs.filter((_, i) => i !== index));
    }
  };

  const agregarFaq = () => {
    const nuevo = {
      id: faqs.length + 1,
      pregunta: "Nueva pregunta frecuente",
      respuesta: "Respuesta aquí...",
      icono: "❓"
    };
    setFaqs([...faqs, nuevo]);
  };

  if (!isAuth || loading) return null;

  if (isClient && isMobile) return <MobileFAQs />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30">
      {/* Header Premium con Glassmorphism */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 shadow-lg shadow-indigo-500/5">
        <div className="max-w-[1600px] mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <HelpCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Preguntas Frecuentes
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">Gestiona las FAQ del sitio</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={agregarFaq}
                className="group relative overflow-hidden px-6 py-3.5 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                  <span>Nueva FAQ</span>
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
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="group backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-indigo-500/5 overflow-hidden hover:shadow-indigo-500/10 hover:shadow-2xl transition-all duration-300 relative"
            >
              <button
                onClick={() => eliminarFaq(index)}
                className="absolute top-3 right-3 z-10 px-3 py-1.5 flex items-center gap-1.5 rounded-lg bg-red-500 text-white opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all shadow-lg text-xs font-bold"
              >
                <Trash2 className="w-3 h-3" strokeWidth={2.5} />
                <span>Eliminar</span>
              </button>

              {/* Header con Gradiente */}
              <div className="p-4 border-b border-gray-100/50 bg-gradient-to-br from-gray-50/30 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg text-xl">
                    {faq.icono || '❓'}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">FAQ #{index + 1}</p>
                    <h3 className="text-base font-bold text-gray-900 truncate">{faq.pregunta}</h3>
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
                    value={faq.icono || '❓'}
                    onChange={(e) => actualizarFaq(index, "icono", e.target.value)}
                    placeholder="❓"
                    className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-2xl text-center transition-all shadow-sm hover:shadow-md"
                  />
                </div>

                {/* Pregunta */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                    <Type className="w-4 h-4 text-indigo-500" />
                    Pregunta
                  </label>
                  <input
                    type="text"
                    value={faq.pregunta}
                    onChange={(e) => actualizarFaq(index, "pregunta", e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md"
                    placeholder="¿Cuál es la pregunta?"
                  />
                </div>

                {/* Respuesta */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                    <AlignLeft className="w-4 h-4 text-purple-500" />
                    Respuesta
                  </label>
                  <textarea
                    value={faq.respuesta}
                    onChange={(e) => actualizarFaq(index, "respuesta", e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-gray-900 font-medium transition-all resize-none shadow-sm hover:shadow-md"
                    placeholder="La respuesta a la pregunta..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
