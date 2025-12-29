
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEO from '../../components/SEO';
import LegalHeroSection from './components/LegalHeroSection';
import LegalContentSection from './components/LegalContentSection';

export default function Legal() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Mentions Légales - GLORYS BUSINESS"
        description="Consultez les mentions légales de Glorys Business, informations sur l'entreprise et conditions d'utilisation du site."
        canonicalUrl="/legal"
      />
      <Header />
      <main>
        <LegalHeroSection />
        <LegalContentSection />
      </main>
      <Footer />
    </div>
  );
}
