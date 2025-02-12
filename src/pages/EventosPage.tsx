import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { GallerySection } from '../components/GallerySection';
import { EventCard } from '../components/EventCard';
import { FloatingContact } from '../components/FloatingContact';
import { SectionNav } from '../components/SectionNav';
import { eventosData } from '../data/pageData';
import { Suspense } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function EventosPage() {
  const sections = [
    { id: 'hero', label: 'Inicio' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'galeria', label: 'Galería' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SectionNav sections={sections} />
      <FloatingContact />

      <section id="hero">
        <HeroSection
          title="Eventos Culturales"
          description="Descubre nuestros eventos especiales y presentaciones artísticas"
          backgroundImage="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80"
        />
      </section>

      <section id="eventos" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Próximos Eventos
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No te pierdas nuestros eventos especiales y presentaciones artísticas
            </p>
          </div>

          <Suspense fallback={<LoadingSpinner size="lg" />}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eventosData.events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      <section id="galeria">
        <Suspense fallback={<LoadingSpinner size="lg" />}>
          <GallerySection
            title="Galería de Eventos"
            description="Revive los momentos más especiales de nuestros eventos anteriores"
            images={eventosData.galleryImages}
          />
        </Suspense>
      </section>

      <Footer />
    </div>
  );
}