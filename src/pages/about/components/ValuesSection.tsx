
import { useEffect, useState } from 'react';
import { submitToApi } from '../../../lib/form';

export default function ValuesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [showContactModal, setShowContactModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animer les cartes une par une
          [0, 1, 2, 3, 4, 5].forEach((index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('valeurs');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'Nous intégrons les dernières technologies pour optimiser vos processus d\'import et révolutionner votre expérience client.',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Fiabilité',
      description: 'Notre engagement : des partenaires vérifiés, des contrôles qualité rigoureux et une transparence totale sur chaque étape.',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'ri-speed-line',
      title: 'Réactivité',
      description: 'Équipe jeune et dynamique, nous nous adaptons rapidement à vos besoins et répondons dans les plus brefs délais.',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Proximité Client',
      description: 'Un accompagnement personnalisé avec un interlocuteur dédié qui comprend vos enjeux et anticipe vos besoins.',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: 'ri-global-line',
      title: 'Vision Internationale',
      description: 'Une approche globale des marchés avec une expertise locale en Chine et une connaissance approfondie des réglementations européennes.',
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Responsabilité',
      description: 'Nous privilégions les fournisseurs respectueux de l\'environnement et des conditions de travail éthiques.',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-teal-50'
    }
  ];

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      nom: formData.get('nom') as string,
      email: formData.get('email') as string,
      entreprise: formData.get('entreprise') as string,
      telephone: formData.get('telephone') as string,
      sujet: formData.get('sujet') as string,
      message: formData.get('message') as string
    };
    
    if (!data.nom || !data.email || !data.message) {
      alert('Veuillez remplir tous les champs obligatoires');
      setIsSubmitting(false);
      return;
    }
    
    const messageLength = data.message.length;
    if (messageLength > 500) {
      alert(`Votre message dépasse la limite de 500 caractères (${messageLength}/500)`);
      setIsSubmitting(false);
      return;
    }
    
    try {
      await submitToApi('contact-values', data);
      alert('Merci pour votre message ! Nous vous recontacterons rapidement.');
      (e.target as HTMLFormElement).reset();
      setShowContactModal(false);
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="valeurs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Nos 
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Valeurs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action quotidienne et font de GLORYS BUSINESS 
              un partenaire de confiance pour votre développement international.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`${value.bgColor} rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer border border-gray-100`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <i className={`${value.icon} text-white text-2xl`}></i>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {value.description}
                  </p>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-full h-1 bg-gradient-to-r ${value.color} rounded-full`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Citation inspirante */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl max-w-4xl mx-auto">
              <i className="ri-double-quotes-l text-4xl text-blue-200 mb-6 block"></i>
              <blockquote className="text-2xl md:text-3xl font-light italic mb-6 leading-relaxed">
                "Depuis 2023, nous révolutionnons les échanges commerciaux en combinant 
                innovation technologique et expertise humaine pour créer des ponts durables 
                entre l'Europe et la Chine."
              </blockquote>
              <div className="text-blue-200 text-lg mb-8">
                — Équipe Fondatrice GLORYS BUSINESS
              </div>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-mail-send-line mr-2"></i>
                  Nous Contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de contact */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-gray-900">Contactez-Nous</h3>
                <button 
                  onClick={() => setShowContactModal(false)}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <p className="text-gray-600 mb-8">
                Notre équipe d'experts est là pour vous accompagner dans vos projets d'import depuis la Chine.
              </p>

              <form 
                onSubmit={handleContactSubmit}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input 
                      type="text" 
                      name="nom"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input 
                      type="text" 
                      name="entreprise"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input 
                      type="tel" 
                      name="telephone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <div className="relative">
                    <select 
                      name="sujet"
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer text-sm"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information-generale">Information générale</option>
                      <option value="demande-devis">Demande de devis</option>
                      <option value="partenariat">Opportunité de partenariat</option>
                      <option value="support">Support client</option>
                      <option value="autre">Autre</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none text-sm"></i>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message * (max 500 caractères)
                  </label>
                  <textarea 
                    name="message"
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                    placeholder="Décrivez votre demande ou votre projet..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                  >
                    Annuler
                  </button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line mr-2 animate-spin"></i>
                        Envoi...
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line mr-2"></i>
                        Envoyer
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
