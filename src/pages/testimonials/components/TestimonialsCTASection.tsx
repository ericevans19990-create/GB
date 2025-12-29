
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function TestimonialsCTASection() {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate('/#contact');
    // Petit délai pour permettre à la navigation de se faire avant le scroll
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleQuoteClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Rejoignez Nos Clients Satisfaits
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Faites confiance à notre expertise pour optimiser votre sourcing en Chine. 
            Plus de 500 entreprises nous font déjà confiance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleConsultationClick}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              Consultation Gratuite
            </button>
            <button
              onClick={handleQuoteClick}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-white cursor-pointer whitespace-nowrap"
            >
              <i className="ri-file-text-line mr-2"></i>
              Demander un Devis
            </button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-blue-100">
            <div className="flex items-center">
              <i className="ri-check-line mr-1 text-green-400"></i>
              Consultation gratuite
            </div>
            <div className="flex items-center">
              <i className="ri-check-line mr-1 text-green-400"></i>
              Devis personnalisé
            </div>
            <div className="flex items-center">
              <i className="ri-check-line mr-1 text-green-400"></i>
              Réponse sous 24h
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
