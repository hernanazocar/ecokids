"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Sparkles, MessageSquare, TrendingUp, Plus, Eye, Edit, Settings } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
    }
  }, [router]);

  const stats = [
    { icon: Sparkles, label: "Experiencias Activas", value: "4", color: "from-orange-500 to-pink-500" },
    { icon: MessageSquare, label: "Testimonios", value: "5", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, label: "Visitas del Mes", value: "847", color: "from-blue-500 to-cyan-500" },
    { icon: Home, label: "Servicios Ofrecidos", value: "4", color: "from-green-500 to-emerald-500" }
  ];

  const quickActions = [
    { icon: Sparkles, label: "Editar Experiencias", href: "/admin/experiencias", color: "orange" },
    { icon: Edit, label: "Editar Inicio", href: "/admin/contenido/home", color: "pink" },
    { icon: MessageSquare, label: "Testimonios", href: "/admin/testimonios", color: "purple" },
    { icon: Eye, label: "Ver Sitio", href: "/", color: "green", external: true }
  ];

  if (!isAuth) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-5">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Dashboard</h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Bienvenido al panel de administración EcoKids</p>
          </div>
        </div>
      </header>

      <div className="p-4 sm:p-6 lg:p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
            <div className="w-1 h-5 bg-gradient-to-b from-orange-500 to-pink-500 rounded-full"></div>
            Acciones Rápidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={index} href={action.href} target={action.external ? "_blank" : undefined}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-5 border border-gray-100 rounded-xl hover:border-orange-200 hover:shadow-md transition-all cursor-pointer group bg-gradient-to-br from-white to-gray-50 hover:to-orange-50"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-md">
                      <Icon size={18} className="text-white" strokeWidth={2.5} />
                    </div>
                    <p className="font-bold text-gray-900 text-sm">{action.label}</p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
            <div className="w-1 h-5 bg-gradient-to-b from-orange-500 to-pink-500 rounded-full"></div>
            Actividad Reciente
          </h2>
          <div className="space-y-1">
            {[
              { action: "Contenido actualizado", item: "Sección Hero", time: "Hace 2h", color: "bg-emerald-500" },
              { action: "Experiencia editada", item: "Aventura bajo el mar", time: "Hace 5h", color: "bg-blue-500" },
              { action: "Imagen actualizada", item: "Galería", time: "Hace 1d", color: "bg-purple-500" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-orange-50 transition-all cursor-pointer group border border-transparent hover:border-orange-100">
                <div className={`w-2 h-2 rounded-full ${activity.color} shadow-lg`}></div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-sm truncate group-hover:text-orange-600 transition-colors">{activity.action}</p>
                  <p className="text-xs text-gray-500 truncate">{activity.item}</p>
                </div>
                <span className="text-xs text-gray-400 font-semibold whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
