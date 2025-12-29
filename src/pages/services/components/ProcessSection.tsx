
import { useEffect, useState } from 'react';
import React from 'react';
import { submitToApi } from '../../../lib/form';

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('processus');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    // Rediriger vers la page d'accueil avec la section contact
    window.location.href = '/#contact';
  };

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      nom: formData.get('nom') as string,
      email: formData.get('email') as string,
      entreprise: formData.get('entreprise') as string,
      telephone: formData.get('telephone') as string,
      service: formData.get('service') as string,
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
      await submitToApi('quote-process', data);
      alert('Merci pour votre demande ! Nous vous recontacterons rapidement.');
      (e.target as HTMLFormElement).reset();
      setShowQuoteModal(false);
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const processSteps = [
    {
      step: '01',
      title: 'Demande & Analyse',
      description: 'Analyse de vos besoins et définition des spécifications produits.',
      icon: 'ri-file-text-line',
      color: 'blue'
    },
    {
      step: '02',
      title: 'Sourcing Fournisseurs',
      description: 'Recherche et sélection des fournisseurs les plus adaptés.',
      icon: 'ri-search-line',
      color: 'green'
    },
    {
      step: '03',
      title: 'Négociation & Commande',
      description: 'Négociation des conditions et validation de la commande.',
      icon: 'ri-handshake-line',
      color: 'purple'
    },
    {
      step: '04',
      title: 'Contrôle Qualité',
      description: 'Inspections rigoureuses à chaque étape de production.',
      icon: 'ri-shield-check-line',
      color: 'orange'
    },
    {
      step: '05',
      title: 'Stockage & Préparation',
      description: 'Stockage sécurisé et préparation pour l\'expédition.',
      icon: 'ri-store-line',
      color: 'red'
    },
    {
      step: '06',
      title: 'Transport & Livraison',
      description: 'Expédition et livraison porte-à-porte avec suivi complet.',
      icon: 'ri-truck-line',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-blue-100 text-blue-600 border-blue-200';
  };

  return (
    <>
      <section id="processus" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Processus de Travail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus structuré et transparent pour garantir le succès de vos projets 
              de sourcing et de logistique internationale.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 cursor-pointer transform hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 ${getColorClasses(step.color)} rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10`}>
                      <i className={`${step.icon} text-2xl`}></i>
                    </div>
                    
                    <div className="absolute top-2 right-2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">{step.step}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold mb-4">
              Prêt à Démarrer Votre Projet ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Notre équipe d'experts est prête à vous accompagner dans votre projet de sourcing 
              et de logistique internationale. Contactez-nous pour un devis personnalisé.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              Demander un Devis
            </button>
          </div>
        </div>
      </section>

      {/* Modal de demande de devis */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Demande de Devis</h3>
              <button 
                onClick={() => setShowQuoteModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-close-line text-xl text-gray-500"></i>
              </button>
            </div>
            
            <form 
              id="quote-form"
              onSubmit={handleQuoteSubmit}
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input 
                    type="tel" 
                    name="telephone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service souhaité
                </label>
                <div className="relative">
                  <select 
                    name="service"
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="sourcing">Recherche de fournisseurs</option>
                    <option value="qualite">Contrôle qualité</option>
                    <option value="logistique">Logistique internationale</option>
                    <option value="stockage">Solutions de stockage</option>
                    <option value="gestion-stock">Gestion de stock</option>
                    <option value="accompagnement">Accompagnement personnalisé</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Décrivez votre projet et vos besoins..."
                  required
                ></textarea>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  type="button"
                  onClick={() => setShowQuoteModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                >
                  Annuler
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line mr-2 animate-spin"></i>
                      Envoi...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      Envoyer la Demande
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
}
