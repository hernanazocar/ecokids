'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="EcoKids"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">EcoKids</span>
          </div>

          {/* Menu Central */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">Servicios</a>
            <a href="#como-funciona" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">Cómo Funciona</a>
            <a href="#testimonios" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">Testimonios</a>
            <a href="#contacto" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">Contacto</a>
          </div>

          {/* Botón Agendar */}
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Agendar Ahora
          </button>
        </nav>
      </header>

      {/* Hero Section - Rediseñado Moderno */}
      <section className="relative pt-28 pb-16 px-6 overflow-hidden bg-gradient-to-br from-orange-500 via-red-400 to-pink-500">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Columna Izquierda - Contenido */}
            <div className="space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold shadow-lg border border-white/30">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Concón, V Región
              </div>

              {/* Título Principal */}
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  Creatividad que inspira
                  <span className="block text-white/90">
                    sin pantallas
                  </span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Talleres donde los niños exploran, crean y descubren todo su potencial a través del juego y el arte.
                </p>
              </div>

              {/* Stats destacados - 2 columnas simplificadas */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3 text-center shadow-lg">
                  <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md border border-white/40">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-white">2000+</div>
                  <div className="text-sm text-white/90">Niños felices</div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3 text-center shadow-lg">
                  <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md border border-white/40">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-white">5.0</div>
                  <div className="text-sm text-white/90">Rating</div>
                </div>
              </div>

              {/* Beneficios - 2 principales */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-white/40">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Ambiente seguro • Grupos reducidos</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-white/40">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Todos los materiales incluidos</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="group px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  <span className="flex items-center gap-2 justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Ver Talleres
                  </span>
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-white/30 transition-all">
                  <span className="flex items-center gap-2 justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Agendar Ahora
                  </span>
                </button>
              </div>
            </div>

            {/* Columna Derecha - Foto */}
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop"
                  alt="Niños construyendo y creando en talleres EcoKids"
                  className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl border-4 border-white/30"
                />
                {/* Badge flotante */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">4+ años</div>
                      <div className="text-sm text-gray-700">De experiencia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quiénes Somos - Rediseñado Colorido y Profesional */}
      <section id="quienes-somos" className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        {/* Decoraciones de fondo */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header vibrante */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-white rounded-full text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Quiénes Somos
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="text-gray-900">Creando momentos </span>
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">mágicos</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Desde 2020 inspirando niños a través del arte, la creatividad y el juego
            </p>
          </div>

          {/* Grid de cards coloridas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Card 1 - Nuestra Historia */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 hover:border-orange-400 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nuestra Historia</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Desde 2020, transformando la educación infantil con experiencias creativas únicas.
              </p>
              <div className="flex gap-2">
                <div className="bg-orange-100 px-3 py-1.5 rounded-lg">
                  <span className="text-orange-700 font-bold text-sm">500+ Talleres</span>
                </div>
                <div className="bg-pink-100 px-3 py-1.5 rounded-lg">
                  <span className="text-pink-700 font-bold text-sm">2000+ Niños</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Misión */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nuestra Misión</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Crear espacios seguros donde la creatividad y el aprendizaje se unen a través del juego.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">✓ Sin pantallas</span>
                <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">✓ 100% creativos</span>
              </div>
            </div>

            {/* Card 3 - Visión */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-200 hover:border-purple-400 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nuestra Visión</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ser líderes en educación creativa infantil de la V Región, inspirando a cada niño.
              </p>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-xl">
                <p className="text-purple-900 font-semibold text-sm text-center">Referentes regionales</p>
              </div>
            </div>
          </div>

          {/* Sección de Valores Colorida */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Nuestros Valores</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Valor 1 - Creatividad */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl border border-orange-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Creatividad</h4>
                  <p className="text-sm text-gray-600">Imaginación sin límites</p>
                </div>
              </div>

              {/* Valor 2 - Seguridad */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Seguridad</h4>
                  <p className="text-sm text-gray-600">Ambiente supervisado</p>
                </div>
              </div>

              {/* Valor 3 - Comunidad */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Comunidad</h4>
                  <p className="text-sm text-gray-600">Lazos duraderos</p>
                </div>
              </div>

              {/* Valor 4 - Diversión */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Diversión</h4>
                  <p className="text-sm text-gray-600">Aprender jugando</p>
                </div>
              </div>

              {/* Valor 5 - Ecológico */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ecológico</h4>
                  <p className="text-sm text-gray-600">Cuidamos el planeta</p>
                </div>
              </div>

              {/* Valor 6 - Innovación */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Innovación</h4>
                  <p className="text-sm text-gray-600">Siempre evolucionando</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Servicios - Rediseñado */}
      <section id="servicios" className="relative py-12 px-6 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full text-base font-bold mb-6 shadow-xl">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Nuestros Servicios
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Experiencias diseñadas<br />
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">para cada momento</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Desde talleres creativos hasta celebraciones inolvidables, cada experiencia está pensada para inspirar y divertir.
            </p>
          </div>

          {/* Servicios Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Talleres Creativos - GRANDE */}
            <div className="lg:row-span-2 relative bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 rounded-2xl p-5 text-white overflow-hidden shadow-xl group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 border-2 border-white/30">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold mb-4">Talleres Creativos</h3>
                <p className="text-lg text-white/95 leading-relaxed mb-8">
                  Sesiones de arte, manualidades y actividades sensoriales que estimulan la creatividad y el aprendizaje.
                  Cada taller es una aventura única donde los niños exploran diferentes técnicas y materiales.
                </p>

                <div className="space-y-3 mb-8">
                  {['Arte y pintura', 'Manualidades creativas', 'Actividades sensoriales', 'Experimentos artísticos'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/30">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 bg-white text-pink-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  Ver Talleres Disponibles
                </button>
              </div>
            </div>

            {/* Cumpleaños */}
            <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Cumpleaños Especiales</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Celebraciones personalizadas con actividades temáticas, juegos y mucha diversión para el día más especial.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white rounded-xl p-3 text-center border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">3hrs</div>
                  <div className="text-xs text-gray-600">Duración</div>
                </div>
                <div className="bg-white rounded-xl p-3 text-center border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <div className="text-xs text-gray-600">Niños</div>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                Cotizar Cumpleaños
              </button>
            </div>

            {/* Bajo el Mar */}
            <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Especial
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Bajo el Mar</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Aventura temática marina con actividades acuáticas y manualidades del océano.
              </p>

              <div className="bg-white rounded-xl p-4 mb-6 border border-blue-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Precio especial</span>
                  <span className="text-3xl font-bold text-blue-600">$7.000</span>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                Reservar Ahora
              </button>
            </div>
          </div>

          {/* Banner CTA */}
          <div className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-3xl p-8 md:p-10 text-white text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">¿No encuentras lo que buscas?</h3>
            <p className="text-lg mb-6 text-white/95">Diseñamos experiencias personalizadas para cada ocasión</p>
            <button className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              Contáctanos para Más Info
            </button>
          </div>

        </div>
      </section>

      {/* Cómo Funciona - Rediseñado Colorido */}
      <section id="como-funciona" className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50">
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-white rounded-full text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Proceso Simple
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="text-gray-900">Reserva en </span>
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent">3 simples pasos</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Rápido, fácil y sin complicaciones
            </p>
          </div>

          {/* Pasos - Diseño Vertical Ordenado */}
          <div className="max-w-4xl mx-auto space-y-3">
            {/* Paso 1 */}
            <div className="relative bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl p-4 text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-white/40">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-xs font-bold border border-white/40 mb-2">
                    Paso 1
                  </div>
                  <h3 className="text-xl font-bold mb-1">Explora y Elige</h3>
                  <p className="text-sm text-white/95 leading-relaxed">
                    Navega por nuestros talleres creativos, cumpleaños temáticos y experiencias especiales según la edad de tu hijo.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-purple-200 rounded-full text-xs font-bold text-purple-700 mb-2">
                    Paso 2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Reserva tu Cupo</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Agenda tu fecha y hora preferida a través de WhatsApp, Instagram o formulario de contacto.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-300 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-green-200 rounded-full text-xs font-bold text-green-700 mb-2">
                    Paso 3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">¡A Disfrutar!</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Llega el día del taller y deja que tu hijo explore, cree y se divierta sin pantallas.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Galería - Carrusel Breve */}
      <section className="relative py-8 px-6 overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header compacto */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Nuestra Galería</h2>
              <p className="text-sm text-gray-600">Momentos mágicos capturados</p>
            </div>
            <a
              href="https://instagram.com/ecokids.experiencias"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Ver más
            </a>
          </div>

          {/* Carrusel horizontal */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {[
              { color: 'from-pink-300 to-rose-400', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
              { color: 'from-purple-300 to-pink-400', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' },
              { color: 'from-blue-300 to-cyan-400', icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5' },
              { color: 'from-yellow-300 to-orange-400', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
              { color: 'from-green-300 to-emerald-400', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { color: 'from-indigo-300 to-purple-400', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-48 h-48 relative bg-gradient-to-br ${item.color} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group`}
              >
                <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/60 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonios - Rediseñado Colorido */}
      <section id="testimonios" className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400 text-white rounded-full text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              Testimonios
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="text-gray-900">Familias </span>
              <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent">felices</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Miles de papás y mamás confían en nosotros para crear momentos inolvidables
            </p>
          </div>

          {/* Testimonios Grid Asimétrico */}
          <div className="grid lg:grid-cols-3 gap-4 mb-6">
            {/* Testimonio 1 - DESTACADO */}
            <div className="lg:col-span-2 relative bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-10 text-white overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <div className="flex gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-7 h-7 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                  "Mi hija de 5 años no para de hablar del taller. Llegó feliz y con ganas de volver. ¡Excelente experiencia para toda la familia!"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                    alt="María González"
                    className="w-16 h-16 rounded-full object-cover border-4 border-white/40 shadow-lg"
                  />
                  <div>
                    <div className="font-bold text-xl">María González</div>
                    <div className="text-white/90">Mamá de Sofía</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 rounded-3xl p-8 shadow-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 text-lg mb-6 leading-relaxed font-medium">
                "Celebramos el cumpleaños de mi hijo aquí y fue increíble. Los niños la pasaron genial y nosotros también."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t-2 border-purple-200">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                  alt="Carlos Pérez"
                  className="w-12 h-12 rounded-full object-cover shadow-md"
                />
                <div>
                  <div className="font-bold text-gray-900">Carlos Pérez</div>
                  <div className="text-sm text-gray-600">Papá de Mateo</div>
                </div>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-300 rounded-3xl p-8 shadow-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 text-lg mb-6 leading-relaxed font-medium">
                "Talleres súper creativos y bien organizados. Se nota el cariño y profesionalismo del equipo."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t-2 border-blue-200">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                  alt="Andrea Silva"
                  className="w-12 h-12 rounded-full object-cover shadow-md"
                />
                <div>
                  <div className="font-bold text-gray-900">Andrea Silva</div>
                  <div className="text-sm text-gray-600">Mamá de Lucas</div>
                </div>
              </div>
            </div>

            {/* Testimonio 4 */}
            <div className="lg:col-span-2 relative bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-300 rounded-3xl p-8 shadow-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 text-xl mb-6 leading-relaxed font-medium">
                "Un espacio mágico donde mi hijo puede ser creativo sin pantallas. Lo recomiendo 100%. Las monitoras son increíbles y muy pacientes."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                  alt="Patricia Morales"
                  className="w-14 h-14 rounded-full object-cover shadow-md"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">Patricia Morales</div>
                  <div className="text-sm text-gray-600">Mamá de Diego</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 border border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-2">2000+</div>
              <div className="text-sm text-gray-700 font-medium">Familias Felices</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">5.0</div>
              <div className="text-sm text-gray-700 font-medium">Calificación Promedio</div>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-700 font-medium">Recomendación</div>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-sm text-gray-700 font-medium">Talleres Realizados</div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ - Rediseñado */}
      <section className="relative py-6 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Preguntas Frecuentes
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
              ¿Tienes <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">dudas?</span>
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros talleres
            </p>
          </div>

          {/* Grid de FAQs - Diseño variado */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* FAQ 1 - Card expandible destacada */}
            <div
              onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
              className="relative bg-gradient-to-br from-orange-100 to-pink-100 border-2 border-orange-300 rounded-3xl p-8 cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Qué edades pueden participar?</h3>
                  <div className={`overflow-hidden transition-all ${openFaq === 0 ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="text-gray-700 leading-relaxed pt-2">
                      Nuestros talleres están diseñados para niños de 3 a 12 años. Adaptamos las actividades según la edad de cada grupo para garantizar que todos disfruten y aprendan.
                    </p>
                  </div>
                </div>
                <svg className={`w-6 h-6 text-orange-600 transition-transform flex-shrink-0 ${openFaq === 0 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* FAQ 2 */}
            <div
              onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
              className="relative bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-300 rounded-3xl p-8 cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Cuánto dura un taller?</h3>
                  <div className={`overflow-hidden transition-all ${openFaq === 1 ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="text-gray-700 leading-relaxed pt-2">
                      Los talleres regulares tienen una duración de 1.5 a 2 horas. Los cumpleaños pueden durar hasta 3 horas, incluyendo tiempo para celebración.
                    </p>
                  </div>
                </div>
                <svg className={`w-6 h-6 text-blue-600 transition-transform flex-shrink-0 ${openFaq === 1 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* FAQ 3 */}
            <div
              onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
              className="relative bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 rounded-3xl p-8 cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Debo llevar materiales?</h3>
                  <div className={`overflow-hidden transition-all ${openFaq === 2 ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="text-gray-700 leading-relaxed pt-2">
                      No, todos los materiales están incluidos. Solo trae a tu hijo con ropa cómoda que pueda mancharse y muchas ganas de crear.
                    </p>
                  </div>
                </div>
                <svg className={`w-6 h-6 text-purple-600 transition-transform flex-shrink-0 ${openFaq === 2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* FAQ 4 */}
            <div
              onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
              className="relative bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-300 rounded-3xl p-8 cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Cómo puedo reservar?</h3>
                  <div className={`overflow-hidden transition-all ${openFaq === 3 ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="text-gray-700 leading-relaxed pt-2">
                      Puedes reservar por WhatsApp, Instagram o llenando nuestro formulario de contacto. Te confirmaremos disponibilidad en menos de 24 horas.
                    </p>
                  </div>
                </div>
                <svg className={`w-6 h-6 text-green-600 transition-transform flex-shrink-0 ${openFaq === 3 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* FAQ 5 - ANCHO COMPLETO */}
            <div
              onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
              className="lg:col-span-2 relative bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-3xl p-8 cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Hacen talleres a domicilio?</h3>
                  <div className={`overflow-hidden transition-all ${openFaq === 4 ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="text-gray-700 leading-relaxed pt-2">
                      Sí, para cumpleaños y eventos especiales podemos ir a tu hogar. Consulta por este servicio y te enviaremos una cotización personalizada según tus necesidades.
                    </p>
                  </div>
                </div>
                <svg className={`w-6 h-6 text-yellow-600 transition-transform flex-shrink-0 ${openFaq === 4 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">¿Aún tienes preguntas?</h3>
            <p className="text-lg mb-6 text-white/95">Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas</p>
            <button className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              Contactar Ahora
            </button>
          </div>

        </div>
      </section>

      {/* Contacto - Rediseñado */}
      <section id="contacto" className="relative py-12 px-6 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-pink-50">
        <div className="absolute top-20 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-base font-bold mb-6 shadow-xl">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contacto
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ¿Listo para <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">comenzar?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contáctanos y agenda tu próxima experiencia. Responderemos en menos de 24 horas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Canales de contacto - 3 cards grandes */}
            <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-8 text-white overflow-hidden shadow-2xl group cursor-pointer hover:scale-105 transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/30">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">WhatsApp</h3>
                <p className="text-white/90 mb-4">Respuesta inmediata</p>
                <p className="text-xl font-bold mb-6">+56 9 XXXX XXXX</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30 group-hover:bg-white/30 transition-all">
                  <span>Enviar mensaje</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-3xl p-8 text-white overflow-hidden shadow-2xl group cursor-pointer hover:scale-105 transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/30">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Instagram</h3>
                <p className="text-white/90 mb-4">Síguenos y escríbenos</p>
                <p className="text-xl font-bold mb-6">@ecokids.experiencias</p>
                <a
                  href="https://instagram.com/ecokids.experiencias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30 group-hover:bg-white/30 transition-all"
                >
                  <span>Visitar perfil</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl p-8 text-white overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/30">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Ubicación</h3>
                <p className="text-white/90 mb-4">Ven a visitarnos</p>
                <p className="text-xl font-bold mb-4">Concón<br />V Región, Chile</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                  <p className="text-sm text-white/90">Horario de atención:<br />Lunes a Sábado<br />10:00 - 18:00 hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario centrado abajo */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">O escríbenos directamente</h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="+56 9 ..." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none transition-all" placeholder="Cuéntanos qué necesitas..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Footer - Rediseñado */}
      <footer className="relative bg-gradient-to-br from-orange-500 via-red-400 to-pink-500 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="EcoKids"
                  width={60}
                  height={60}
                  className="w-12 h-12"
                />
                <span className="text-2xl font-bold">EcoKids</span>
              </div>
              <p className="text-white/90 mb-4 max-w-md">
                Experiencias creativas para niños en Concón. Un espacio donde la imaginación no tiene límites.
              </p>
              <div className="text-sm text-white/80">
                Un ratito sin pantallas, un mundo de posibilidades
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-white/90">
                <li><a href="#servicios" className="hover:text-white transition-colors">Talleres Creativos</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Cumpleaños</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Bajo el Mar</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-white/90 text-sm">
                <li>Concón, V Región</li>
                <li>Chile</li>
                <li className="pt-2">
                  <a href="https://instagram.com/ecokids.experiencias" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    @ecokids.experiencias
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 text-center text-white/80 text-sm">
            © 2026 EcoKids - Experiencias Creativas. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
