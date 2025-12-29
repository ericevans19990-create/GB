
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEO from '../../components/SEO';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import TestimonialsPreviewSection from './components/TestimonialsPreviewSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Glorys Business",
    "description": "Expert en sourcing, contrôle qualité et logistique internationale depuis la Chine",
    "url": import.meta.env.VITE_SITE_URL || "",
    "logo": "/images/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-1-23-45-67-89",
      "contactType": "customer service",
      "availableLanguage": ["French", "English", "Chinese"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR",
      "addressLocality": "Paris"
    },
    "sameAs": [
      "https://www.linkedin.com/company/glorys-business",
      "https://www.facebook.com/glorysbusiness"
    ],
    "foundingDate": "2014",
    "numberOfEmployees": "50-100",
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "serviceType": [
      "Sourcing",
      "Quality Control",
      "International Logistics",
      "Import Services"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="GLORYS BUSINESS - Sourcing et Import de la Chine"
        description="Expert en sourcing, contrôle qualité et logistique internationale depuis la Chine. Plus de 10 ans d'expérience, 500+ clients satisfaits dans 50+ pays."
        keywords="sourcing chine, import chine, contrôle qualité, logistique internationale, fournisseurs chinois, glorys business"
        ogTitle="GLORYS BUSINESS - Sourcing et Import de la Chine"
        ogDescription="Expert en sourcing, contrôle qualité et logistique internationale depuis la Chine. Plus de 10 ans d'expérience, 500+ clients satisfaits dans 50+ pays."
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsPreviewSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
