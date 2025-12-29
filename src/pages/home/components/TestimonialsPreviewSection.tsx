
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function TestimonialsPreviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials-preview');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const featuredTestimonials = [
    {
      name: "Marie Dubois",
      company: "TechnoFrance SAS",
      position: "Directrice des Achats",
      rating: 5,
      text: "GLORYS BUSINESS a révolutionné notre chaîne d'approvisionnement. Leur expertise nous a permis de réduire nos coûts de 30% tout en améliorant la qualité.",
      image: "/images/team-1.jpg"
    },
    {
      name: "Jean-Pierre Martin",
      company: "EuroDesign SARL",
      position: "PDG",
      rating: 5,
      text: "Grâce à GLORYS BUSINESS, nous avons trouvé des fournisseurs fiables en Chine. Leur service de contrôle qualité est exceptionnel.",
      image: "/images/team-2.jpg"
    },
    {
      name: "Sophie Leroy",
      company: "BioCosmetics France",
      position: "Responsable Supply Chain",
      rating: 5,
      text: "L'accompagnement dans nos importations de cosmétiques a été parfait. Ils maîtrisent les réglementations européennes.",
      image: "/images/team-3.jpg"
    }
  ];

  return (
    <section id="testimonials-preview" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui ont transformé 
            leur chaîne d'approvisionnement grâce à notre expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.position}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-7

00 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.9/5</div>
                <div className="text-gray-600">Note moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600">Pays desservis</div>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => window.REACT_APP_NAVIGATE('/testimonials')}
                className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-chat-quote-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                Voir tous les témoignages
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
