
import { useEffect, useState } from 'react';

export default function PrivacyHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero.jpg')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Politique de
            </h1>
            <div className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Confidentialité
              </span>
            </div>
          </div>
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Votre vie privée est importante pour nous. Découvrez comment nous collectons, 
            utilisons et protégeons vos données personnelles.
          </p>
          <div className={`text-lg text-blue-200 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Dernière mise à jour : 15 janvier 2024
          </div>
        </div>
      </div>
    </section>
  );
}
