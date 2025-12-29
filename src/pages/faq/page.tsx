
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEO from '../../components/SEO';
import FaqHeroSection from './components/FaqHeroSection';
import FaqSection from './components/FaqSection';

export default function FAQ() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quels sont vos délais de livraison ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nos délais varient selon le mode de transport : 15-25 jours par mer, 5-7 jours par avion, et 10-15 jours par train."
        }
      },
      {
        "@type": "Question",
        "name": "Comment garantissez-vous la qualité des produits ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous effectuons des contrôles qualité rigoureux à chaque étape : inspection des fournisseurs, contrôle en cours de production, et inspection finale avant expédition."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont vos tarifs ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nos tarifs sont personnalisés selon vos besoins. Contactez-nous pour un devis gratuit et détaillé."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="FAQ - GLORYS BUSINESS | Questions Fréquentes Sourcing Chine"
        description="Trouvez les réponses à vos questions sur nos services de sourcing et d'import depuis la Chine. Délais, qualité, tarifs et processus expliqués."
        keywords="faq sourcing chine, questions fréquentes import, délais livraison, contrôle qualité, tarifs sourcing"
        ogTitle="FAQ - GLORYS BUSINESS | Questions Fréquentes Sourcing Chine"
        ogDescription="Réponses à vos questions sur nos services de sourcing et d'import depuis la Chine"
        canonicalUrl="/faq"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <FaqHeroSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
