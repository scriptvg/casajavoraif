import { Palette, Calendar, DollarSign, CheckCircle2 } from 'lucide-react';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { ClassCard } from '../components/ClassCard';
import { FeatureSection } from '../components/FeatureSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GallerySection } from '../components/GallerySection';
import { FAQSection } from '../components/FAQSection';
import { FloatingContact } from '../components/FloatingContact';
import { SectionNav } from '../components/SectionNav';
import { dibujoData } from '../data/pageData';
import { Suspense } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function DibujoPage() {
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
      descripcion: "Introducción al dibujo y técnicas fundamentales",
      beneficios: [
        "Técnicas básicas de dibujo",
        "Teoría del color",
        "Composición básica",
        "Materiales incluidos"
      ]
    },
    {
      nivel: "Intermedio",
      horario: "Lunes a Viernes 16:00 - 20:00",
      precio: "$250/hora",
      descripcion: "Perfecciona tus técnicas y explora nuevos medios",
      beneficios: [
        "Técnicas de sombreado",
        "Perspectiva",
        "Dibujo de figuras",
        "Carboncillo y pasteles"
      ]
    },
    {
      nivel: "Avanzado",
      horario: "Sábados 10:00 - 14:00",
      precio: "$300/hora",
      descripcion: "Desarrolla tu estilo personal y proyectos artísticos",
      beneficios: [
        "Técnicas mixtas",
        "Desarrollo de portafolio",
        "Exposiciones",
        "Proyectos personales"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SectionNav sections={sections} />
      <FloatingContact />

      <section id="hero">
        <HeroSection
          title="Clases de Dibujo"
          description="Aprende a expresarte a través del arte con clases personalizadas para todos los niveles"
          backgroundImage="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80"
        />
      </section>

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
            title="Galería de Arte"
            description="Conoce los trabajos de nuestros estudiantes y el ambiente artístico"
            images={dibujoData.galleryImages}
          />
        </Suspense>
      </section>

      <section id="beneficios">
        <FeatureSection
          title="¿Por qué tomar clases con nosotros?"
          description="Nuestro método de enseñanza personalizado y nuestros profesores experimentados te ayudarán a desarrollar tu talento artístico."
          features={features}
        />
      </section>

      <section id="testimonios">
        <Suspense fallback={<LoadingSpinner size="lg" />}>
          <TestimonialsSection testimonials={dibujoData.testimonials} />
        </Suspense>
      </section>

      <section id="faq">
        <FAQSection
          title="Preguntas Frecuentes"
          description="Resolvemos tus dudas sobre nuestras clases de dibujo"
          faqs={dibujoData.faqs}
        />
      </section>

      <Footer />
    </div>
  );
}