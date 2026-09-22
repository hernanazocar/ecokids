"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Settings, Globe, Mail, Phone, MapPin, Clock, Camera, Share2, MessageCircle, Hash, Briefcase, Video, Link2, Trash2, Plus, Type, AlignLeft } from "lucide-react";

export default function ConfiguracionAdmin() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
      cargarConfig();
    }
  }, [router]);

  const cargarConfig = async () => {
    try {
      const res = await fetch("/api/configuracion");
      const data = await res.json();

      // Asegurar estructura completa
      if (!data.footer) {
        data.footer = {
          copyright: "© 2024 EcoKids. Todos los derechos reservados.",
          textoLegal: "",
          enlaces: []
        };
      }
      if (!data.redesSociales.youtube) data.redesSociales.youtube = { usuario: "", url: "" };
      if (!data.redesSociales.linkedin) data.redesSociales.linkedin = { usuario: "", url: "" };
      if (!data.redesSociales.twitter) data.redesSociales.twitter = { usuario: "", url: "" };

      setConfig(data);
    } catch (error) {
      console.error("Error al cargar configuración:", error);
    } finally {
      setLoading(false);
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
      alert("✅ Configuración guardada exitosamente");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("❌ Error al guardar configuración");
    } finally {
      setSaving(false);
    }
  };

  const actualizar = (path: string[], valor: any) => {
    const nuevo = { ...config };
    let current = nuevo;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    current[path[path.length - 1]] = valor;
    setConfig(nuevo);
  };

  const agregarEnlace = () => {
    const nuevoEnlace = { texto: "Nuevo Enlace", url: "/" };
    const nuevosEnlaces = [...(config.footer.enlaces || []), nuevoEnlace];
    actualizar(["footer", "enlaces"], nuevosEnlaces);
  };

  const actualizarEnlace = (index: number, campo: string, valor: string) => {
    const nuevosEnlaces = [...config.footer.enlaces];
    nuevosEnlaces[index][campo] = valor;
    actualizar(["footer", "enlaces"], nuevosEnlaces);
  };

  const eliminarEnlace = (index: number) => {
    if (confirm("¿Eliminar este enlace?")) {
      const nuevosEnlaces = config.footer.enlaces.filter((_: any, i: number) => i !== index);
      actualizar(["footer", "enlaces"], nuevosEnlaces);
    }
  };

  if (!isAuth || loading || !config) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-teal-50/30">
      {/* Header Premium con Glassmorphism */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 shadow-lg shadow-cyan-500/5">
        <div className="max-w-[1600px] mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg">
                  <Settings className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Configuración General
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">Información del sitio, contacto, redes sociales y footer</p>
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
        {/* Información del Sitio */}
        <div className="backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-orange-500/5 overflow-hidden">
          <div className="p-4 border-b border-gray-100/50 bg-gradient-to-br from-orange-50/30 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Globe className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Información del Sitio</h3>
                <p className="text-xs text-gray-500">Datos generales que se usan en todo el sitio (header, footer, SEO, etc.)</p>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                  <Type className="w-4 h-4 text-orange-500" />
                  Nombre del Sitio
                </label>
                <input
                  type="text"
                  value={config.sitio.nombre}
                  onChange={(e) => actualizar(["sitio", "nombre"], e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md"
                  placeholder="EcoKids"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                  <Type className="w-4 h-4 text-orange-500" />
                  Nombre Completo
                </label>
                <input
                  type="text"
                  value={config.sitio.nombreCompleto}
                  onChange={(e) => actualizar(["sitio", "nombreCompleto"], e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-gray-900 font-semibold transition-all shadow-sm hover:shadow-md"
                  placeholder="EcoKids - Experiencias Creativas"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                <AlignLeft className="w-4 h-4 text-pink-500" />
                Tagline
              </label>
              <input
                type="text"
                value={config.sitio.tagline}
                onChange={(e) => actualizar(["sitio", "tagline"], e.target.value)}
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                placeholder="Un ratito sin pantallas, un mundo de posibilidades"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                <AlignLeft className="w-4 h-4 text-purple-500" />
                Descripción
              </label>
              <textarea
                value={config.sitio.descripcion}
                onChange={(e) => actualizar(["sitio", "descripcion"], e.target.value)}
                rows={2}
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-gray-900 font-medium transition-all resize-none shadow-sm hover:shadow-md"
                placeholder="Descripción del sitio web"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Logo (ruta)</label>
                <input
                  type="text"
                  value={config.sitio.logo}
                  onChange={(e) => actualizar(["sitio", "logo"], e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                  placeholder="/logo.png"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Favicon (ruta)</label>
                <input
                  type="text"
                  value={config.sitio.favicon}
                  onChange={(e) => actualizar(["sitio", "favicon"], e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                  placeholder="/favicon.ico"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-purple-500/5 overflow-hidden">
          <div className="p-4 border-b border-gray-100/50 bg-gradient-to-br from-purple-50/30 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Share2 className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Redes Sociales</h3>
                <p className="text-xs text-gray-500">Enlaces que aparecen en el footer y en todo el sitio</p>
              </div>
            </div>
          </div>

          <div className="p-4 grid md:grid-cols-2 gap-4">
            {/* Instagram */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <Camera className="w-5 h-5 text-pink-500" />
                <span className="text-sm font-bold text-gray-700">Instagram</span>
              </div>
              <input
                type="text"
                value={config.redesSociales.instagram.usuario}
                onChange={(e) => actualizar(["redesSociales", "instagram", "usuario"], e.target.value)}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none text-gray-900 font-medium transition-all shadow-sm text-sm"
                placeholder="@usuario"
              />
              <input
                type="url"
                value={config.redesSociales.instagram.url}
                onChange={(e) => actualizar(["redesSociales", "instagram", "url"], e.target.value)}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none text-gray-900 font-medium transition-all shadow-sm text-sm"
                placeholder="https://instagram.com/usuario"
              />
            </div>

            {/* Facebook */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-gray-700">Facebook</span>
              </div>
              <input
                type="text"
                value={config.redesSociales.facebook.usuario}
                onChange={(e) => actualizar(["redesSociales", "facebook", "usuario"], e.target.value)}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 font-medium transition-all shadow-sm text-sm"
                placeholder="Usuario"
              />
              <input
                type="url"
                value={config.redesSociales.facebook.url}
                onChange={(e) => actualizar(["redesSociales", "facebook", "url"], e.target.value)}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 font-medium transition-all shadow-sm text-sm"
                placeholder="https://facebook.com/pagina"
              />
            </div>

            {/* TikTok */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-gray-800" />
                <span className="text-sm font-bold text-gray-700">TikTok</span>
              </div>
              <input
                type="text"
                value={config.redesSociales.tiktok.usuario}
                onChange={(e) => actualizar(["redesSociales", "tiktok", "usuario"], e.target.value)}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-100 outline-none text-gray-900 font-medium transition-all shadow-sm text-sm"
                placeholder="@usuario"
              />
              <input
                type="url"
                value={config.redesSociales.tiktok.url}
                onChange={(e) => actualizar(["redesSociales", "tiktok", "url"], e.target.value)}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-100 outline-none text-gray-900 font-medium transition-all shadow-sm text-sm"
                placeholder="https://tiktok.com/@usuario"
              />
            </div>

            {/* YouTube */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <Video className="w-5 h-5 text-red-600" />
                <span className="text-sm font-bold text-gray-700">YouTube</span>
              </div>
              <input
                type="text"
                value={config.redesSociales.youtube.usuario}
                onChange={(e) => actualizar(["redesSociales", "youtube", "usuario"], e.target.value)}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-gray-900 font-medium transition-all shadow-sm text-sm"
                placeholder="Canal"
              />
              <input
                type="url"
                value={config.redesSociales.youtube.url}
                onChange={(e) => actualizar(["redesSociales", "youtube", "url"], e.target.value)}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-gray-900 font-medium transition-all shadow-sm text-sm"
                placeholder="https://youtube.com/@canal"
              />
            </div>

            {/* LinkedIn */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-blue-700" />
                <span className="text-sm font-bold text-gray-700">LinkedIn</span>
              </div>
              <input
                type="text"
                value={config.redesSociales.linkedin.usuario}
                onChange={(e) => actualizar(["redesSociales", "linkedin", "usuario"], e.target.value)}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 font-medium transition-all shadow-sm text-sm"
                placeholder="Empresa"
              />
              <input
                type="url"
                value={config.redesSociales.linkedin.url}
                onChange={(e) => actualizar(["redesSociales", "linkedin", "url"], e.target.value)}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 font-medium transition-all shadow-sm text-sm"
                placeholder="https://linkedin.com/company/..."
              />
            </div>

            {/* Twitter/X */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <Hash className="w-5 h-5 text-sky-500" />
                <span className="text-sm font-bold text-gray-700">Twitter / X</span>
              </div>
              <input
                type="text"
                value={config.redesSociales.twitter.usuario}
                onChange={(e) => actualizar(["redesSociales", "twitter", "usuario"], e.target.value)}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-gray-900 font-medium transition-all shadow-sm text-sm"
                placeholder="@usuario"
              />
              <input
                type="url"
                value={config.redesSociales.twitter.url}
                onChange={(e) => actualizar(["redesSociales", "twitter", "url"], e.target.value)}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-gray-900 font-medium transition-all shadow-sm text-sm"
                placeholder="https://twitter.com/usuario"
              />
            </div>
          </div>
        </div>

        {/* Información de Contacto */}
        <div className="backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-blue-500/5 overflow-hidden">
          <div className="p-4 border-b border-gray-100/50 bg-gradient-to-br from-blue-50/30 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Phone className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Información de Contacto</h3>
                <p className="text-xs text-gray-500">Datos de contacto y ubicación</p>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                  Teléfono
                </label>
                <input
                  type="text"
                  value={config.contacto.telefono}
                  onChange={(e) => actualizar(["contacto", "telefono"], e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                  placeholder="+56 9 2008 9281"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  WhatsApp (solo números)
                </label>
                <input
                  type="text"
                  value={config.contacto.whatsapp}
                  onChange={(e) => actualizar(["contacto", "whatsapp"], e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                  placeholder="56920089281"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500" />
                Email
              </label>
              <input
                type="email"
                value={config.contacto.email}
                onChange={(e) => actualizar(["contacto", "email"], e.target.value)}
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                placeholder="contacto@ecokids.cl"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-500" />
                Dirección
              </label>
              <input
                type="text"
                value={config.contacto.ubicacion.direccion}
                onChange={(e) => actualizar(["contacto", "ubicacion", "direccion"], e.target.value)}
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                placeholder="Calle 123, Concón"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Ciudad</label>
                <input
                  type="text"
                  value={config.contacto.ubicacion.ciudad}
                  onChange={(e) => actualizar(["contacto", "ubicacion", "ciudad"], e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                  placeholder="Concón"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Región</label>
                <input
                  type="text"
                  value={config.contacto.ubicacion.region}
                  onChange={(e) => actualizar(["contacto", "ubicacion", "region"], e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                  placeholder="V Región"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">País</label>
                <input
                  type="text"
                  value={config.contacto.ubicacion.pais}
                  onChange={(e) => actualizar(["contacto", "ubicacion", "pais"], e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                  placeholder="Chile"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500" />
                Horario de Atención
              </label>
              <input
                type="text"
                value={config.contacto.horario}
                onChange={(e) => actualizar(["contacto", "horario"], e.target.value)}
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                placeholder="Lunes a Viernes: 9:00 - 18:00"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-200/50 shadow-xl shadow-emerald-500/5 overflow-hidden">
          <div className="p-4 border-b border-gray-100/50 bg-gradient-to-br from-emerald-50/30 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg">
                <Link2 className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Footer del Sitio</h3>
                <p className="text-xs text-gray-500">Información que aparecerá al final de todas las páginas del sitio</p>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Copyright</label>
              <p className="text-xs text-gray-500 mb-2">Texto de derechos reservados que aparece en el footer</p>
              <input
                type="text"
                value={config.footer.copyright}
                onChange={(e) => actualizar(["footer", "copyright"], e.target.value)}
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-gray-900 font-medium transition-all shadow-sm hover:shadow-md"
                placeholder="© 2024 EcoKids. Todos los derechos reservados."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Texto Legal / Descripción</label>
              <p className="text-xs text-gray-500 mb-2">Texto adicional que aparece en el footer (opcional)</p>
              <textarea
                value={config.footer.textoLegal}
                onChange={(e) => actualizar(["footer", "textoLegal"], e.target.value)}
                rows={2}
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-gray-900 font-medium transition-all resize-none shadow-sm hover:shadow-md"
                placeholder="Información legal adicional..."
              />
            </div>

            {/* Enlaces del Footer */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <label className="text-sm font-bold text-gray-700">Enlaces del Footer</label>
                  <p className="text-xs text-gray-500 mt-0.5">Estos enlaces aparecerán en el footer del sitio web</p>
                </div>
                <button
                  onClick={agregarEnlace}
                  className="group relative overflow-hidden px-4 py-2 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-xs"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-1.5">
                    <Plus className="w-3 h-3" strokeWidth={2.5} />
                    <span>Agregar Enlace</span>
                  </div>
                </button>
              </div>

              <div className="space-y-2">
                {config.footer.enlaces.map((enlace: any, index: number) => (
                  <div key={index} className="group p-3 rounded-xl bg-gradient-to-r from-gray-50 to-transparent border border-gray-200 hover:border-emerald-300 transition-all relative">
                    <button
                      onClick={() => eliminarEnlace(index)}
                      className="absolute top-2 right-2 px-2 py-1 flex items-center gap-1 rounded-lg bg-red-500 text-white opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all text-xs font-bold"
                    >
                      <Trash2 className="w-3 h-3" strokeWidth={2.5} />
                    </button>
                    <div className="grid md:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={enlace.texto}
                        onChange={(e) => actualizarEnlace(index, "texto", e.target.value)}
                        className="px-3 py-1.5 rounded-lg border-2 border-gray-200 bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-gray-900 font-semibold transition-all text-sm"
                        placeholder="Texto del enlace"
                      />
                      <input
                        type="text"
                        value={enlace.url}
                        onChange={(e) => actualizarEnlace(index, "url", e.target.value)}
                        className="px-3 py-1.5 rounded-lg border-2 border-gray-200 bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-gray-900 font-medium transition-all text-sm"
                        placeholder="/ruta"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
