
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEO from '../../components/SEO';
import AboutHeroSection from './components/AboutHeroSection';
import CompanyHistorySection from './components/CompanyHistorySection';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Glorys Business",
      "description": "Société spécialisée dans le sourcing et l'import depuis la Chine avec plus de 10 ans d'expérience",
      "foundingDate": "2014",
      "founder": {
        "@type": "Person",
        "name": "Équipe Glorys Business"
      },
      "numberOfEmployees": "50-100",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR",
        "addressLocality": "Paris"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="À Propos - GLORYS BUSINESS | Notre Histoire et Expertise"
        description="Découvrez l'histoire de Glorys Business, notre équipe d'experts et nos valeurs. Plus de 10 ans d'expérience dans le sourcing et l'import depuis la Chine."
        keywords="à propos glorys business, histoire entreprise, équipe sourcing chine, expertise import"
        ogTitle="À Propos - GLORYS BUSINESS | Notre Histoire et Expertise"
        ogDescription="Découvrez l'histoire de Glorys Business, notre équipe d'experts et nos valeurs"
        canonicalUrl="/about"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <AboutHeroSection />
        <CompanyHistorySection />
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
