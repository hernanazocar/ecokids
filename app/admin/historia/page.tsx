"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Trash2, Plus, BookOpen, Image as ImageIcon, Sparkles, Palette, Type, AlignLeft } from "lucide-react";

export default function HistoriaAdmin() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [historia, setHistoria] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
      cargarHistoria();
    }
  }, [router]);

  const cargarHistoria = async () => {
    try {
      const res = await fetch("/api/historia");
      const data = await res.json();
      setHistoria(data);
    } catch (error) {
      console.error("Error al cargar historia:", error);
    } finally {
      setLoading(false);
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
      alert("✅ Historia guardada exitosamente");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("❌ Error al guardar historia");
    } finally {
      setSaving(false);
    }
  };

  const actualizarCard = (index: number, campo: string, valor: any) => {
    const nuevasCards = [...historia.cards];
    nuevasCards[index][campo] = valor;
    setHistoria({ ...historia, cards: nuevasCards });
  };

  const eliminarCard = (index: number) => {
    if (confirm("¿Eliminar esta tarjeta?")) {
      const nuevasCards = historia.cards.filter((_: any, i: number) => i !== index);
      setHistoria({ ...historia, cards: nuevasCards });
    }
  };

  const agregarCard = () => {
    const nuevaCard = {
      id: historia.cards.length + 1,
      titulo: "Nueva Tarjeta",
      icono: "⭐",
      color: "orange",
      imagen: "/historia/nueva.png",
      descripcion: "",
      badges: []
    };
    setHistoria({ ...historia, cards: [...historia.cards, nuevaCard] });
  };

  if (!isAuth || loading || !historia) return null;

  const colores = [
    { value: "orange", label: "Naranja", gradient: "from-orange-500 to-orange-600" },
    { value: "purple", label: "Morado", gradient: "from-purple-500 to-purple-600" },
    { value: "green", label: "Verde", gradient: "from-green-500 to-emerald-500" },
    { value: "pink", label: "Rosa", gradient: "from-pink-500 to-rose-500" },
    { value: "blue", label: "Azul", gradient: "from-blue-500 to-indigo-500" },
    { value: "amber", label: "Ámbar", gradient: "from-amber-500 to-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-pink-50/30">
      {/* Header Premium */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 shadow-lg shadow-orange-500/5">
        <div className="max-w-[1600px] mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">Nuestra Historia</h1>
                <p className="text-sm text-gray-500 mt-0.5">Las personas detrás de EcoKids</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={agregarCard} className="group relative overflow-hidden px-6 py-3.5 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2"><Plus className="w-4 h-4" strokeWidth={2.5} /><span>Nueva Tarjeta</span></div>
              </button>
              <button onClick={guardar} disabled={saving} className="group relative overflow-hidden px-8 py-3.5 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-pink-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2"><Save className="w-4 h-4" strokeWidth={2.5} /><span>{saving ? "Guardando..." : "Guardar Cambios"}</span></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 py-6">
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {historia.cards.map((card: any, index: number) => (
            <div key={card.id} className="group backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-orange-500/5 overflow-hidden hover:shadow-orange-500/10 hover:shadow-2xl transition-all duration-300 relative">
              <button onClick={() => eliminarCard(index)} className="absolute top-3 right-3 z-10 px-3 py-1.5 flex items-center gap-1.5 rounded-lg bg-red-500 text-white opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all shadow-lg text-xs font-bold">
                <Trash2 className="w-3 h-3" strokeWidth={2.5} /><span>Eliminar</span>
              </button>

              <div className="p-4 border-b border-gray-100/50 bg-gradient-to-br from-gray-50/30 to-transparent">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colores.find(c => c.value === card.color)?.gradient || 'from-orange-500 to-orange-600'} flex items-center justify-center shadow-lg text-xl`}>
                    {card.icono || '⭐'}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Tarjeta #{index + 1}</p>
                    <h3 className="text-base font-bold text-gray-900">{card.titulo}</h3>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2"><ImageIcon className="w-4 h-4 text-purple-500" />Imagen</label>
                  <div className="rounded-lg overflow-hidden bg-white border-2 border-gray-200 relative aspect-video max-h-32 shadow-sm mb-2">
                    {card.imagen ? (
                      <img src={card.imagen} alt={card.titulo} className="w-full h-full object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                        <ImageIcon className="w-8 h-8 text-gray-300 mb-1" strokeWidth={1.5} />
                        <p className="text-xs text-gray-400 font-medium">Sin imagen</p>
                      </div>
                    )}
                  </div>
                  <label className="block">
                    <div className="group/btn cursor-pointer relative overflow-hidden px-3 py-2 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]">
                      <div className="flex items-center justify-center gap-2 text-white text-sm font-bold"><ImageIcon className="w-4 h-4" strokeWidth={2.5} /><span>Cargar Foto</span></div>
                    </div>
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const nuevaRuta = `/historia/${file.name}`;
                        actualizarCard(index, "imagen", nuevaRuta);
                        alert(`📸 Imagen: ${file.name}\n\n⚠️ Copiar a /public/historia/\nRuta: ${nuevaRuta}`);
                      }
                    }} />
                  </label>
                  {card.imagen && <p className="text-xs text-gray-600 font-medium truncate mt-1.5">📁 {card.imagen}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Icono (Emoji)</label>
                  <input type="text" value={card.icono} onChange={(e) => actualizarCard(index, "icono", e.target.value)} placeholder="⭐" className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-xl text-center transition-all shadow-sm hover:shadow-md" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2"><Type className="w-4 h-4 text-blue-500" />Título de la Tarjeta</label>
                  <input type="text" value={card.titulo} onChange={(e) => actualizarCard(index, "titulo", e.target.value)} placeholder="Ej: Hola, soy Flo" className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2"><AlignLeft className="w-4 h-4 text-purple-500" />Descripción</label>
                  <textarea value={card.descripcion} onChange={(e) => actualizarCard(index, "descripcion", e.target.value)} rows={2} className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-gray-900 font-medium transition-all resize-none shadow-sm hover:shadow-md" placeholder="Descripción de la persona..." />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><Palette className="w-4 h-4 text-pink-500" />Color del Header</label>
                  <div className="grid grid-cols-3 gap-2">
                    {colores.map((col) => (
                      <button key={col.value} onClick={() => actualizarCard(index, "color", col.value)} className={`p-2 rounded-lg border-2 transition-all ${card.color === col.value ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-200 hover:border-gray-300 hover:scale-105'}`}>
                        <div className={`h-5 rounded-lg bg-gradient-to-r ${col.gradient} mb-1 shadow-sm`}></div>
                        <p className="text-xs font-semibold text-gray-700">{col.label}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-orange-500/5 overflow-hidden">
          <div className="p-4 border-b border-gray-100/50 bg-gradient-to-br from-orange-50/30 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div><h3 className="font-bold text-gray-900">Mensaje de Cierre</h3><p className="text-xs text-gray-500">Invitación final de la sección</p></div>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Título</label>
              <input type="text" value={historia.cierre.titulo} onChange={(e) => setHistoria({...historia, cierre: {...historia.cierre, titulo: e.target.value}})} className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-gradient-to-r from-orange-50 to-pink-50 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-gray-900 font-bold transition-all shadow-sm hover:shadow-md" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Descripción</label>
              <textarea value={historia.cierre.descripcion} onChange={(e) => setHistoria({...historia, cierre: {...historia.cierre, descripcion: e.target.value}})} rows={2} className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-gray-900 font-medium transition-all resize-none shadow-sm hover:shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
