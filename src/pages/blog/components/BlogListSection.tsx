
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogListSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [visibleArticles, setVisibleArticles] = useState(8); // Nombre d'articles visibles initialement
  const [isLoading, setIsLoading] = useState(false);
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

    const element = document.getElementById('blog-list');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const categories = ['Tous', 'Réglementation', 'Innovation', 'Durabilité', 'Logistique', 'Sourcing', 'Économie'];

  const allBlogPosts = [
    {
      title: 'Nouvelles Réglementations Douanières UE-Chine 2025',
      excerpt: 'Découvrez les dernières modifications des accords commerciaux entre l\'Union Européenne et la Chine, et leur impact sur vos importations en 2025. Analyse détaillée des nouvelles procédures et conseils pratiques.',
      date: '12 Janvier 2025',
      category: 'Réglementation',
        image: '/images/blog-thumb.jpg',
      readTime: '6 min',
      author: 'Marie Dubois',
      featured: true,
      slug: 'nouvelles-reglementations-douanieres-ue-chine-2025'
    },
    {
      title: 'Intelligence Artificielle dans la Logistique : Révolution 2025',
      excerpt: 'Comment l\'IA transforme la chaîne d\'approvisionnement internationale et optimise les coûts de transport entre la Chine et l\'Europe. Cas d\'usage concrets et ROI mesurable.',
      date: '8 Janvier 2025',
      category: 'Innovation',
        image: '/images/blog-thumb.jpg',
      readTime: '8 min',
      author: 'Thomas Chen',
      featured: true,
      slug: 'intelligence-artificielle-logistique-revolution-2025'
    },
    {
      title: 'Sourcing Durable : Les Nouvelles Exigences ESG 2025',
      excerpt: 'Les critères environnementaux, sociaux et de gouvernance deviennent incontournables. Guide complet pour un sourcing responsable en Chine avec checklist pratique.',
      date: '3 Janvier 2025',
      category: 'Durabilité',
        image: '/images/blog-thumb.jpg',
      readTime: '7 min',
      author: 'Sophie Martin',
      featured: true,
      slug: 'sourcing-durable-exigences-esg-2025'
    },
    {
      title: 'Optimisation des Coûts Logistiques : Stratégies 2025',
      excerpt: 'Nouvelles approches pour réduire vos coûts de transport maritime et aérien. Analyse comparative des routes commerciales et négociation avec les transporteurs.',
      date: '28 Décembre 2024',
      category: 'Logistique',
        image: '/images/blog-thumb.jpg',
      readTime: '5 min',
      author: 'Pierre Leroy',
      slug: 'optimisation-couts-logistiques-strategies-2025'
    },
    {
      title: 'Tendances du E-commerce Transfrontalier 2025',
      excerpt: 'Le marché du e-commerce entre la Chine et l\'Europe explose. Découvrez les opportunités, défis réglementaires et meilleures pratiques pour réussir.',
      date: '22 Décembre 2024',
      category: 'Économie',
        image: '/images/blog-thumb.jpg',
      readTime: '6 min',
      author: 'Liu Wei',
      slug: 'tendances-ecommerce-transfrontalier-2025'
    },
    {
      title: 'Contrôle Qualité : Nouvelles Normes Internationales',
      excerpt: 'Les standards de qualité évoluent rapidement. Guide pratique pour mettre en place un système de contrôle qualité efficace avec vos fournisseurs chinois.',
      date: '18 Décembre 2024',
      category: 'Sourcing',
        image: '/images/blog-thumb.jpg',
      readTime: '9 min',
      author: 'Marie Dubois',
      slug: 'controle-qualite-normes-internationales'
    },
    {
      title: 'Blockchain dans le Commerce International',
      excerpt: 'La technologie blockchain révolutionne la traçabilité et la sécurité des transactions commerciales. Cas d\'usage pratiques et implémentation.',
      date: '15 Décembre 2024',
      category: 'Innovation',
        image: '/images/blog-thumb.jpg',
      readTime: '7 min',
      author: 'Thomas Chen',
      slug: 'blockchain-commerce-international'
    },
    {
      title: 'Impact du Changement Climatique sur les Routes Commerciales',
      excerpt: 'Comment les changements climatiques affectent les routes commerciales traditionnelles et quelles alternatives développer pour maintenir vos approvisionnements.',
      date: '10 Décembre 2024',
      category: 'Durabilité',
        image: '/images/blog-thumb.jpg',
      readTime: '8 min',
      author: 'Sophie Martin',
      slug: 'changement-climatique-routes-commerciales'
    },
    // Articles supplémentaires pour la pagination
    {
      title: 'Négociation avec les Fournisseurs Chinois : Guide Complet 2025',
      excerpt: 'Maîtrisez l\'art de la négociation commerciale en Chine. Techniques éprouvées, pièges à éviter et stratégies gagnantes pour obtenir les meilleurs prix et conditions.',
      date: '5 Décembre 2024',
      category: 'Sourcing',
        image: '/images/blog-thumb.jpg',
      readTime: '10 min',
      author: 'Pierre Leroy',
      slug: 'negociation-fournisseurs-chinois-guide-2025'
    },
    {
      title: 'Certification CE : Procédures Simplifiées pour l\'Import Chine',
      excerpt: 'Tout ce qu\'il faut savoir sur la certification CE pour vos produits importés de Chine. Processus, coûts, délais et organismes notifiés.',
      date: '1 Décembre 2024',
      category: 'Réglementation',
        image: '/images/blog-thumb.jpg',
      readTime: '6 min',
      author: 'Marie Dubois',
      slug: 'certification-ce-procedures-import-chine'
    },
    {
      title: 'Financement du Commerce International : Solutions 2025',
      excerpt: 'Découvrez les nouvelles solutions de financement pour vos importations. Crédit documentaire, affacturage export et fintech spécialisées.',
      date: '28 Novembre 2024',
      category: 'Économie',
        image: '/images/blog-thumb.jpg',
      readTime: '8 min',
      author: 'Liu Wei',
      slug: 'financement-commerce-international-solutions-2025'
    },
    {
      title: 'Robots et Automatisation : L\'Avenir des Usines Chinoises',
      excerpt: 'L\'industrie manufacturière chinoise se robotise à grande vitesse. Impact sur la qualité, les coûts et les délais de production pour vos commandes.',
      date: '25 Novembre 2024',
      category: 'Innovation',
        image: '/images/blog-thumb.jpg',
      readTime: '7 min',
      author: 'Thomas Chen',
      slug: 'robots-automatisation-usines-chinoises'
    }
  ];

  const filteredPosts = selectedCategory === 'Tous' 
    ? allBlogPosts 
    : allBlogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = allBlogPosts.filter(post => post.featured);
  const regularPosts = allBlogPosts.filter(post => !post.featured);
  const displayedPosts = filteredPosts.slice(0, visibleArticles);
  const hasMoreArticles = visibleArticles < filteredPosts.length;

  const handleArticleClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    
    // Simulation d'un délai de chargement pour une meilleure UX
    setTimeout(() => {
      setVisibleArticles(prev => prev + 6);
      setIsLoading(false);
    }, 800);
  };

  // Réinitialiser le nombre d'articles visibles quand la catégorie change
  useEffect(() => {
    setVisibleArticles(8);
  }, [selectedCategory]);

  return (
    <section id="blog-list" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Featured Posts */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Articles à la Une</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos analyses les plus récentes et les plus importantes pour votre business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article 
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => handleArticleClick(post.slug)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      À la Une
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <i className="ri-calendar-line mr-2"></i>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <i className="ri-time-line mr-1"></i>
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <i className="ri-user-line mr-1"></i>
                    <span>{post.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                    <span>Lire l'article</span>
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Posts Grid */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tous nos Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {selectedCategory === 'Tous' 
                ? `Explorez l'ensemble de nos publications (${filteredPosts.length} articles)`
                : `Articles dans la catégorie "${selectedCategory}" (${filteredPosts.length} articles)`
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, index) => (
              <article 
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 3) * 50}ms` }}
                onClick={() => handleArticleClick(post.slug || 'nouvelles-reglementations-douanieres-ue-chine-2025')}
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
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        À la Une
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <i className="ri-calendar-line mr-2"></i>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <i className="ri-time-line mr-1"></i>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="ri-user-line mr-1"></i>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                      <span>Lire</span>
                      <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {hasMoreArticles && (
          <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={handleLoadMore}
              disabled={isLoading}
              className={`bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <>
                  <i className="ri-loader-4-line mr-2 animate-spin"></i>
                  Chargement...
                </>
              ) : (
                <>
                  <i className="ri-add-line mr-2"></i>
                  Charger plus d'articles ({filteredPosts.length - visibleArticles} restants)
                </>
              )}
            </button>
          </div>
        )}

        {/* Message when all articles are loaded */}
        {!hasMoreArticles && filteredPosts.length > 8 && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-green-50 text-green-700 rounded-lg">
              <i className="ri-check-line mr-2"></i>
              <span className="font-medium">Tous les articles ont été chargés !</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
