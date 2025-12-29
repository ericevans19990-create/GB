
import { useEffect, useState } from 'react';

export default function FaqSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('faq-content');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: 'Sourcing & Fournisseurs',
      icon: 'ri-search-line',
      questions: [
        {
          question: 'Comment sélectionnez-vous vos fournisseurs en Chine ?',
          answer: 'Nous appliquons un processus de sélection rigoureux incluant la vérification des licences, l\'audit des capacités de production, l\'évaluation financière, et des visites sur site. Tous nos fournisseurs sont certifiés et régulièrement audités.'
        },
        {
          question: 'Combien de temps prend la recherche de fournisseurs ?',
          answer: 'En moyenne, nous identifions 3-5 fournisseurs qualifiés en 7-10 jours ouvrables. Ce délai peut varier selon la complexité du produit et les spécifications techniques requises.'
        },
        {
          question: 'Pouvez-vous négocier les prix avec les fournisseurs ?',
          answer: 'Absolument. Notre équipe locale négocie systématiquement les meilleures conditions commerciales : prix, délais, conditions de paiement, et modalités de livraison. Nous obtenons généralement des économies de 15-30%.'
        }
      ]
    },
    {
      category: 'Contrôle Qualité',
      icon: 'ri-shield-check-line',
      questions: [
        {
          question: 'Quels types d\'inspections proposez-vous ?',
          answer: 'Nous proposons trois niveaux d\'inspection : pré-production (validation des matières premières), en cours de production (suivi de fabrication), et inspection finale (contrôle avant expédition). Chaque inspection inclut un rapport détaillé avec photos.'
        },
        {
          question: 'Que se passe-t-il si les produits ne respectent pas les standards ?',
          answer: 'En cas de non-conformité, nous négocions immédiatement avec le fournisseur pour corriger les défauts, obtenir un rabais, ou dans les cas graves, annuler la commande. Vous êtes informé en temps réel de toute situation.'
        },
        {
          question: 'Proposez-vous des tests en laboratoire ?',
          answer: 'Oui, nous travaillons avec des laboratoires certifiés pour effectuer tous types de tests : sécurité, conformité CE, tests chimiques, tests de résistance, etc. Les coûts sont transparents et communiqués à l\'avance.'
        }
      ]
    },
    {
      category: 'Logistique & Transport',
      icon: 'ri-truck-line',
      questions: [
        {
          question: 'Quels sont les délais de transport depuis la Chine ?',
          answer: 'Maritime : 25-35 jours, Aérien : 3-7 jours, Ferroviaire : 15-20 jours. Ces délais incluent les formalités douanières. Nous proposons aussi des solutions express pour les urgences.'
        },
        {
          question: 'Gérez-vous les formalités douanières ?',
          answer: 'Oui, nous nous occupons de toutes les formalités : déclarations douanières, certificats d\'origine, gestion des taxes et droits de douane. Vous recevez tous les documents nécessaires pour le dédouanement.'
        },
        {
          question: 'Proposez-vous un suivi des expéditions ?',
          answer: 'Absolument. Vous avez accès à notre plateforme de suivi en temps réel avec notifications automatiques à chaque étape : départ usine, arrivée port, embarquement, transit, arrivée destination.'
        }
      ]
    },
    {
      category: 'Tarifs & Paiements',
      icon: 'ri-money-dollar-circle-line',
      questions: [
        {
          question: 'Comment sont calculés vos tarifs ?',
          answer: 'Nos tarifs sont transparents et basés sur le volume, la complexité du projet, et les services demandés. Nous proposons des forfaits pour les projets récurrents et des tarifs dégressifs selon les volumes.'
        },
        {
          question: 'Quelles sont vos conditions de paiement ?',
          answer: 'Nous acceptons les virements bancaires, lettres de crédit, et paiements sécurisés en ligne. Généralement : 30% à la commande, 40% avant production, 30% avant expédition. Conditions adaptables selon les projets.'
        },
        {
          question: 'Y a-t-il des frais cachés ?',
          answer: 'Aucun frais caché. Tous les coûts sont détaillés dans notre devis : services, transport, assurance, formalités douanières. Nous nous engageons sur une transparence totale des prix.'
        }
      ]
    }
  ];

  return (
    <section id="faq-content" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Réponses à Vos Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consultez nos réponses aux questions les plus fréquemment posées. 
            Si vous ne trouvez pas votre réponse, n'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className={`${category.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 10 + questionIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div 
                        key={questionIndex}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between cursor-pointer"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          <i className={`ri-${isOpen ? 'subtract' : 'add'}-line text-blue-600 text-xl flex-shrink-0 transition-transform duration-200`}></i>
                        </button>
                        
                        <div className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="p-4 bg-white border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold mb-4">
            Vous ne trouvez pas votre réponse ?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Notre équipe d'experts est disponible pour répondre à toutes vos questions spécifiques. 
            Contactez-nous pour un conseil personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-mail-line mr-2"></i>
              Nous Contacter
            </button>
            <div className="flex flex-col gap-2">
              <p className="text-white text-sm font-medium">Téléphone :</p>
              <a 
                href="tel:+33617530567"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300 cursor-pointer text-sm flex items-center"
              >
                <i className="ri-phone-line mr-2"></i>
                +33 6 17 53 05 67 (France)
              </a>
              <a 
                href="tel:+861318046965"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300 cursor-pointer text-sm flex items-center"
              >
                <i className="ri-phone-line mr-2"></i>
                +86 131 8046 9651 (Chine)
              </a>
              <a 
                href="tel:+237687935703"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300 cursor-pointer text-sm flex items-center"
              >
                <i className="ri-phone-line mr-2"></i>
                +237 687935703 (Cameroun)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
