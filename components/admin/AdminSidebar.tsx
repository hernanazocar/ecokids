"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
  FileText,
  Bot,
  Menu,
  X
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin/login");
  };

  const isActive = (href: string) => {
    if (href === "/admin/dashboard") return pathname === href;
    return pathname?.startsWith(href) && href !== "/";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button - Fixed Top */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] p-2.5 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
      >
        {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen w-64 bg-gradient-to-br from-orange-500 via-orange-400 to-pink-500 border-r border-orange-300 flex flex-col z-50 shadow-xl
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="px-4 py-5 border-b border-white/20">
          <Link href="/admin/dashboard" onClick={closeMobileMenu}>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-11 h-11 bg-white rounded-xl p-2 group-hover:scale-105 transition-transform shadow-md">
                <Image src="/logo.png" alt="EcoKids" width={44} height={44} className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-white font-bold text-base drop-shadow-sm">EcoKids</h2>
                <p className="text-orange-100 text-xs font-semibold">Panel Admin</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <div className="space-y-5">
            {menuItems.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <p className="text-xs font-bold text-orange-100 uppercase tracking-wider mb-2 px-3">
                  {section.section}
                </p>
                <div className="space-y-1">
                  {section.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    const isExternal = item.href === "/";

                    return (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        target={isExternal ? "_blank" : undefined}
                        onClick={closeMobileMenu}
                      >
                        <div
                          className={`
                            flex items-center gap-3 px-3 py-3 rounded-xl transition-all group cursor-pointer
                            ${active
                              ? 'bg-white text-orange-600 shadow-lg'
                              : 'text-white hover:bg-white/20 active:bg-white/30'
                            }
                          `}
                        >
                          <Icon
                            size={20}
                            className={active ? 'text-orange-500' : 'text-orange-100 group-hover:text-white'}
                            strokeWidth={2}
                          />
                          <span className="flex-1 text-sm font-semibold">{item.label}</span>
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
        <div className="p-4 border-t border-white/20">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/20 backdrop-blur-sm mb-3">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-orange-600 text-sm font-bold shadow-sm">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-bold truncate drop-shadow-sm">Admin</p>
              <p className="text-orange-100 text-xs truncate">admin@ecokids.cl</p>
            </div>
          </div>

          <button
            onClick={() => {
              handleLogout();
              closeMobileMenu();
            }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white hover:bg-red-500 active:bg-red-600 transition-all group font-semibold"
          >
            <LogOut size={18} strokeWidth={2} />
            <span className="text-sm">Salir</span>
          </button>
        </div>
      </aside>
    </>
  );
}
