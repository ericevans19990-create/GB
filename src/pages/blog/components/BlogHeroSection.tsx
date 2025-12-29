
import { useEffect, useState } from 'react';

export default function BlogHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <i className="ri-article-line text-blue-300 mr-2"></i>
            <span className="text-blue-200 font-medium">Blog & Actualités</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Expertise & Insights
            <span className="block text-blue-300">Commerce International</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Découvrez nos analyses approfondies, conseils d'experts et dernières actualités 
            du commerce sino-européen. Restez à la pointe des tendances du marché international.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-blue-200">
              <i className="ri-calendar-line mr-2"></i>
              <span>Mis à jour quotidiennement</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-blue-300 rounded-full"></div>
            <div className="flex items-center text-blue-200">
              <i className="ri-user-line mr-2"></i>
              <span>Par nos experts</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-blue-300 rounded-full"></div>
            <div className="flex items-center text-blue-200">
              <i className="ri-global-line mr-2"></i>
              <span>Perspective internationale</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
