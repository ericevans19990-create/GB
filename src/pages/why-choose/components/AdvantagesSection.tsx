
import { useEffect, useState } from 'react';

export default function AdvantagesSection() {
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

    const element = document.getElementById('advantages-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      icon: 'ri-map-pin-line',
      title: 'Présence Locale Stratégique',
      description: 'Nos équipes basées à Shanghai, Guangzhou et Shenzhen vous offrent une proximité directe avec les principaux centres industriels chinois.',
      benefits: ['Visites d\'usines régulières', 'Relations privilégiées avec les fournisseurs', 'Réactivité immédiate']
    },
    {
      icon: 'ri-translate-line',
      title: 'Expertise Linguistique Trilingue',
      description: 'Communication parfaite en chinois mandarin, français et anglais pour éliminer toute barrière linguistique.',
      benefits: ['Négociations directes', 'Traductions techniques précises', 'Support client multilingue']
    },
    {
      icon: 'ri-time-line',
      title: 'Disponibilité 24/7',
      description: 'Service client disponible dans tous les fuseaux horaires pour un suivi continu de vos projets.',
      benefits: ['Support d\'urgence', 'Suivi en temps réel', 'Coordination internationale']
    },
    {
      icon: 'ri-shield-star-line',
      title: 'Contrôle Qualité Rigoureux',
      description: 'Processus de vérification en 12 étapes avec certifications ISO 9001 et inspections sur site.',
      benefits: ['Inspections pré-production', 'Tests de conformité', 'Rapports détaillés']
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Optimisation des Coûts',
      description: 'Négociation directe avec les fabricants pour obtenir les meilleurs tarifs sans intermédiaires.',
      benefits: ['Économies jusqu\'à 30%', 'Transparence tarifaire', 'Conditions de paiement flexibles']
    },
    {
      icon: 'ri-rocket-line',
      title: 'Innovation et Veille Technologique',
      description: 'Identification proactive des dernières innovations et tendances du marché chinois.',
      benefits: ['Accès aux nouveautés', 'Conseils stratégiques', 'Opportunités d\'investissement']
    }
  ];

  return (
    <section id="advantages-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Avantages Concurrentiels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six piliers fondamentaux qui garantissent votre succès et nous distinguent 
            de la concurrence sur le marché chinois.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className={`${advantage.icon} text-white text-2xl`}></i>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {advantage.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {advantage.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-500 text-lg"></i>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
