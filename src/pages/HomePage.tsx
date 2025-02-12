import { 
  Palette, 
  BookOpen, 
  Coffee, 
  Wifi, 
  Projector,
  Music,
  PencilRuler,
  GraduationCap,
  ChevronDown,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        {/* Background with parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
          }}
        >
          {/* Multiple gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-transparent"></div>
        </div>
        
        {/* Animated grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4NCjxmaWx0ZXIgaWQ9ImEiIHg9IjAiIHk9IjAiPg0KPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPg0KPC9maWx0ZXI+DQo8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIwLjA1Ii8+DQo8L3N2Zz4=')] animate-grain"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          {/* Main content with reveal animations */}
          <div className="space-y-6 text-center">
            <h1 
              className="text-6xl md:text-8xl font-bold tracking-tight"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              <span className="inline-block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
                Casa Javorai
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
              Tu espacio cultural en el corazón de la ciudad. Un lugar donde el arte, 
              el conocimiento y la creatividad se encuentran.
            </p>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
              <a 
                href="#servicios" 
                className="group flex flex-col items-center text-gray-300 hover:text-amber-400 transition-colors"
              >
                <span className="text-sm mb-2">Servicios</span>
                <ChevronDown 
                  size={36} 
                  className="animate-bounce group-hover:text-amber-400 transition-colors" 
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes grain {
          0%, 100% { transform: translate(0, 0) }
          10% { transform: translate(-5%, -10%) }
          20% { transform: translate(-15%, 5%) }
          30% { transform: translate(7%, -25%) }
          40% { transform: translate(-5%, 25%) }
          50% { transform: translate(-15%, 10%) }
          60% { transform: translate(15%, 0%) }
          70% { transform: translate(0%, 15%) }
          80% { transform: translate(3%, 35%) }
          90% { transform: translate(-10%, 10%) }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }

        .animate-grain {
          animation: grain 8s steps(10) infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Nuestras Instalaciones</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Disfruta de nuestras modernas instalaciones diseñadas para brindarte la mejor experiencia de aprendizaje y creatividad
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Coffee className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-600 transition-colors">Café</h3>
                <p className="text-gray-600 mb-4">Disfruta de nuestro café de especialidad mientras trabajas o estudias en un ambiente acogedor</p>
                <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors">
                  Conoce más
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Wifi className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">Internet</h3>
                <p className="text-gray-600 mb-4">Conexión de alta velocidad para todas tus necesidades de trabajo y estudio</p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  Conoce más
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors">Biblioteca</h3>
                <p className="text-gray-600 mb-4">Amplia colección de libros y recursos educativos a tu disposición</p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors">
                  Conoce más
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Projector className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">Proyector</h3>
                <p className="text-gray-600 mb-4">Equipamiento audiovisual moderno para presentaciones y eventos</p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors">
                  Conoce más
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actividades Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Nuestras Actividades
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explora nuestras diferentes actividades y encuentra la que mejor se adapte a tus intereses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Guitarra */}
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80"
                  alt="Clases de Guitarra"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Music className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Clases de Guitarra</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Aprende a tocar guitarra con nuestros profesores experimentados. 
                  Clases para todos los niveles y edades.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-amber-600" />
                    <span>Clases personalizadas</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-amber-600" />
                    <span>Teoría musical</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-amber-600" />
                    <span>Práctica en grupo</span>
                  </li>
                </ul>
                <Link 
                  to="/guitarra">
                  <button className="btn btn-primary">Ver más</button>
                </Link>
              </div>
            </div>

            {/* Dibujo */}
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80"
                  alt="Dibujo Artístico"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Palette className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Dibujo Artístico</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Desarrolla tu creatividad y técnica en el dibujo con nuestros 
                  cursos especializados para todas las edades.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-amber-600" />
                    <span>Diferentes técnicas</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-amber-600" />
                    <span>Materiales incluidos</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-amber-600" />
                    <span>Exposiciones</span>
                  </li>
                </ul>
                <Link 
                  to="/dibujo"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors"
                >
                  <span className="font-medium">Ver más detalles</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Clases Particulares */}
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80"
                  alt="Clases Particulares"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Clases Particulares</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Apoyo académico personalizado para mejorar el rendimiento 
                  escolar en todos los niveles.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-amber-600" />
                    <span>Todas las materias</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-amber-600" />
                    <span>Horarios flexibles</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-amber-600" />
                    <span>Seguimiento individual</span>
                  </li>
                </ul>
                <Link 
                  to="/clases"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors"
                >
                  <span className="font-medium">Ver más detalles</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Reserva Tu Espacio</h2>
          <p className="text-xl mb-8">
            Contamos con espacios adaptados para diferentes actividades culturales y educativas.
            Renta por hora y disfruta de todas nuestras instalaciones.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contactar
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}