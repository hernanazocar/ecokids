"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Autenticación simple (en producción usar algo más seguro)
    if (password === "Kidscolor2026") {
      localStorage.setItem("adminAuth", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Contraseña incorrecta");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 p-6">
      {/* Decoraciones de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 relative">
              <Image
                src="/logo.png"
                alt="EcoKids"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Panel de Administración
            </h1>
            <p className="text-gray-600 font-medium">EcoKids Experiencias Creativas</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 outline-none transition-all font-medium"
                placeholder="Ingresa tu contraseña"
                required
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Ingresar
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              © 2024 EcoKids. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
