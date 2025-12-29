
import { useEffect, useState } from 'react';

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('process-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    {
      number: '01',
      title: 'Analyse Approfondie',
      description: 'Étude détaillée de vos besoins, contraintes techniques et objectifs commerciaux',
      duration: '2-3 jours',
      deliverables: ['Cahier des charges', 'Analyse de faisabilité', 'Budget prévisionnel'],
      icon: 'ri-search-line'
    },
    {
      number: '02',
      title: 'Sourcing Stratégique',
      description: 'Identification et sélection des fournisseurs les plus adaptés à votre projet',
      duration: '5-7 jours',
      deliverables: ['Liste de fournisseurs qualifiés', 'Comparatif détaillé', 'Échantillons'],
      icon: 'ri-global-line'
    },
    {
      number: '03',
      title: 'Négociation & Contrats',
      description: 'Négociation des meilleures conditions et sécurisation juridique des accords',
      duration: '3-5 jours',
      deliverables: ['Contrats sécurisés', 'Conditions optimisées', 'Planning de production'],
      icon: 'ri-handshake-line'
    },
    {
      number: '04',
      title: 'Contrôle Qualité',
      description: 'Inspections rigoureuses à chaque étape de la production',
      duration: 'Continu',
      deliverables: ['Rapports d\'inspection', 'Tests de conformité', 'Certifications'],
      icon: 'ri-shield-check-line'
    },
    {
      number: '05',
      title: 'Logistique Intégrée',
      description: 'Gestion complète de l\'expédition et des formalités douanières',
      duration: '10-30 jours',
      deliverables: ['Suivi en temps réel', 'Documentation complète', 'Livraison sécurisée'],
      icon: 'ri-truck-line'
    },
    {
      number: '06',
      title: 'Support Continu',
      description: 'Accompagnement post-livraison et développement de partenariats durables',
      duration: 'Permanent',
      deliverables: ['Support technique', 'Optimisations', 'Nouvelles opportunités'],
      icon: 'ri-customer-service-line'
    }
  ];

  return (
    <section id="process-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Notre 
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Méthodologie
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un processus structuré en 6 étapes pour garantir le succès de votre projet 
            et minimiser les risques à chaque phase.
          </p>
        </div>

        {/* Version Grid pour une meilleure organisation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* En-tête avec numéro et icône */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                  <i className={`${step.icon} text-2xl text-blue-600`}></i>
                </div>
              </div>

              {/* Titre et durée */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {step.duration}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {step.description}
              </p>
              
              {/* Livrables */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <i className="ri-gift-line text-green-500 mr-2"></i>
                  Livrables :
                </h4>
                <ul className="space-y-2">
                  {step.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverableIndex} className="flex items-start space-x-2">
                      <i className="ri-check-line text-green-500 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700 text-sm">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Section résumé avec timeline visuelle */}
        <div className={`bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Durée Totale du Processus : 
            <span className="text-blue-600">20-45 jours</span>
          </h3>
          
          {/* Timeline horizontale simplifiée */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                  <span className="text-xs text-gray-600 mt-1 text-center max-w-20">
                    {step.title.split(' ')[0]}
                  </span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 mx-2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">99%</div>
              <div className="text-sm text-gray-600">Taux de Réussite</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">24h</div>
              <div className="text-sm text-gray-600">Temps de Réponse</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">200+</div>
              <div className="text-sm text-gray-600">Projets Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">15%</div>
              <div className="text-sm text-gray-600">Économies Moyennes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
