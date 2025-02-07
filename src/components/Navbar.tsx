import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">Casa Javorai</Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-amber-600 transition-colors">Inicio</Link>
            <Link to="/guitarra" className="hover:text-amber-600 transition-colors">Clases de Guitarra</Link>
            <Link to="/dibujo" className="hover:text-amber-600 transition-colors">Dibujo Artístico</Link>
            <Link to="/clases" className="hover:text-amber-600 transition-colors">Clases Particulares</Link>
            <Link to="/eventos" className="hover:text-amber-600 transition-colors">Eventos Culturales</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/guitarra" 
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Clases de Guitarra
              </Link>
              <Link 
                to="/dibujo" 
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Dibujo Artístico
              </Link>
              <Link 
                to="/clases" 
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Clases Particulares
              </Link>
              <Link 
                to="/eventos" 
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
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