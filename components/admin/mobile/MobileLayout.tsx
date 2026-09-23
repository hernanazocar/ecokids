"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Sparkles,
  ImageIcon,
  Settings,
  LogOut,
  User
} from "lucide-react";

const bottomNavItems = [
  { icon: LayoutDashboard, label: "Inicio", href: "/admin/dashboard" },
  { icon: Sparkles, label: "Experiencias", href: "/admin/experiencias" },
  { icon: ImageIcon, label: "Galería", href: "/admin/galeria" },
  { icon: Settings, label: "Más", href: "/admin/configuracion" }
];

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    if (confirm("¿Cerrar sesión?")) {
      localStorage.removeItem("adminAuth");
      router.push("/admin/login");
    }
  };

  const isActive = (href: string) => {
    if (href === "/admin/dashboard") return pathname === href;
    return pathname?.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl p-1.5 shadow-md">
              <Image src="/logo.png" alt="EcoKids" width={40} height={40} className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-white font-bold text-base">EcoKids</h1>
              <p className="text-orange-100 text-xs font-medium">Panel Admin</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="p-2.5 bg-white/20 backdrop-blur-sm rounded-xl active:bg-white/30 transition-colors"
          >
            <LogOut className="w-5 h-5 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl">
        <div className="flex items-center justify-around px-2 py-2">
          {bottomNavItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link key={index} href={item.href} className="flex-1">
                <div
                  className={`
                    flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all active:scale-95
                    ${active
                      ? 'bg-gradient-to-br from-orange-50 to-pink-50'
                      : 'active:bg-gray-50'
                    }
                  `}
                >
                  <div className={`
                    p-2 rounded-xl transition-all
                    ${active
                      ? 'bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg'
                      : 'bg-gray-100'
                    }
                  `}>
                    <Icon
                      size={20}
                      className={active ? 'text-white' : 'text-gray-600'}
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className={`text-[10px] font-bold ${
                    active ? 'text-orange-600' : 'text-gray-500'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
