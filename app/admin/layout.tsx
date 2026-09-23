"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import MobileLayout from "@/components/admin/mobile/MobileLayout";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isMobile, isClient } = useIsMobile();

  // No mostrar sidebar en login
  const isLoginPage = pathname === "/admin/login" || pathname === "/admin";

  if (isLoginPage) {
    return <>{children}</>;
  }

  // Mientras carga, mostrar loading
  if (!isClient) {
    return <>{children}</>;
  }

  // Versión móvil
  if (isMobile) {
    return (
      <MobileLayout>
        {children}
      </MobileLayout>
    );
  }

  // Versión desktop (sin cambios)
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="lg:ml-64 pt-16 lg:pt-0">
        {children}
      </main>
    </div>
  );
}
