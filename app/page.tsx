'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const experiencias = [
    {
      id: 1,
      nombre: 'Aventura bajo el mar',
      titulo1: 'Aventura',
      titulo2: 'bajo el mar',
      color: '#06b6d4',
      gradiente: 'from-[#cffafe] to-white',
      gradienteBoton: 'from-[#06b6d4] to-[#22d3ee]',
      imagen: '/cangrejo1.png',
      descripcion: 'Sumérgete en una increíble aventura submarina donde los niños explorarán el fascinante mundo marino. Actividades creativas, juegos temáticos y manualidades inspiradas en el océano.',
      incluye: ['Manualidades temáticas del mar', 'Juegos acuáticos creativos', 'Cuentos y canciones marinas', 'Materiales incluidos'],
      duracion: '2 horas',
      edades: '3-8 años',
      precio: '$7.000'
    },
    {
      id: 2,
      nombre: 'Aventura jurásica',
      titulo1: 'Aventura',
      titulo2: 'jurásica',
      color: '#ea580c',
      gradiente: 'from-[#fed7aa] to-white',
      gradienteBoton: 'from-[#ea580c] to-[#fb923c]',
      imagen: '/cangrejo2.png',
      descripcion: '¡Viaja al pasado y descubre el mundo de los dinosaurios! Una experiencia llena de diversión, creatividad y aprendizaje sobre estos increíbles animales prehistóricos.',
      incluye: ['Excavación de fósiles', 'Creación de dinosaurios', 'Juegos temáticos jurásicos', 'Kit de paleontólogo'],
      duracion: '2 horas',
      edades: '4-10 años',
      precio: '$8.000'
    },
    {
      id: 3,
      nombre: 'Aventura del espacio',
      titulo1: 'Aventura',
      titulo2: 'del espacio',
      color: '#6366f1',
      gradiente: 'from-[#e0e7ff] to-white',
      gradienteBoton: 'from-[#6366f1] to-[#818cf8]',
      imagen: '/cangrejo3.png',
      descripcion: 'Despega hacia las estrellas en esta aventura espacial. Los niños explorarán planetas, estrellas y galaxias mientras crean sus propias naves espaciales y arte cósmico.',
      incluye: ['Creación de cohetes', 'Pintura de planetas', 'Experimentos espaciales', 'Casco de astronauta'],
      duracion: '2 horas',
      edades: '5-10 años',
      precio: '$8.000'
    },
    {
      id: 4,
      nombre: 'Aventura encantada',
      titulo1: 'Aventura',
      titulo2: 'encantada',
      color: '#ec4899',
      gradiente: 'from-[#fce7f3] to-white',
      gradienteBoton: 'from-[#ec4899] to-[#f472b6]',
      imagen: '/cangrejo4.png',
      descripcion: 'Un mundo mágico lleno de hadas, princesas y criaturas fantásticas. Creatividad, fantasía y diversión en una experiencia que despertará la imaginación de los niños.',
      incluye: ['Creación de varitas mágicas', 'Coronas y accesorios', 'Cuentos de fantasía', 'Maquillaje artístico'],
      duracion: '2 horas',
      edades: '3-8 años',
      precio: '$8.000'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="EcoKids"
              width={200}
              height={80}
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Menu Central */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#inicio" className="text-gray-700 hover:text-[#f97316] transition-colors font-medium text-sm border-b-2 border-gray-700 pb-1">Inicio</a>
            <a href="#experiencias" className="text-gray-700 hover:text-[#f97316] transition-colors font-medium text-sm">Experiencias</a>
            <a href="#sobre-nosotros" className="text-gray-700 hover:text-[#f97316] transition-colors font-medium text-sm">Sobre nosotros</a>
            <a href="#contacto" className="text-gray-700 hover:text-[#f97316] transition-colors font-medium text-sm">Contacto</a>
          </div>

          {/* Botón Participar */}
          <button className="flex items-center gap-2 px-6 py-3 bg-[#f97316] text-white rounded-full font-semibold text-sm hover:bg-[#ea580c] transition-all shadow-md">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
            </svg>
            Quiero participar
          </button>
        </nav>
      </header>

      {/* Hero Section - Banner Horizontal Integrado */}
      <section className="relative" style={{marginTop: '96px', marginBottom: 0, padding: 0}}>
        <div className="relative flex" style={{height: '450px', margin: 0, padding: 0}}>
          {/* Mitad Izquierda - Fondo beige con contenido y decoraciones */}
          <div className="relative w-2/5 h-full bg-[#f5f2ed] flex items-center">

            {/* Contenido */}
            <div className="relative z-10 px-12 max-w-2xl space-y-4">
              <h1 className="text-5xl lg:text-5xl font-bold leading-[1.1]">
                <span className="text-gray-900">Donde la </span>
                <span className="text-[#f97316]">creatividad</span>
                <br />
                <span className="text-gray-900">no tiene </span>
                <span className="text-[#6366f1]">fronteras.</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Experiencias educativas que inspiran, emocionan y dejan huellas para siempre.
              </p>
              <div>
                <button className="px-7 py-3 bg-[#f97316] text-white rounded-full font-semibold text-base hover:bg-[#ea580c] transition-all shadow-lg inline-flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Reserva tu experiencia
                </button>

                {/* Social Proof */}
                <div className="flex items-center justify-start gap-6 text-sm">
                  {/* Niños felices */}
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 border-2 border-white flex items-center justify-center shadow-md">
                        <span className="text-xl">😊</span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white flex items-center justify-center shadow-md">
                        <span className="text-xl">🎨</span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-white flex items-center justify-center shadow-md">
                        <span className="text-xl">✨</span>
                      </div>
                    </div>
                    <span className="text-gray-700 font-semibold">+100 niños felices</span>
                  </div>

                  {/* Estrellas */}
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-700 font-semibold">5.0 de opiniones</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mitad Derecha - Foto como fondo */}
          <div
            className="w-3/5 relative"
            style={{
              backgroundImage: 'url(/hero.png)',
              backgroundSize: 'cover',
              backgroundPosition: '30% center',
              backgroundRepeat: 'no-repeat',
              height: '450px'
            }}
          >
            {/* Gradiente para mezclar con la sección izquierda - sin línea visible */}
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#f5f2ed] via-[#f5f2ed]/20 to-transparent w-32"></div>
          </div>
        </div>
      </section>

      {/* Sección Experiencias */}
      <section id="experiencias" className="relative py-20 px-6 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 overflow-hidden">
        {/* Decoraciones de fondo animadas */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Título mejorado */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 via-yellow-100 to-pink-100 border-2 border-orange-300 rounded-full px-6 py-2 mb-5 shadow-lg">
              <span className="text-3xl">🎨</span>
              <span className="text-sm font-bold text-gray-800">Nuestras aventuras</span>
              <span className="text-3xl">✨</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 flex items-center justify-center gap-4 flex-wrap">
              <span className="text-4xl">✨</span>
              <span className="text-gray-900">Participa en alguna de nuestras</span>
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">experiencias</span>
              <span className="text-4xl">✨</span>
            </h2>
            <p className="text-lg text-gray-700 font-medium">¡Cada aventura es única y emocionante! 🚀</p>
          </div>

          {/* Grid de experiencias mejorado */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {experiencias.map((exp, index) => (
              <div
                key={exp.id}
                className={`group relative bg-gradient-to-br ${exp.gradiente} rounded-3xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-3 cursor-pointer overflow-hidden`}
                style={{borderColor: exp.color, borderWidth: '3px', animationDelay: `${index * 100}ms`}}
                onClick={() => setSelectedExperience(exp.id)}
              >
                {/* Decoración de esquina */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20" style={{background: exp.color, clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}></div>

                {/* Número de aventura */}
                <div className="absolute top-3 left-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-sm font-black" style={{color: exp.color}}>{index + 1}</span>
                </div>

                <div className="text-center mb-3 mt-6">
                  <h3 className="text-2xl font-black mb-0.5 drop-shadow-sm" style={{color: exp.color}}>{exp.titulo1}</h3>
                  <h4 className="text-lg font-bold" style={{color: exp.color}}>{exp.titulo2}</h4>
                </div>

                {/* Imagen con efecto 3D */}
                <div className="relative h-48 bg-white rounded-2xl flex items-center justify-center mb-4 p-3 shadow-lg group-hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl"></div>
                  <Image
                    src={exp.imagen}
                    alt={exp.nombre}
                    width={200}
                    height={200}
                    className="relative z-10 w-full h-full object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 drop-shadow-lg"
                  />
                </div>

                {/* Botón mejorado */}
                <button className={`w-full py-3 bg-gradient-to-r ${exp.gradienteBoton} text-white rounded-2xl font-black text-sm hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Más información</span>
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Quiénes Somos - La Historia de Flo */}
      <section id="sobre-nosotros" className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        {/* Decoraciones de fondo */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Título */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 text-white rounded-full text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              Quiénes somos
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="text-gray-900">Conoce nuestra </span>
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent">historia</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              La pasión de Flo por crear experiencias inolvidables para niños
            </p>
          </div>

          {/* Historia en cards separadas compactas */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* 1. Hola, soy Flo */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200 hover:shadow-xl transition-all">
              <div className="flex gap-4">
                <div className="w-32 h-40 flex-shrink-0">
                  <Image
                    src="/historia/mama.png"
                    alt="Flo"
                    width={128}
                    height={160}
                    className="rounded-xl w-full h-full object-cover shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🧡</span>
                    <h3 className="text-lg font-bold text-orange-600">Hola, soy Flo</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    La persona detrás de EcoKids, apasionada por la educación y el arte. Creé este espacio para que cada niño descubra su creatividad sin límites.
                  </p>
                  <div className="inline-block px-3 py-1 bg-orange-100 rounded-full">
                    <span className="text-xs font-semibold text-orange-700">✨ Fundadora EcoKids</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. También soy mamá */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200 hover:shadow-xl transition-all">
              <div className="flex gap-4">
                <div className="w-32 h-40 flex-shrink-0">
                  <Image
                    src="/historia/flo.png"
                    alt="Mamá"
                    width={128}
                    height={160}
                    className="rounded-xl w-full h-full object-cover shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">💜</span>
                    <h3 className="text-lg font-bold text-purple-600">También soy mamá</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    Desde que llegaron mis hijos, entendí aún más lo importante que es regalarles tiempo de calidad, creatividad y recuerdos que duren para siempre.
                  </p>
                  <div className="flex gap-2">
                    <div className="px-2 py-1 bg-purple-100 rounded-lg">
                      <span className="text-xs font-semibold text-purple-700">👨‍👩‍👧‍👦 Familia</span>
                    </div>
                    <div className="px-2 py-1 bg-pink-100 rounded-lg">
                      <span className="text-xs font-semibold text-pink-700">💝 Tiempo de calidad</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Más de 15 años */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200 hover:shadow-xl transition-all">
              <div className="flex gap-4">
                <div className="w-32 h-40 flex-shrink-0">
                  <Image
                    src="/historia/experiencia.png"
                    alt="Experiencia"
                    width={128}
                    height={160}
                    className="rounded-xl w-full h-full object-cover shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">⭐</span>
                    <h3 className="text-lg font-bold text-green-600">+15 años de experiencia</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    Trabajo con niños desde hace más de 15 años, con formación profesional que respalda cada experiencia que creamos juntos.
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      <span className="text-gray-600">Educadora de Párvulos</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      <span className="text-gray-600">Magíster en Arteterapia</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="text-gray-600">Magíster en Liderazgo Educativo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Creatividad sin fronteras */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all">
              <div className="flex gap-4">
                <div className="w-32 h-40 flex-shrink-0">
                  <Image
                    src="/historia/kenia.png"
                    alt="Kenia"
                    width={128}
                    height={160}
                    className="rounded-xl w-full h-full object-cover shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🌍</span>
                    <h3 className="text-lg font-bold text-blue-600">Creatividad sin fronteras</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    Participé en proyectos educativos con niños en Kenia, una experiencia transformadora que confirmó que el juego y el cariño hablan un idioma universal.
                  </p>
                  <div className="inline-block px-3 py-1 bg-blue-100 rounded-full">
                    <span className="text-xs font-semibold text-blue-700">🎨 El arte une culturas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Así nació EcoKids - Destacado a ancho completo */}
            <div className="md:col-span-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-8 shadow-xl border-2 border-orange-300">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-3xl">✨</span>
                  <h3 className="text-2xl font-bold text-orange-600">Así nació EcoKids</h3>
                </div>
                <p className="text-gray-800 font-medium mb-3 leading-relaxed max-w-3xl mx-auto">
                  Después de tantos años trabajando con niños, soñaba con crear un espacio donde pudieran jugar, crear y compartir experiencias inolvidables. Un lugar donde la creatividad no tiene fronteras.
                </p>
                <div className="flex gap-2 flex-wrap justify-center">
                  <div className="px-3 py-1 bg-white rounded-full shadow-sm border border-orange-200">
                    <span className="text-xs font-semibold text-orange-700">🎨 Creatividad</span>
                  </div>
                  <div className="px-3 py-1 bg-white rounded-full shadow-sm border border-pink-200">
                    <span className="text-xs font-semibold text-pink-700">🌱 Aprendizaje</span>
                  </div>
                  <div className="px-3 py-1 bg-white rounded-full shadow-sm border border-purple-200">
                    <span className="text-xs font-semibold text-purple-700">💝 Diversión</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Servicios - Rediseñado Colorido */}
      <section id="servicios" className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-300/20 to-red-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 text-white rounded-full text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Nuestros Servicios
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="text-gray-900">Experiencias </span>
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent">únicas</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Talleres creativos y celebraciones inolvidables diseñadas para inspirar
            </p>
          </div>

          {/* Grid de servicios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Servicio 1 - Talleres Creativos */}
            <div className="group relative bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-pink-300 hover:border-pink-400 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200/40 to-rose-200/40 rounded-full blur-2xl"></div>
              <div className="relative flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Talleres Creativos</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    Arte, manualidades y actividades que despiertan la imaginación sin límites.
                  </p>
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                      <span className="text-lg">🖌️</span>
                      <span className="font-medium">Arte y pintura</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                      <span className="text-lg">✂️</span>
                      <span className="font-medium">Manualidades</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                      <span className="text-lg">👐</span>
                      <span className="font-medium">Juegos sensoriales</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 mt-auto">
                  Ver Talleres
                </button>
              </div>
            </div>

            {/* Servicio 2 - Cumpleaños */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-300 hover:border-purple-400 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-2xl"></div>
              <div className="relative flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    <span className="text-3xl">🎂</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cumpleaños Especiales</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    Celebraciones mágicas con actividades temáticas que harán inolvidable su día.
                  </p>
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                      <span className="text-lg">⏰</span>
                      <span className="font-medium">3 horas de diversión</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                      <span className="text-lg">🎉</span>
                      <span className="font-medium">15+ niños invitados</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                      <span className="text-lg">🎨</span>
                      <span className="font-medium">Temáticas personalizadas</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 mt-auto">
                  Cotizar Ahora
                </button>
              </div>
            </div>

            {/* Servicio 3 - Eventos Corporativos */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-300 hover:border-blue-400 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-2xl"></div>
              <div className="relative flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eventos Corporativos</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    Actividades especiales para empresas y sus familias.
                  </p>
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                      <span className="text-lg">👨‍👩‍👧‍👦</span>
                      <span className="font-medium">Family days</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                      <span className="text-lg">🎉</span>
                      <span className="font-medium">Día del niño</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                      <span className="text-lg">✨</span>
                      <span className="font-medium">A medida</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 mt-auto">
                  Solicitar Info
                </button>
              </div>
            </div>

            {/* Servicio 4 - Experiencias Educativas */}
            <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-300 hover:border-green-400 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/40 to-emerald-200/40 rounded-full blur-2xl"></div>
              <div className="relative flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Experiencias Educativas</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    Talleres escolares complementarios y jornadas especiales.
                  </p>
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                      <span className="text-lg">🏫</span>
                      <span className="font-medium">Colegios, jardines y centros educativos</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                      <span className="text-lg">🎯</span>
                      <span className="font-medium">Actividades extracurriculares</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                      <span className="text-lg">📚</span>
                      <span className="font-medium">Programas a medida</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 mt-auto">
                  Más Información
                </button>
              </div>
            </div>
          </div>

          {/* Banner CTA */}
          <div className="bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-2xl p-8 text-white text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">¿Buscas algo diferente?</h3>
            <p className="text-lg mb-5 text-white/95">Creamos experiencias personalizadas para cada ocasión</p>
            <button className="px-6 py-3 bg-white text-pink-600 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all">
              Contáctanos
            </button>
          </div>

        </div>
      </section>

      {/* Cómo Funciona - Súper Entretenido */}
      <section id="como-funciona" className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-orange-300/30 to-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Dinámico */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-white rounded-full text-sm font-bold mb-6 shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
              <span className="text-xl">✨</span>
              ¡Súper fácil!
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-gray-900">Reserva en </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">3 pasos</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-2xl mx-auto font-bold">
              ¡Rápido, fácil y listo para la diversión! 🎉
            </p>
          </div>

          {/* Grid de pasos con conectores */}
          <div className="relative">
            {/* Línea conectora decorativa - solo en desktop */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 opacity-30" style={{width: '85%', marginLeft: '7.5%'}}></div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Paso 1 - EXPLORA */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-3 border-purple-300 hover:border-purple-500 hover:-translate-y-2">
                  {/* Número grande decorativo */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all">
                    <span className="text-2xl font-black text-white">1</span>
                  </div>

                  {/* Icono animado */}
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    <span className="text-3xl">🔍</span>
                  </div>

                  <div className="text-center">
                    <div className="inline-block px-3 py-1 bg-purple-200 rounded-full text-xs font-bold text-purple-800 mb-3 border-2 border-purple-300">
                      PASO 1
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">¡Explora!</h3>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Descubre talleres increíbles y experiencias mágicas 🌟
                    </p>
                  </div>
                </div>
              </div>

              {/* Paso 2 - RESERVA */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-3 border-pink-300 hover:border-pink-500 hover:-translate-y-2">
                  {/* Número grande decorativo */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all">
                    <span className="text-2xl font-black text-white">2</span>
                  </div>

                  {/* Icono animado */}
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    <span className="text-3xl">📅</span>
                  </div>

                  <div className="text-center">
                    <div className="inline-block px-3 py-1 bg-pink-200 rounded-full text-xs font-bold text-pink-800 mb-3 border-2 border-pink-300">
                      PASO 2
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">¡Reserva!</h3>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Escríbenos por WhatsApp o Instagram y agenda 💬
                    </p>
                  </div>
                </div>
              </div>

              {/* Paso 3 - DISFRUTA */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-3 border-orange-300 hover:border-orange-500 hover:-translate-y-2">
                  {/* Número grande decorativo */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all">
                    <span className="text-2xl font-black text-white">3</span>
                  </div>

                  {/* Icono animado */}
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    <span className="text-3xl">🎨</span>
                  </div>

                  <div className="text-center">
                    <div className="inline-block px-3 py-1 bg-orange-200 rounded-full text-xs font-bold text-orange-800 mb-3 border-2 border-orange-300">
                      PASO 3
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">¡Disfruta!</h3>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Llega el día y vive momentos inolvidables 🎉
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Galería - Súper Entretenida */}
      <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Dinámico */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-white rounded-full text-sm font-bold mb-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <span className="text-2xl">📸</span>
              ¡Mira lo que hacemos!
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="text-gray-900">Momentos </span>
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-pink-600 bg-clip-text text-transparent">mágicos</span>
            </h2>
            <p className="text-xl text-gray-700 font-bold mb-6">
              ¡Capturados con todo el amor! 💖
            </p>
            <a
              href="https://instagram.com/ecokids.experiencias"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Ver todas en Instagram</span>
              <span className="text-xl">✨</span>
            </a>
          </div>

          {/* Carrusel con efectos */}
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div
                key={num}
                className="flex-shrink-0 w-72 h-72 relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all cursor-pointer group border-4 border-white hover:border-pink-300 hover:-translate-y-2 hover:rotate-1"
              >
                <Image
                  src={`/galeria/foto${num}.png`}
                  alt={`Galería EcoKids ${num}`}
                  width={288}
                  height={288}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-bold text-lg">¡Momentos felices! ✨</p>
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

          {/* Testimonios Grid 2x2 */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Testimonio 1 */}
            <div className="relative bg-gradient-to-br from-orange-100 to-pink-100 border-3 border-orange-300 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 text-base mb-5 leading-relaxed font-medium flex-1">
                "Hermosa experiencia para mi hija. Gracias por regalarles recuerdos tan lindos desde tan pequeñas. Como mamá, valoro profundamente que los niños tengan la oportunidad de explorar, divertirse y compartir con otros niños que aún no conocen."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t-2 border-orange-200 mt-auto">
                <Image
                  src="https://i.pravatar.cc/150?img=5"
                  alt="Mamá de EcoKids"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-orange-300"
                />
                <div>
                  <div className="font-bold text-gray-900">Mamá de EcoKids</div>
                  <div className="text-sm text-gray-600">Instagram</div>
                </div>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 border-3 border-purple-300 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 text-base mb-5 leading-relaxed font-medium flex-1">
                "Hermoso. Toda tu trayectoria como educadora se ve reflejada acá. Estoy segura que EcoKids va a ser un éxito. 100% recomendada."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t-2 border-purple-200 mt-auto">
                <Image
                  src="https://i.pravatar.cc/150?img=9"
                  alt="Arangula"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-purple-300"
                />
                <div>
                  <div className="font-bold text-gray-900">Arangula</div>
                  <div className="text-sm text-gray-600">Instagram</div>
                </div>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 border-3 border-blue-300 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 text-base mb-5 leading-relaxed font-medium flex-1">
                "Un gusto poder ser parte del proyecto. Todo muy lindo, los niños la pasaron genial. Llegaron a la casa a seguir pintando las figuritas que se llevaron."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t-2 border-blue-200 mt-auto">
                <Image
                  src="https://i.pravatar.cc/150?img=10"
                  alt="Adriana"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-blue-300"
                />
                <div>
                  <div className="font-bold text-gray-900">Adriana</div>
                  <div className="text-sm text-gray-600">Mamá participante</div>
                </div>
              </div>
            </div>

            {/* Testimonio 4 - NUEVO */}
            <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 border-3 border-green-300 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 text-base mb-5 leading-relaxed font-medium flex-1">
                "Mi hija no para de hablar de los talleres. La creatividad y el cariño con que trabajan es increíble. ¡Totalmente recomendado para mamás que buscan actividades de calidad!"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t-2 border-green-200 mt-auto">
                <Image
                  src="https://i.pravatar.cc/150?img=47"
                  alt="Carolina"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-green-300"
                />
                <div>
                  <div className="font-bold text-gray-900">Carolina</div>
                  <div className="text-sm text-gray-600">Mamá feliz</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats - Compactos y Divertidos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Stat 1 - Familias Felices */}
            <div className="group relative text-center bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl p-4 border-2 border-orange-300 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                <span className="text-2xl">😊</span>
              </div>
              <div className="mt-6">
                <div className="text-3xl font-black text-orange-600 mb-1">2000+</div>
                <div className="text-xs text-gray-800 font-bold">Familias Felices</div>
              </div>
            </div>

            {/* Stat 2 - Calificación */}
            <div className="group relative text-center bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4 border-2 border-purple-300 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="mt-6">
                <div className="text-3xl font-black text-purple-600 mb-1">5.0</div>
                <div className="text-xs text-gray-800 font-bold">Calificación Promedio</div>
              </div>
            </div>

            {/* Stat 3 - Recomendación */}
            <div className="group relative text-center bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-4 border-2 border-blue-300 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                <span className="text-2xl">👍</span>
              </div>
              <div className="mt-6">
                <div className="text-3xl font-black text-blue-600 mb-1">98%</div>
                <div className="text-xs text-gray-800 font-bold">Recomendación</div>
              </div>
            </div>

            {/* Stat 4 - Talleres */}
            <div className="group relative text-center bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-4 border-2 border-green-300 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                <span className="text-2xl">🎨</span>
              </div>
              <div className="mt-6">
                <div className="text-3xl font-black text-green-600 mb-1">500+</div>
                <div className="text-xs text-gray-800 font-bold">Talleres Realizados</div>
              </div>
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

          {/* Grid de FAQs - 6 preguntas compactas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {/* FAQ 1 */}
            <div
              onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
              className="group relative bg-gradient-to-br from-orange-100 to-pink-100 border-3 border-orange-300 rounded-2xl p-5 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-2xl">👶</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 flex-1">¿Qué edades?</h3>
                <svg className={`w-5 h-5 text-orange-600 transition-transform flex-shrink-0 ${openFaq === 0 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-all ${openFaq === 0 ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Nuestros talleres están diseñados para niños de 3 a 12 años. Adaptamos todas las actividades según la edad de cada grupo para garantizar que todos disfruten y aprendan de manera segura y divertida.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div
              onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
              className="group relative bg-gradient-to-br from-blue-100 to-cyan-100 border-3 border-blue-300 rounded-2xl p-5 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 flex-1">¿Cuánto dura?</h3>
                <svg className={`w-5 h-5 text-blue-600 transition-transform flex-shrink-0 ${openFaq === 1 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-all ${openFaq === 1 ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Los talleres regulares tienen una duración de 1.5 a 2 horas de pura creatividad. Las celebraciones de cumpleaños pueden durar hasta 3 horas, incluyendo tiempo para la torta y la celebración.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div
              onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
              className="group relative bg-gradient-to-br from-purple-100 to-pink-100 border-3 border-purple-300 rounded-2xl p-5 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 flex-1">¿Llevo materiales?</h3>
                <svg className={`w-5 h-5 text-purple-600 transition-transform flex-shrink-0 ${openFaq === 2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-all ${openFaq === 2 ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  No es necesario. Todos los materiales están incluidos en nuestros talleres. Solo trae a tu hijo con ropa cómoda que pueda mancharse y muchas ganas de crear y divertirse.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div
              onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
              className="group relative bg-gradient-to-br from-green-100 to-emerald-100 border-3 border-green-300 rounded-2xl p-5 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 flex-1">¿Cómo reservo?</h3>
                <svg className={`w-5 h-5 text-green-600 transition-transform flex-shrink-0 ${openFaq === 3 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-all ${openFaq === 3 ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Puedes reservar fácilmente por WhatsApp, Instagram o llenando nuestro formulario de contacto. Te confirmaremos disponibilidad en menos de 24 horas.
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div
              onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
              className="group relative bg-gradient-to-br from-yellow-100 to-orange-100 border-3 border-yellow-300 rounded-2xl p-5 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 flex-1">¿A domicilio?</h3>
                <svg className={`w-5 h-5 text-yellow-600 transition-transform flex-shrink-0 ${openFaq === 4 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-all ${openFaq === 4 ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  ¡Sí! Para cumpleaños y eventos especiales podemos llevar toda la diversión a tu hogar. Consulta por este servicio y te enviaremos una cotización personalizada.
                </p>
              </div>
            </div>

            {/* FAQ 6 - NUEVA */}
            <div
              onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
              className="group relative bg-gradient-to-br from-pink-100 to-rose-100 border-3 border-pink-300 rounded-2xl p-5 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 flex-1">¿Cuánto cuesta?</h3>
                <svg className={`w-5 h-5 text-pink-600 transition-transform flex-shrink-0 ${openFaq === 5 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-all ${openFaq === 5 ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Los precios varían según el tipo de taller, número de niños y duración. Contáctanos y te enviaremos una cotización personalizada que se ajuste a tus necesidades.
                </p>
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

      {/* Contacto - Rediseñado Colorido */}
      <section id="contacto" className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-white rounded-full text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contacto
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="text-gray-900">¿Listo para </span>
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">comenzar?</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Contáctanos y agenda tu próxima experiencia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
            {/* WhatsApp */}
            <div className="group relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-300 hover:border-green-400 hover:-translate-y-1 overflow-hidden">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-emerald-200 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg mx-auto">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-1.5 text-center">WhatsApp 💬</h3>
                <p className="text-gray-700 mb-3 leading-snug text-center font-medium text-sm">
                  ¡Respuesta inmediata!
                </p>
                <div className="bg-white/80 backdrop-blur rounded-xl p-2.5 mb-3 border-2 border-green-300 shadow-md">
                  <p className="text-green-900 font-bold text-center text-sm">+56 9 XXXX XXXX</p>
                </div>
                <button className="w-full py-2.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105 text-sm">
                  Enviar mensaje 📱
                </button>
              </div>
            </div>

            {/* Instagram */}
            <div className="group relative bg-gradient-to-br from-purple-50 via-pink-50 to-fuchsia-50 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-300 hover:border-pink-400 hover:-translate-y-1 overflow-hidden">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-pink-200 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 via-pink-500 to-fuchsia-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg mx-auto">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-1.5 text-center">Instagram 📸</h3>
                <p className="text-gray-700 mb-3 leading-snug text-center font-medium text-sm">
                  ¡Síguenos para ver talleres!
                </p>
                <div className="bg-white/80 backdrop-blur rounded-xl p-2.5 mb-3 border-2 border-purple-300 shadow-md">
                  <p className="text-purple-900 font-bold text-center text-sm">@ecokids.experiencias</p>
                </div>
                <a href="https://instagram.com/ecokids.experiencias" target="_blank" rel="noopener noreferrer" className="w-full block">
                  <button className="w-full py-2.5 bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 text-white rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105 text-sm">
                    Visitar perfil ✨
                  </button>
                </a>
              </div>
            </div>

            {/* Ubicación */}
            <div className="group relative bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-300 hover:border-sky-400 hover:-translate-y-1 overflow-hidden">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-cyan-200 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 via-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg mx-auto">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-1.5 text-center">Ubicación 📍</h3>
                <p className="text-gray-700 mb-3 leading-snug text-center font-medium text-sm">
                  ¡Ven a visitarnos!
                </p>
                <div className="bg-white/80 backdrop-blur rounded-xl p-2.5 mb-2.5 border-2 border-blue-300 shadow-md">
                  <p className="text-blue-900 font-bold text-center text-sm">Concón, V Región</p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-2.5 border-2 border-sky-300">
                  <p className="text-xs text-blue-900 text-center font-bold">⏰ Lunes a Sábado<br />10:00 - 18:00 hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario centrado abajo */}
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-gray-100">
              <div className="text-center mb-5">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 border-2 border-orange-200 rounded-full px-4 py-1.5 mb-3">
                  <span className="text-xl">✉️</span>
                  <span className="text-xs font-bold text-gray-800">Formulario de contacto</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  <span className="text-gray-900">O </span>
                  <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">escríbenos directamente</span>
                </h3>
                <p className="text-sm text-gray-600">Te responderemos lo antes posible 🎨</p>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Mensaje</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none transition-all text-sm text-gray-900 placeholder:text-gray-400"
                    placeholder="Cuéntanos qué taller te interesa, cuántos niños participarán, fechas disponibles..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-xl font-bold text-base shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Enviar Mensaje</span>
                  <span className="text-xl">🚀</span>
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
              <div className="mb-4">
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

      {/* Modal de Experiencias */}
      {selectedExperience && (() => {
        const exp = experiencias.find(e => e.id === selectedExperience);
        if (!exp) return null;

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedExperience(null)}>
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              {/* Header con color de la experiencia */}
              <div className={`relative bg-gradient-to-br ${exp.gradiente} p-8 rounded-t-3xl border-b-4`} style={{borderColor: exp.color}}>
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-48 h-48 bg-white/80 rounded-2xl flex items-center justify-center p-6 shadow-xl">
                    <Image
                      src={exp.imagen}
                      alt={exp.nombre}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{color: exp.color}}>
                      {exp.titulo1}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{color: exp.color}}>
                      {exp.titulo2}
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <div className="bg-white/90 px-4 py-2 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-gray-700">⏱️ {exp.duracion}</span>
                      </div>
                      <div className="bg-white/90 px-4 py-2 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-gray-700">👶 {exp.edades}</span>
                      </div>
                      <div className="bg-white/90 px-4 py-2 rounded-full shadow-md">
                        <span className="text-sm font-semibold" style={{color: exp.color}}>💰 {exp.precio}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8">
                {/* Descripción */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">¿De qué se trata?</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">{exp.descripcion}</p>
                </div>

                {/* Lo que incluye */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">¿Qué incluye?</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.incluye.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: exp.color}}>
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className={`flex-1 py-4 px-6 bg-gradient-to-r ${exp.gradienteBoton} text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Agendar Experiencia
                  </button>
                  <a
                    href="https://wa.me/56912345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
