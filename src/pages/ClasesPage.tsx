import { Music, Palette, Calendar, Users, CheckCircle2, Star } from 'lucide-react';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { ClassFeatures } from '../components/ClassFeatures';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { FloatingContact } from '../components/FloatingContact';
import { SectionNav } from '../components/SectionNav';
import { clasesData } from '../data/pageData';
import { Suspense } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function ClasesPage() {
  const sections = [
    { id: 'hero', label: 'Inicio' },
    { id: 'guitarra', label: 'Guitarra' },
    { id: 'dibujo', label: 'Dibujo' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'faq', label: 'FAQ' }
  ];

  const guitarraFeatures = [
    {
      icon: Music,
      title: "Clases de Guitarra",
      description: "Aprende desde los fundamentos hasta técnicas avanzadas con profesores expertos"
    },
    {
      icon: Star,
      title: "Todos los Niveles",
      description: "Clasesw adaptadas a tu nivel y objetivos musicales"
    },
    {
      icon: Users,
      title: "Clases Individuales",
      description: "Atención personalizada para un aprendizaje más efectivo"
    }
  ];

  const dibujoFeatures = [
    {
      icon: Palette,
      title: "Clases de Dibujo",
      description: "Desarrolla tu creatividad y técnica artística"
    },
    {
      icon: CheckCircle2,
      title: "Materiales Incluidos",
      description: "Todos los materiales necesarios para las clases"
    },
    {
      icon: Calendar,
      title: "Horarios Flexibles",
      description: "Diferentes horarios para tu comodidad"
    }
  ];

  return (
    <div>
      <SectionNav sections={sections} />
      <HeroSection 
        title="Clases de Música y Arte" 
        subtitle="Desarrolla tu creatividad y pasión" 
        backgroundImage="/images/hero-clases.jpg" 
      />
      <section id="guitarra">
        <ClassFeatures features={guitarraFeatures} />
      </section>
      <section id="dibujo">
        <ClassFeatures features={dibujoFeatures} />
      </section>
      <Suspense fallback={<LoadingSpinner size="lg" />}>
        <TestimonialsSection data={clasesData.testimonios} />
      </Suspense>
      <FAQSection faqs={clasesData.faq} />
      <FloatingContact />
      <Footer />
    </div>
  );
}