
import { useEffect, useState } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    countries: 0,
    quality: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('a-propos');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    const targets = { years: 10, clients: 500, countries: 50, quality: 99.8 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: key === 'quality' ? Number(current.toFixed(1)) : Math.floor(current)
        }));
      }, stepDuration);
    });
  };

  return (
    <section id="a-propos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              À Propos de 
              <span className="text-blue-600 animate-text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-300% animate-gradient">
                GLORYS BUSINESS
              </span>
            </h2>
            <p className={`text-lg text-gray-700 mb-6 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Depuis plus de 10 ans, nous sommes votre partenaire de confiance pour le sourcing en Chine. 
              Notre équipe d'experts bilingues basée à Shanghai et Guangzhou vous accompagne dans toutes 
              les étapes de votre chaîne d'approvisionnement.
            </p>
            <p className={`text-lg text-gray-700 mb-8 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Nous combinons une connaissance approfondie du marché chinois avec des standards 
              internationaux de qualité pour vous garantir des résultats exceptionnels.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className={`flex items-center space-x-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center animate-pulse-soft">
                  <i className="ri-award-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-2xl animate-count-up">
                    {counters.years}+ Années
                  </h4>
                  <p className="text-gray-600">d'expérience</p>
                </div>
              </div>
              
              <div className={`flex items-center space-x-3 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center animate-pulse-soft">
                  <i className="ri-team-line text-green-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-2xl animate-count-up">
                    {counters.clients}+ Clients
                  </h4>
                  <p className="text-gray-600">satisfaits</p>
                </div>
              </div>
              
              <div className={`flex items-center space-x-3 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center animate-pulse-soft">
                  <i className="ri-global-line text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-2xl animate-count-up">
                    {counters.countries}+ Pays
                  </h4>
                  <p className="text-gray-600">desservis</p>
                </div>
              </div>
              
              <div className={`flex items-center space-x-3 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center animate-pulse-soft">
                  <i className="ri-shield-check-line text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-2xl animate-count-up">
                    {counters.quality}%
                  </h4>
                  <p className="text-gray-600">taux de qualité</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <img 
              src="/images/hero.jpg"
              alt="Notre équipe professionnelle"
              className="rounded-2xl shadow-2xl object-cover w-full h-96 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
