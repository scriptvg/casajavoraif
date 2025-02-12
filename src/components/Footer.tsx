import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Casa Javorai</h3>
            <p className="text-sm text-gray-400">
              Un espacio dedicado al arte, la educación y la cultura en el corazón de la ciudad.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/guitarra" className="hover:text-amber-400 transition-colors">
                  Clases de Guitarra
                </Link>
              </li>
              <li>
                <Link to="/dibujo" className="hover:text-amber-400 transition-colors">
                  Dibujo Artístico
                </Link>
              </li>
              <li>
                <Link to="/clases" className="hover:text-amber-400 transition-colors">
                  Clases Particulares
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="hover:text-amber-400 transition-colors">
                  Eventos Culturales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:info@casajavorai.com" className="hover:text-amber-400 transition-colors">
                  info@casajavorai.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Av. Principal #123, Ciudad</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Casa Javorai. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
