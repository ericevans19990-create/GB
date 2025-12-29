
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEO from '../../components/SEO';
import WhyChooseHeroSection from './components/WhyChooseHeroSection';
import AdvantagesSection from './components/AdvantagesSection';
import ComparisonSection from './components/ComparisonSection';
import ProcessSection from './components/ProcessSection';
import CTASection from './components/CTASection';

export default function WhyChoose() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pourquoi Choisir Glorys Business",
    "description": "Découvrez pourquoi choisir Glorys Business pour vos besoins de sourcing et d'import depuis la Chine",
    "mainEntity": {
      "@type": "Organization",
      "name": "Glorys Business",
      "award": [
        "Plus de 500 clients satisfaits",
        "Présence dans 50+ pays",
        "10+ années d'expérience"
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Pourquoi Nous Choisir - GLORYS BUSINESS | Avantages et Expertise"
        description="Découvrez pourquoi choisir Glorys Business : 10+ ans d'expérience, 500+ clients satisfaits, expertise reconnue en sourcing et import depuis la Chine."
        keywords="pourquoi choisir glorys business, avantages sourcing chine, expertise import, clients satisfaits"
        ogTitle="Pourquoi Nous Choisir - GLORYS BUSINESS | Avantages et Expertise"
        ogDescription="10+ ans d'expérience, 500+ clients satisfaits, expertise reconnue en sourcing"
        canonicalUrl="/why-choose"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <WhyChooseHeroSection />
        <AdvantagesSection />
        <ComparisonSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
