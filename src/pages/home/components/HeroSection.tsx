
import { useEffect, useState, useCallback } from 'react';
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Votre Partenaire Sourcing en Chine",
      subtitle: "Expertise complète en sourcing, contrôle qualité et logistique internationale",
      description: "Nous connectons votre entreprise aux meilleurs fournisseurs chinois avec une qualité garantie.",
      image: "/images/hero.jpg",
      cta: "Demander un Devis"
    },
    {
      title: "Contrôle Qualité Rigoureux",
      subtitle: "Standards internationaux pour vos importations",
      description: "Notre équipe d'experts effectue des contrôles qualité stricts selon les normes européennes les plus exigeantes.",
      image: "/images/hero.jpg",
      cta: "Nos Services Qualité"
    },
    {
      title: "Logistique Internationale Optimisée",
      subtitle: "Transport sécurisé vers l'Europe",
      description: "Solutions logistiques complètes avec suivi en temps réel et optimisation des coûts de transport.",
      image: "/images/hero.jpg",
      cta: "Solutions Logistiques"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToContact = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToServices = useCallback(() => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Slideshow Background: use <img> for crisp rendering and easier srcset support */}
      <img
        src={currentSlideData.image}
        alt={currentSlideData.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000"
        style={{
          zIndex: 0
        }}
      />
      {/* Gradient overlay to darken background (keeps text readable) */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3))', zIndex: 1 }} />

      <div className="container mx-auto px-4 text-center text-white relative z-20">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              {currentSlideData.title}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-blue-300 font-semibold">
            {currentSlideData.subtitle}
          </h2>
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {currentSlideData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer border-2 border-white"
            >
              <i className="ri-phone-line mr-2 w-5 h-5 flex items-center justify-center"></i>
              Demander un Devis
            </Button>
            <Button
              onClick={scrollToServices}
              className="border-2 border-white text-white hover:bg-blue-600 hover:text-white hover:border-blue-600 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-play-circle-line mr-2 w-5 h-5 flex items-center justify-center"></i>
              Découvrir nos Services
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <i className="ri-arrow-down-line text-white text-3xl w-8 h-8 flex items-center justify-center cursor-pointer"></i>
        </div>
      </div>
    </section>
  );
}
