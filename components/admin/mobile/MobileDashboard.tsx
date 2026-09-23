"use client";

import Link from "next/link";
import { Sparkles, MessageSquare, ImageIcon, Settings, Eye, TrendingUp, Home } from "lucide-react";

export default function MobileDashboard() {
  const stats = [
    { icon: Sparkles, label: "Experiencias", value: "4", color: "from-orange-500 to-pink-500", href: "/admin/experiencias" },
    { icon: MessageSquare, label: "Testimonios", value: "5", color: "from-purple-500 to-pink-500", href: "/admin/testimonios" },
    { icon: ImageIcon, label: "Fotos", value: "10", color: "from-blue-500 to-cyan-500", href: "/admin/galeria" },
    { icon: Home, label: "Servicios", value: "4", color: "from-green-500 to-emerald-500", href: "/admin/servicios" }
  ];

  const quickActions = [
    { icon: Sparkles, label: "Experiencias", desc: "Gestionar talleres", href: "/admin/experiencias", color: "from-orange-500 to-pink-500" },
    { icon: ImageIcon, label: "Galería", desc: "Editar fotos", href: "/admin/galeria", color: "from-amber-500 to-orange-500" },
    { icon: MessageSquare, label: "Testimonios", desc: "Opiniones", href: "/admin/testimonios", color: "from-purple-500 to-pink-500" },
    { icon: Settings, label: "Configuración", desc: "Ajustes generales", href: "/admin/configuracion", color: "from-gray-600 to-gray-800" },
    { icon: Eye, label: "Ver Sitio", desc: "Vista previa", href: "/", color: "from-green-500 to-emerald-500", external: true }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Welcome Card */}
      <div className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-3xl p-6 text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-2">¡Hola Admin! 👋</h2>
        <p className="text-orange-50 text-sm font-medium">Administra EcoKids desde tu móvil</p>
      </div>

      {/* Stats Grid */}
      <div>
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">Estadísticas</h3>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Link key={index} href={stat.href}>
                <div className="bg-white rounded-2xl p-5 shadow-md active:shadow-lg active:scale-[0.98] transition-all border-2 border-gray-100 active:border-orange-200">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg`}>
                    <Icon size={24} className="text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">Acciones Rápidas</h3>
        <div className="space-y-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link key={index} href={action.href} target={action.external ? "_blank" : undefined}>
                <div className="bg-white rounded-2xl p-5 shadow-md active:shadow-lg active:scale-[0.98] transition-all border-2 border-gray-100 active:border-orange-200">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon size={28} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-base mb-0.5">{action.label}</h4>
                      <p className="text-sm text-gray-500 font-medium">{action.desc}</p>
                    </div>
                    <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Space */}
      <div className="h-4"></div>
    </div>
  );
}
