
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: 'ri-search-line',
      title: 'Sourcing & Négociation',
      description: 'Recherche et sélection des meilleurs fournisseurs chinois selon vos critères spécifiques.',
      features: ['Identification fournisseurs', 'Négociation prix', 'Audit usines', 'Échantillonnage'],
      color: 'blue',
      delay: 0
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Contrôle Qualité',
      description: 'Inspection rigoureuse et certification de vos produits avant expédition.',
      features: ['Inspection pré-production', 'Contrôle en cours', 'Test final', 'Certification'],
      color: 'green',
      delay: 200
    },
    {
      icon: 'ri-truck-line',
      title: 'Logistique Internationale',
      description: 'Transport maritime, aérien et ferroviaire avec suivi en temps réel.',
      features: ['Fret multimodal', 'Dédouanement', 'Assurance transport', 'Suivi GPS'],
      color: 'purple',
      delay: 400
    },
    {
      icon: 'ri-store-line',
      title: 'Gestion de Stock',
      description: 'Entreposage sécurisé et gestion optimisée de vos inventaires.',
      features: ['Stockage sécurisé', 'Gestion inventaire', 'Réapprovisionnement', 'Distribution'],
      color: 'orange',
      delay: 600
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
            <span className="block text-blue-600 animate-text-shimmer bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-300% animate-shimmer">
              Complets & Professionnels
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services pour accompagner votre réussite 
            dans le commerce international avec la Chine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-3 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(service.color)} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="p-8 relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(service.color)} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500 ${hoveredCard === index ? 'animate-bounce-gentle' : ''}`}>
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className={`flex items-center text-sm text-gray-600 transition-all duration-300 ${
                        hoveredCard === index ? 'translate-x-2' : ''
                      }`}
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300"
                >
                  <span className="animate-text-slide">En savoir plus</span>
                  <i className={`ri-arrow-right-line ml-2 transition-transform duration-300 ${
                    hoveredCard === index ? 'translate-x-2' : ''
                  }`}></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link 
            to="/services"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-button cursor-pointer whitespace-nowrap"
          >
            <i className="ri-service-line mr-2"></i>
            Découvrir Tous nos Services
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
