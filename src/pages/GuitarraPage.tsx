import { Music, Calendar, DollarSign, CheckCircle2 } from 'lucide-react';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { ClassCard } from '../components/ClassCard';
import { FeatureSection } from '../components/FeatureSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GallerySection } from '../components/GallerySection';
import { FAQSection } from '../components/FAQSection';
import { FloatingContact } from '../components/FloatingContact';
import { SectionNav } from '../components/SectionNav';
import { testimonials, galleryImages, faqs } from '../data/guitarData';
import { Suspense } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function GuitarraPage() {
  const sections = [
    { id: 'hero', label: 'Inicio' },
    { id: 'clases', label: 'Clases' },
    { id: 'galeria', label: 'Galería' },
    { id: 'beneficios', label: 'Beneficios' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'faq', label: 'FAQ' }
  ];

  const clases = [
    {
      nivel: "Básico",
      horario: "Lunes a Viernes 15:00 - 19:00",
      precio: "$200/hora",
      descripcion: "Introducción a la guitarra y conceptos fundamentales",
      beneficios: [
        "Postura y técnica básica",
        "Acordes principales",
        "Ritmos básicos",
        "Lectura de tablaturas"
      ]
    },
    {
      nivel: "Intermedio",
      horario: "Lunes a Viernes 16:00 - 20:00",
      precio: "$250/hora",
      descripcion: "Perfecciona tu técnica y amplía tu repertorio",
      beneficios: [
        "Técnicas de punteo",
        "Escalas y arpegios",
        "Teoría musical",
        "Práctica en grupo"
      ]
    },
    {
      nivel: "Avanzado",
      horario: "Sábados 10:00 - 14:00",
      precio: "$300/hora",
      descripcion: "Domina técnicas avanzadas y desarrolla tu estilo",
      beneficios: [
        "Técnicas avanzadas",
        "Improvisación",
        "Composición",
        "Presentaciones en vivo"
      ]
    }
  ];

  const features = [
    {
      icon: Music,
      title: "Clases Personalizadas",
      description: "Adaptamos las lecciones a tu ritmo y estilo de aprendizaje"
    },
    {
      icon: Calendar,
      title: "Horarios Flexibles",
      description: "Diferentes horarios para adaptarnos a tu disponibilidad"
    },
    {
      icon: CheckCircle2,
      title: "Profesores Expertos",
      description: "Instructores calificados con amplia experiencia en enseñanza"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SectionNav sections={sections} />
      <FloatingContact />

      <section id="hero">
        <HeroSection
          title="Clases de Guitarra"
          description="Aprende a tocar guitarra con clases personalizadas para todos los niveles"
          backgroundImage="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80"
        />
      </section>

      {/* Clases Section */}
      <section id="clases" className="max-w-6xl mx-auto px-4 py-20">
        <Suspense fallback={<LoadingSpinner size="lg" />}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clases.map((clase, index) => (
              <ClassCard
                key={index}
                {...clase}
                formUrl="https://forms.gle/your-form-url-here"
              />
            ))}
          </div>
        </Suspense>
      </section>

      <section id="galeria">
        <Suspense fallback={<LoadingSpinner size="lg" />}>
          <GallerySection
            title="Nuestra Experiencia"
            description="Conoce nuestras instalaciones y el ambiente de aprendizaje"
            images={galleryImages}
          />
        </Suspense>
      </section>

      <section id="beneficios">
        <FeatureSection
          title="¿Por qué tomar clases con nosotros?"
          description="Nuestro método de enseñanza personalizado y nuestros profesores experimentados te ayudarán a alcanzar tus metas musicales."
          features={features}
        />
      </section>

      <section id="testimonios">
        <Suspense fallback={<LoadingSpinner size="lg" />}>
          <TestimonialsSection testimonials={testimonials} />
        </Suspense>
      </section>

      <section id="faq">
        <FAQSection
          title="Preguntas Frecuentes"
          description="Resolvemos tus dudas sobre nuestras clases de guitarra"
          faqs={faqs}
        />
      </section>

      <Footer />
    </div>
  );
}