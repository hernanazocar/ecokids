"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MessageSquare,
  ShoppingBag,
  HelpCircle,
  Users,
  Settings,
  Bot,
  Home,
  FileText,
  LogOut,
  ChevronRight
} from "lucide-react";

const allSections = [
  {
    title: "Contenido",
    items: [
      { icon: MessageSquare, label: "Testimonios", href: "/admin/testimonios", color: "from-purple-500 to-pink-500" },
      { icon: ShoppingBag, label: "Servicios", href: "/admin/servicios", color: "from-blue-500 to-cyan-500" },
      { icon: HelpCircle, label: "FAQs", href: "/admin/faqs", color: "from-orange-500 to-yellow-500" },
      { icon: Users, label: "Historia", href: "/admin/historia", color: "from-green-500 to-emerald-500" },
      { icon: Home, label: "Contenido Home", href: "/admin/contenido/home", color: "from-indigo-500 to-purple-500" },
      { icon: FileText, label: "Títulos", href: "/admin/contenido/titulos", color: "from-pink-500 to-rose-500" }
    ]
  },
  {
    title: "Sistema",
    items: [
      { icon: Settings, label: "Configuración", href: "/admin/configuracion", color: "from-gray-600 to-gray-800" },
      { icon: Bot, label: "Asistente AI", href: "/admin/asistente-ai", color: "from-cyan-500 to-blue-500" }
    ]
  }
];

export default function MobileMenu() {
  const router = useRouter();

  const handleLogout = () => {
    if (confirm("¿Cerrar sesión?")) {
      localStorage.removeItem("adminAuth");
      router.push("/admin/login");
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-3xl p-6 text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-2">Menú Completo</h2>
        <p className="text-orange-50 text-sm font-medium">Todas las secciones del admin</p>
      </div>

      {/* Sections */}
      {allSections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">
            {section.title}
          </h3>
          <div className="space-y-2">
            {section.items.map((item, itemIndex) => {
              const Icon = item.icon;
              return (
                <Link key={itemIndex} href={item.href}>
                  <div className="bg-white rounded-2xl p-5 shadow-md active:shadow-lg active:scale-[0.98] transition-all border-2 border-gray-100 active:border-orange-200">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon size={24} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-base">{item.label}</h4>
                      </div>
                      <ChevronRight size={24} className="text-gray-300 flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      {/* Logout */}
      <div>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">
          Sesión
        </h3>
        <button
          onClick={handleLogout}
          className="w-full bg-white rounded-2xl p-5 shadow-md active:shadow-lg active:scale-[0.98] transition-all border-2 border-gray-100 active:border-red-200"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <LogOut size={24} className="text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <h4 className="font-bold text-gray-900 text-base">Cerrar Sesión</h4>
            </div>
            <ChevronRight size={24} className="text-gray-300 flex-shrink-0" />
          </div>
        </button>
      </div>

      <div className="h-4"></div>
    </div>
  );
}
