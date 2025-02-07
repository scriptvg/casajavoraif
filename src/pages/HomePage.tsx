import { 
  Palette, 
  BookOpen, 
  Coffee, 
  Wifi, 
  Projector,
  Music, 
  PencilRuler,
  GraduationCap,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-6xl font-bold mb-4">Casa Javorai</h1>
          <p className="text-xl text-center max-w-2xl mb-8">
            Tu espacio cultural en el corazón de la ciudad. Un lugar donde el arte, 
            el conocimiento y la creatividad se encuentran.
          </p>
          <a href="#servicios" className="animate-bounce mt-8">
            <ChevronDown size={48} />
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestras Instalaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Coffee className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-2">Café</h3>
              <p>Disfruta de nuestro café mientras trabajas o estudias</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Wifi className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Internet</h3>
              <p>Conexión de alta velocidad para tus necesidades</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Biblioteca</h3>
              <p>Acceso a nuestra colección de libros y recursos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Projector className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Proyector</h3>
              <p>Equipamiento audiovisual para presentaciones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Actividades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/guitarra" className="group relative overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80" 
                  alt="Clases de guitarra"
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Music className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-xl font-bold text-white">Clases de Guitarra</h3>
                </div>
              </div>
            </Link>

            <Link to="/dibujo" className="group relative overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80" 
                  alt="Dibujo artístico"
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <PencilRuler className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-xl font-bold text-white">Dibujo Artístico</h3>
                </div>
              </div>
            </Link>

            <Link to="/clases" className="group relative overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80" 
                  alt="Clases particulares"
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <GraduationCap className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-xl font-bold text-white">Clases Particulares</h3>
                </div>
              </div>
            </Link>
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold flex items-center">
              <Palette className="mr-2" /> Casa Javorai
            </h3>
          </div>
          <div className="text-center md:text-right">
            <p>© 2024 Casa Javorai. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}