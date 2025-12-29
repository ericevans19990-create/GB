
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import TestimonialsHeroSection from './components/TestimonialsHeroSection';
import TestimonialsGridSection from './components/TestimonialsGridSection';
import TestimonialsStatsSection from './components/TestimonialsStatsSection';
import TestimonialsCTASection from './components/TestimonialsCTASection';

const TestimonialsPage = () => {
  useEffect(() => {
    document.title = 'Témoignages Clients - Nos Réussites en Import-Export';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez les témoignages de nos clients satisfaits. Plus de 500 entreprises nous font confiance pour leurs opérations d\'import-export internationales.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Découvrez les témoignages de nos clients satisfaits. Plus de 500 entreprises nous font confiance pour leurs opérations d\'import-export internationales.';
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'témoignages clients, import export, commerce international, avis clients, réussites');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'témoignages clients, import export, commerce international, avis clients, réussites';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TestimonialsHeroSection />
        <TestimonialsStatsSection />
        <TestimonialsGridSection />
        <TestimonialsCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
