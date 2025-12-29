
import { useEffect, useState } from 'react';

export default function WhyChooseSection() {
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

    const element = document.getElementById('pourquoi-nous');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      icon: 'ri-map-pin-line',
      title: 'Présence Locale',
      description: 'Équipes basées en Chine pour une proximité directe avec les fournisseurs'
    },
    {
      icon: 'ri-translate-line',
      title: 'Expertise Bilingue',
      description: 'Communication fluide en chinois, français et anglais'
    },
    {
      icon: 'ri-time-line',
      title: 'Réactivité 24/7',
      description: 'Support disponible dans tous les fuseaux horaires'
    },
    {
      icon: 'ri-shield-star-line',
      title: 'Qualité Garantie',
      description: 'Processus de contrôle rigoureux et certifications internationales'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Tarifs Compétitifs',
      description: 'Négociation directe pour les meilleurs prix du marché'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Innovation Continue',
      description: 'Veille technologique et identification des dernières tendances'
    }
  ];

  return (
    <section id="pourquoi-nous" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi Choisir Glorys Business ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre expertise unique et notre approche personnalisée font de nous 
            le partenaire idéal pour votre réussite en Chine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <i className={`${advantage.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {advantage.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`bg-white rounded-2xl p-8 shadow-xl transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Processus Éprouvé
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Analyse de vos besoins</h4>
                    <p className="text-gray-600">Étude approfondie de vos spécifications et contraintes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sourcing et sélection</h4>
                    <p className="text-gray-600">Identification des fournisseurs les plus adaptés</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contrôle qualité</h4>
                    <p className="text-gray-600">Inspections rigoureuses avant expédition</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Livraison sécurisée</h4>
                    <p className="text-gray-600">Gestion complète de la logistique internationale</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/images/blog-thumb.jpg"
                alt="Notre processus"
                className="rounded-xl shadow-lg object-cover w-full h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
