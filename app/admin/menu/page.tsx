"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";
import MobileMenu from "@/components/admin/mobile/MobileMenu";

export default function MenuPage() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const { isMobile, isClient } = useIsMobile();

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
    }
  }, [router]);

  if (!isAuth) return null;

  // Versión móvil
  if (isClient && isMobile) {
    return <MobileMenu />;
  }

  // Si acceden desde desktop, redirigir a dashboard
  if (isClient && !isMobile) {
    router.push("/admin/dashboard");
    return null;
  }

  return null;
}
