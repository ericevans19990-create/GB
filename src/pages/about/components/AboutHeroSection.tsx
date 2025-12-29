
import { useEffect, useState } from 'react';

export default function AboutHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const animatedTexts = [
    'Votre Partenaire de Confiance',
    'Excellence & Innovation',
    'Qualité Garantie'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero.jpg')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              À Propos de
            </h1>
            <div className="text-6xl md:text-7xl font-bold mb-6 min-h-[1.2em]">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                GLORYS BUSINESS
              </span>
            </div>
            <div className="text-3xl md:text-4xl font-semibold text-yellow-300 min-h-[1.5em] animate-bounce">
              {animatedTexts[textIndex]}
            </div>
          </div>
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Votre partenaire de confiance depuis 2023 dans le sourcing en Chine, 
            le contrôle qualité et la logistique internationale. Une entreprise jeune et dynamique 
            qui révolutionne les échanges commerciaux.
          </p>
          <div className={`flex justify-center space-x-8 mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">2+</div>
              <div className="text-sm text-gray-300">Années d'Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">200+</div>
              <div className="text-sm text-gray-300">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">25+</div>
              <div className="text-sm text-gray-300">Pays Desservis</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
