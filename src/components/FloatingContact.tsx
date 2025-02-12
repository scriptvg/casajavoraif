import { Phone, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`flex flex-col items-end space-y-4 mb-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        <a
          href="tel:+1234567890"
          className="flex items-center bg-white text-amber-600 px-4 py-2 rounded-full shadow-lg hover:bg-amber-50 transition-colors"
        >
          <Phone className="w-5 h-5 mr-2" />
          <span>Llamar</span>
        </a>
        <a
          href="mailto:info@casajavorai.com"
          className="flex items-center bg-white text-amber-600 px-4 py-2 rounded-full shadow-lg hover:bg-amber-50 transition-colors"
        >
          <Mail className="w-5 h-5 mr-2" />
          <span>Email</span>
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white text-amber-600 px-4 py-2 rounded-full shadow-lg hover:bg-amber-50 transition-colors"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          <span>WhatsApp</span>
        </a>
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300 ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
}
