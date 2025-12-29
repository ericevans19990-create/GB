
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEO from '../../components/SEO';
import PrivacyHeroSection from './components/PrivacyHeroSection';
import PrivacyContentSection from './components/PrivacyContentSection';

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Politique de Confidentialité - GLORYS BUSINESS"
        description="Consultez notre politique de confidentialité et découvrez comment nous protégeons vos données personnelles chez Glorys Business."
        canonicalUrl="/privacy"
      />
      <Header />
      <main>
        <PrivacyHeroSection />
        <PrivacyContentSection />
      </main>
      <Footer />
    </div>
  );
}
