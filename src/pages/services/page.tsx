
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEO from '../../components/SEO';
import ServicesHeroSection from './components/ServicesHeroSection';
import SourcingSection from './components/SourcingSection';
import LogisticsSection from './components/LogisticsSection';
import ProcessSection from './components/ProcessSection';

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Import and Sourcing Services",
    "provider": {
      "@type": "Organization",
      "name": "Glorys Business"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Sourcing et Import",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sourcing de Produits",
            "description": "Recherche et sélection de fournisseurs fiables en Chine"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Contrôle Qualité",
            "description": "Inspection et contrôle qualité des produits avant expédition"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Logistique Internationale",
            "description": "Gestion complète de la chaîne logistique et transport"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Services - GLORYS BUSINESS | Sourcing, Qualité et Logistique"
        description="Découvrez nos services complets : sourcing de produits, contrôle qualité, logistique internationale. Solutions sur-mesure pour votre import depuis la Chine."
        keywords="services sourcing, contrôle qualité chine, logistique internationale, import produits chine"
        ogTitle="Services - GLORYS BUSINESS | Sourcing, Qualité et Logistique"
        ogDescription="Services complets de sourcing, contrôle qualité et logistique internationale"
        canonicalUrl="/services"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <ServicesHeroSection />
        <SourcingSection />
        <LogisticsSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
