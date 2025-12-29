
import { useEffect, useState } from 'react';
import { submitToApi } from '../../../lib/form';

export default function BlogSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('blog');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      alert('Veuillez saisir votre adresse email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Veuillez saisir une adresse email valide');
      return;
    }

    submitToApi('newsletter-home', { email })
      .then(() => {
        alert('Merci pour votre inscription ! Vous recevrez nos dernières actualités.');
        setEmail('');
      })
      .catch(() => {
        alert('Une erreur est survenue. Veuillez réessayer.');
      });
  };

  const blogPosts = [
    {
      title: 'Nouvelles Réglementations Douanières UE-Chine 2025',
      excerpt: 'Découvrez les dernières modifications des accords commerciaux entre l\'Union Européenne et la Chine, et leur impact sur vos importations en 2025.',
      date: '12 Janvier 2025',
      category: 'Réglementation',
      image: '/images/blog-thumb.jpg',
      readTime: '6 min'
    },
    {
      title: 'Intelligence Artificielle dans la Logistique : Révolution 2025',
      excerpt: 'Comment l\'IA transforme la chaîne d\'approvisionnement internationale et optimise les coûts de transport entre la Chine et l\'Europe.',
      date: '8 Janvier 2025',
      category: 'Innovation',
      image: '/images/blog-thumb.jpg',
      readTime: '8 min'
    },
    {
      title: 'Sourcing Durable : Les Nouvelles Exigences ESG 2025',
      excerpt: 'Les critères environnementaux, sociaux et de gouvernance deviennent incontournables. Guide complet pour un sourcing responsable en Chine.',
      date: '3 Janvier 2025',
      category: 'Durabilité',
      image: '/images/blog-thumb.jpg',
      readTime: '7 min'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blog & Actualités
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières tendances du commerce international, 
            des évolutions réglementaires et de nos conseils d'experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <i className="ri-calendar-line mr-2"></i>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <i className="ri-time-line mr-1"></i>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                  <span>Lire la suite</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Restez Informé de Nos Actualités
            </h3>
            <p className="text-blue-100 mb-6">
              Recevez chaque semaine nos analyses du marché chinois, conseils d'experts 
              et actualités du commerce international directement dans votre boîte mail.
            </p>
            
            <form 
              id="newsletter-form"
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input 
                type="email" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button 
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-mail-send-line mr-2"></i>
                S'abonner
              </button>
            </form>
            
            <p className="text-blue-200 text-sm mt-4">
              Pas de spam, désabonnement possible à tout moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
