
import { useEffect, useState } from 'react';
import { submitToApi } from '../../../lib/form';

const LogisticsSection = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    description: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [isVisible, setIsVisible] = useState(false);
  const [showTransportDetails, setShowTransportDetails] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitToApi('quote-logistics', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        description: '',
        budget: ''
      });
      setTimeout(() => {
        setShowQuoteForm(false);
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('logistique');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const logisticsServices = [
    {
      icon: 'ri-ship-line',
      title: 'Transport International',
      description: 'Solutions de transport maritime, aérien et ferroviaire adaptées à vos besoins.',
      features: ['Fret maritime économique', 'Transport aérien express', 'Rail freight Chine-Europe', 'Transport multimodal']
    },
    {
      icon: 'ri-file-list-line',
      title: 'Formalités Douanières',
      description: 'Gestion complète des procédures douanières et documentation administrative.',
      features: ['Déclarations douanières', 'Certificats d\'origine', 'Gestion des taxes', 'Conformité réglementaire']
    },
    {
      icon: 'ri-store-line',
      title: 'Entreposage & Stockage',
      description: 'Entrepôts sécurisés en Chine et en Europe pour optimiser votre supply chain.',
      features: ['Entrepôts sécurisés', 'Stockage température contrôlée', 'Consolidation de commandes', 'Cross-docking']
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Gestion de Stock',
      description: 'Optimisation des niveaux de stock et prévisions pour réduire vos coûts.',
      features: ['Suivi temps réel', 'Alertes de réapprovisionnement', 'Analyse des rotations', 'Optimisation des coûts']
    }
  ];

  const transportModes = [
    {
      mode: 'Maritime',
      icon: 'ri-ship-line',
      duration: '25-35 jours',
      cost: 'Économique',
      description: 'Idéal pour les gros volumes et marchandises non urgentes',
      color: 'blue'
    },
    {
      mode: 'Aérien',
      icon: 'ri-plane-line',
      duration: '3-7 jours',
      cost: 'Premium',
      description: 'Transport rapide pour les produits urgents ou de haute valeur',
      color: 'green'
    },
    {
      mode: 'Ferroviaire',
      icon: 'ri-train-line',
      duration: '15-20 jours',
      cost: 'Intermédiaire',
      description: 'Compromis idéal entre coût et délai via la route de la soie',
      color: 'purple'
    }
  ];

  const transportDetails = {
    maritime: {
      title: 'Transport Maritime',
      advantages: [
        'Coût le plus économique pour les gros volumes',
        'Capacité de transport illimitée',
        'Empreinte carbone réduite',
        'Adapté aux marchandises non périssables'
      ],
      process: [
        'Collecte des marchandises en Chine',
        'Consolidation dans nos entrepôts',
        'Chargement et expédition maritime',
        'Dédouanement à l\'arrivée',
        'Livraison finale'
      ]
    },
    aerien: {
      title: 'Transport Aérien',
      advantages: [
        'Délai de livraison le plus rapide',
        'Sécurité maximale des marchandises',
        'Suivi en temps réel',
        'Idéal pour les produits de haute valeur'
      ],
      process: [
        'Préparation express des documents',
        'Transport vers l\'aéroport',
        'Vol direct vers l\'Europe',
        'Dédouanement prioritaire',
        'Livraison express'
      ]
    },
    ferroviaire: {
      title: 'Transport Ferroviaire',
      advantages: [
        'Excellent rapport qualité-prix',
        'Délais prévisibles et fiables',
        'Solution écologique',
        'Moins de restrictions douanières'
      ],
      process: [
        'Chargement en gare chinoise',
        'Transit via la route de la soie',
        'Passage des frontières simplifié',
        'Arrivée en Europe',
        'Distribution finale'
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-blue-100 text-blue-600 border-blue-200';
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Solutions Logistiques Complètes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la gestion des stocks à la livraison finale, nous optimisons chaque étape de votre chaîne logistique pour maximiser l'efficacité et réduire les coûts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-truck-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transport & Livraison</h3>
              <p className="text-gray-600 mb-6">
                Réseau de transport multimodal avec suivi en temps réel et garantie de délais de livraison optimisés.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Transport maritime, aérien et terrestre
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Suivi GPS en temps réel
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Assurance marchandises incluse
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-store-3-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gestion d'Entrepôt</h3>
              <p className="text-gray-600 mb-6">
                Stockage sécurisé avec système de gestion automatisé et préparation de commandes optimisée.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Entrepôts climatisés et sécurisés
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Système WMS intégré
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Picking et packing automatisés
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-global-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Douanes & Réglementaire</h3>
              <p className="text-gray-600 mb-6">
                Gestion complète des formalités douanières et conformité réglementaire internationale.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Déclarations douanières automatisées
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Conformité réglementaire
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Optimisation fiscale légale
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setShowQuoteForm(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white border-2 border-white transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>Demander un Devis
            </button>
          </div>
        </div>
      </section>

      {/* Inserted original logistics section */}
      <section id="logistique" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Logistique & Gestion de Stock
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions logistiques complètes pour optimiser votre chaîne d'approvisionnement 
              de la Chine vers l'Europe et le monde entier.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {logisticsServices.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 group cursor-pointer transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 transition-colors duration-300">
                    <i className={`${service.icon} text-indigo-600 group-hover:text-white text-2xl transition-colors duration-300`}></i>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p 
                      className="text-gray-600 mb-4 leading-relaxed cursor-pointer hover:text-indigo-600 transition-colors duration-300"
                      onClick={() => setShowTransportDetails(true)}
                    >
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <i className="ri-check-line text-green-500 mr-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Modes de Transport Disponibles
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {transportModes.map((transport, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-6 border-2 ${getColorClasses(transport.color)} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                >
                  <div className={`w-16 h-16 ${getColorClasses(transport.color)} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <i className={`${transport.icon} text-2xl`}></i>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 text-center mb-3">
                    {transport.mode}
                  </h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Délai:</span>
                      <span className="font-medium text-gray-900">{transport.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Coût:</span>
                      <span className="font-medium text-gray-900">{transport.cost}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {transport.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal de détails des transports */}
        {showTransportDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Solutions de Transport Détaillées</h3>
                  <button 
                    onClick={() => setShowTransportDetails(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <i className="ri-close-line text-xl text-gray-600"></i>
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(transportDetails).map(([key, details]) => (
                    <div key={key} className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{details.title}</h4>
                      
                      <div className="mb-6">
                        <h5 className="font-medium text-gray-900 mb-3">Avantages:</h5>
                        <ul className="space-y-2">
                          {details.advantages.map((advantage, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <i className="ri-check-line text-green-500 mr-2 mt-0.5 flex-shrink-0"></i>
                              {advantage}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-900 mb-3">Processus:</h5>
                        <ol className="space-y-2">
                          {details.process.map((step, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <span className="bg-indigo-100 text-indigo-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-2 mt-0.5 flex-shrink-0">
                                {index + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button 
                    onClick={() => setShowTransportDetails(false)}
                    className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition-colors duration-200 whitespace-nowrap"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Demande de Devis</h3>
                <button
                  onClick={() => setShowQuoteForm(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              <p className="text-gray-600 mt-2">Remplissez ce formulaire pour recevoir un devis personnalisé</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6" id="quote-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="+33 6 17 53 05 67 (France)"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service souhaité *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="sourcing">Sourcing de Produits</option>
                  <option value="logistics">Solutions Logistiques</option>
                  <option value="quality">Contrôle Qualité</option>
                  <option value="consulting">Conseil en Import/Export</option>
                  <option value="complete">Solution Complète</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget estimé
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="">Sélectionnez votre budget</option>
                  <option value="5k-10k">5 000€ - 10 000€</option>
                  <option value="10k-25k">10 000€ - 25 000€</option>
                  <option value="25k-50k">25 000€ - 50 000€</option>
                  <option value="50k-100k">50 000€ - 100 000€</option>
                  <option value="100k+">Plus de 100 000€</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description du projet *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                  placeholder="Décrivez votre projet, vos besoins spécifiques et vos objectifs..."
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.description.length}/500 caractères
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-500 mr-2"></i>
                    <span className="text-green-700 font-medium">Demande envoyée avec succès !</span>
                  </div>
                  <p className="text-green-600 text-sm mt-1">Nous vous contacterons dans les 24h.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-500 mr-2"></i>
                    <span className="text-red-700 font-medium">Erreur lors de l'envoi</span>
                  </div>
                  <p className="text-red-600 text-sm mt-1">Veuillez réessayer ou nous contacter directement.</p>
                </div>
              )}

              <div className="mt-8 flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowQuoteForm(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium cursor-pointer whitespace-nowrap"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.service || !formData.description}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      Envoyer la demande
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LogisticsSection;
