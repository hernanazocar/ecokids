"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Sparkles,
  ShoppingBag,
  Users,
  MessageSquare,
  HelpCircle,
  Image as ImageIcon,
  Settings,
  LogOut,
  Home,
  ChevronRight,
  FileText,
  Bot
} from "lucide-react";

const menuItems = [
  {
    section: "Principal",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
      { icon: Home, label: "Ver Sitio", href: "/" }
    ]
  },
  {
    section: "Contenido",
    items: [
      { icon: Home, label: "Inicio (Hero)", href: "/admin/contenido/home" },
      { icon: FileText, label: "Títulos", href: "/admin/contenido/titulos" },
      { icon: Sparkles, label: "Experiencias", href: "/admin/experiencias" },
      { icon: ShoppingBag, label: "Servicios", href: "/admin/servicios" },
      { icon: Users, label: "Historia", href: "/admin/historia" },
      { icon: MessageSquare, label: "Testimonios", href: "/admin/testimonios" },
      { icon: HelpCircle, label: "FAQs", href: "/admin/faqs" },
      { icon: ImageIcon, label: "Galería", href: "/admin/galeria" }
    ]
  },
  {
    section: "Sistema",
    items: [
      { icon: Settings, label: "Configuración", href: "/admin/configuracion" },
      { icon: Bot, label: "Asistente AI", href: "/admin/asistente-ai" }
    ]
  }
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin/login");
  };

  const isActive = (href: string) => {
    if (href === "/admin/dashboard") return pathname === href;
    return pathname?.startsWith(href) && href !== "/";
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 bg-gradient-to-br from-orange-500 via-orange-400 to-pink-500 border-r border-orange-300 flex flex-col z-50 shadow-lg">
      {/* Logo */}
      <div className="px-4 py-4 border-b border-white/20">
        <Link href="/admin/dashboard">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="relative w-9 h-9 bg-white rounded-lg p-1.5 group-hover:scale-105 transition-transform shadow-md">
              <Image src="/logo.png" alt="EcoKids" width={36} height={36} className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-white font-bold text-sm drop-shadow-sm">EcoKids</h2>
              <p className="text-orange-100 text-[10px] font-semibold">Panel Admin</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-2">
        <div className="space-y-4">
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <p className="text-[10px] font-bold text-orange-100 uppercase tracking-wider mb-1.5 px-2">
                {section.section}
              </p>
              <div className="space-y-0.5">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  const isExternal = item.href === "/";

                  return (
                    <Link key={itemIndex} href={item.href} target={isExternal ? "_blank" : undefined}>
                      <div
                        className={`
                          flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-all group cursor-pointer
                          ${active
                            ? 'bg-white text-orange-600 shadow-md'
                            : 'text-white hover:bg-white/20'
                          }
                        `}
                      >
                        <Icon
                          size={16}
                          className={active ? 'text-orange-500' : 'text-orange-100 group-hover:text-white'}
                          strokeWidth={2}
                        />
                        <span className="flex-1 text-xs font-semibold">{item.label}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* User Section */}
      <div className="p-3 border-t border-white/20">
        <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-white/20 backdrop-blur-sm mb-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-orange-600 text-[10px] font-bold shadow-sm">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-[11px] font-bold truncate drop-shadow-sm">Admin</p>
            <p className="text-orange-100 text-[9px] truncate">admin@ecokids.cl</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-white hover:bg-red-500 transition-all group font-semibold"
        >
          <LogOut size={14} strokeWidth={2} />
          <span className="text-xs">Salir</span>
        </button>
      </div>
    </aside>
  );
}
