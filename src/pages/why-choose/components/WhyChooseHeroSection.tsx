
import { useEffect, useState } from 'react';

export default function WhyChooseHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAdvantages = () => {
    const advantagesSection = document.getElementById('advantages-section');
    if (advantagesSection) {
      advantagesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToComparison = () => {
    const comparisonSection = document.getElementById('comparison-section');
    if (comparisonSection) {
      comparisonSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero.jpg')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Pourquoi Choisir
            <span className="block text-blue-400">Glorys Business ?</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Découvrez les avantages uniques qui font de nous le partenaire idéal 
            pour votre réussite commerciale en Chine
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToAdvantages}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Découvrir nos avantages
            </button>
            <button 
              onClick={scrollToComparison}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Voir nos références
            </button>
          </div>
        </div>
        
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ Années d'Expérience</h3>
              <p className="text-gray-200">Expertise approfondie du marché chinois</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">500+ Clients Satisfaits</h3>
              <p className="text-gray-200">Partenaires dans le monde entier</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">99% Taux de Réussite</h3>
              <p className="text-gray-200">Projets menés à bien</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
