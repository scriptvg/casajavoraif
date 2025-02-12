import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold relative group"
          >
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              Casa Javorai
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            <Link 
              to="/guitarra" 
              className={`px-4 py-2 rounded-lg transition-all relative group ${
                isActive('/guitarra') 
                  ? 'text-amber-600' 
                  : 'hover:text-amber-600'
              }`}
            >
              <span>Clases de Guitarra</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform origin-left transition-transform ${
                isActive('/guitarra') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/clases" 
              className={`px-4 py-2 rounded-lg transition-all relative group ${
                isActive('/clases') 
                  ? 'text-amber-600' 
                  : 'hover:text-amber-600'
              }`}
            >
              <span>Clases Particulares</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform origin-left transition-transform ${
                isActive('/clases') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/dibujo" 
              className={`px-4 py-2 rounded-lg transition-all relative group ${
                isActive('/dibujo') 
                  ? 'text-amber-600' 
                  : 'hover:text-amber-600'
              }`}
            >
              <span>Dibujo Artístico</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform origin-left transition-transform ${
                isActive('/dibujo') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/eventos" 
              className={`px-4 py-2 rounded-lg transition-all relative group ${
                isActive('/eventos') 
                  ? 'text-amber-600' 
                  : 'hover:text-amber-600'
              }`}
            >
              <span>Eventos Culturales</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform origin-left transition-transform ${
                isActive('/eventos') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/guitarra" 
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  isActive('/guitarra')
                    ? 'bg-amber-50 text-amber-600'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Clases de Guitarra
              </Link>
              <Link 
                to="/clases" 
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  isActive('/clases')
                    ? 'bg-amber-50 text-amber-600'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Clases Particulares
              </Link>
              <Link 
                to="/dibujo" 
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  isActive('/dibujo')
                    ? 'bg-amber-50 text-amber-600'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Dibujo Artístico
              </Link>
              <Link 
                to="/eventos" 
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  isActive('/eventos')
                    ? 'bg-amber-50 text-amber-600'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Eventos Culturales
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}