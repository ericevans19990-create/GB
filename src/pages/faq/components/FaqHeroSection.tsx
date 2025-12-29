
import { useEffect, useState } from 'react';

export default function FaqHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero.jpg')`
      }}
    >
      <div className="container mx-auto px-6 text-center pt-32 pb-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Questions
            <span className="block text-blue-400">Fréquentes</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white">
            Trouvez rapidement les réponses à vos questions sur nos services de sourcing, logistique et commerce international.
          </p>
        </div>
      </div>
    </section>
  );
}
