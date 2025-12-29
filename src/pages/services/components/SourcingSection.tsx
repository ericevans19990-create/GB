
import { useNavigate } from 'react-router-dom';

const SourcingSection = () => {
  const navigate = useNavigate();

  const handleDevisClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sourcing de Produits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous identifions et sélectionnons les meilleurs fournisseurs pour vos besoins spécifiques
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recherche de Fournisseurs */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-search-line text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Recherche de Fournisseurs
            </h3>
            <p className="text-gray-600 mb-6">
              Identification et évaluation des fournisseurs les plus fiables selon vos critères de qualité et de prix.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-green-500 mr-3"></i>
                Base de données de 10,000+ fournisseurs
              </li>
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-green-500 mr-3"></i>
                Vérification des certifications
              </li>
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-green-500 mr-3"></i>
                Audit des capacités de production
              </li>
            </ul>
          </div>

          {/* Négociation */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-handshake-line text-2xl text-green-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Négociation
            </h3>
            <p className="text-gray-600 mb-6">
              Négociation des meilleurs termes commerciaux pour optimiser vos coûts et conditions.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-green-500 mr-3"></i>
                Prix compétitifs garantis
              </li>
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-green-500 mr-3"></i>
                Conditions de paiement flexibles
              </li>
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-green-500 mr-3"></i>
                Délais de livraison optimisés
              </li>
            </ul>
          </div>

          {/* Contrôle Qualité */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-shield-check-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Contrôle Qualité
            </h3>
            <p className="text-gray-600 mb-6">
              Inspection rigoureuse des produits avant expédition pour garantir la conformité aux standards.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-green-500 mr-3"></i>
                Inspection pré-production
              </li>
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-green-500 mr-3"></i>
                Contrôle en cours de production
              </li>
              <li className="flex items-center text-gray-700">
                <i className="ri-check-line text-green-500 mr-3"></i>
                Inspection finale avant expédition
              </li>
            </ul>
            <button 
              onClick={handleDevisClick}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 cursor-pointer whitespace-nowrap mt-6"
            >
              <i className="ri-phone-line mr-2"></i>Demander un Devis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SourcingSection;
