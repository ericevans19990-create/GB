
import { useEffect, useState } from 'react';

export default function CompanyHistorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animer les jalons un par un
          const milestones = [0, 1, 2, 3, 4];
          milestones.forEach((index) => {
            setTimeout(() => {
              setVisibleMilestones(prev => [...prev, index]);
            }, index * 400);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('histoire');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: '2023',
      title: 'Création de GLORYS BUSINESS',
      description: 'Fondation de l\'entreprise avec une vision révolutionnaire : digitaliser et simplifier les échanges commerciaux entre l\'Europe et la Chine grâce aux nouvelles technologies.',
      icon: 'ri-rocket-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2023',
      period: 'Q3',
      title: 'Premiers Partenariats Stratégiques',
      description: 'Établissement de relations privilégiées avec plus de 50 fournisseurs certifiés en Chine et mise en place de notre réseau de contrôle qualité.',
      icon: 'ri-handshake-line',
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2024',
      period: 'Q1',
      title: 'Lancement de la Plateforme Digitale',
      description: 'Développement et lancement de notre plateforme de suivi en temps réel, permettant une transparence totale sur vos commandes et livraisons.',
      icon: 'ri-computer-line',
      color: 'from-purple-500 to-violet-500'
    },
    {
      year: '2024',
      period: 'Q3',
      title: 'Expansion Internationale',
      description: 'Ouverture de nos services à plus de 25 pays européens et développement de solutions logistiques personnalisées pour chaque marché.',
      icon: 'ri-global-line',
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2025',
      title: 'Innovation & Croissance',
      description: 'Intégration de l\'intelligence artificielle dans nos processus de sourcing et de contrôle qualité. Plus de 200 clients actifs nous font confiance.',
      icon: 'ri-brain-line',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="histoire" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Notre 
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Parcours
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une croissance rapide et une innovation constante depuis notre création en 2023.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-400 h-full rounded-full"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} transition-all duration-1000 ${
                  visibleMilestones.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`w-full max-w-lg ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                    <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-6`}>
                      <div className={`w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <i className={`${milestone.icon} text-white text-2xl`}></i>
                      </div>
                      <div>
                        <span className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          {milestone.year}
                        </span>
                        {milestone.period && (
                          <div className="text-sm text-gray-500 font-medium">{milestone.period}</div>
                        )}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${milestone.color} rounded-full border-4 border-white shadow-xl transition-all duration-500 ${
                  visibleMilestones.includes(index) ? 'scale-100' : 'scale-0'
                } animate-pulse`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Section statistiques */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Nos Réalisations en 
              <span className="text-blue-600">2 Ans</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600">Clients Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600">Commandes Traitées</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600">Pays Desservis</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
                <div className="text-gray-600">Taux de Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
