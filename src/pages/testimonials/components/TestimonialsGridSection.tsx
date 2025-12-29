
const TestimonialsGridSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      position: "Directrice Générale",
      company: "TechnoFrance SAS",
      location: "Paris, France",
      image: "/images/services.jpg",
      rating: 5,
      text: "Grâce à leur expertise, nous avons pu développer notre activité d'import de composants électroniques d'Asie. Leur accompagnement personnalisé et leur connaissance des réglementations nous ont fait économiser des mois de démarches. Un service exceptionnel !",
      project: "Import de composants électroniques",
      savings: "30% d'économies"
    },
    {
      name: "Jean-Pierre Martin",
      position: "Fondateur",
      company: "Gourmet Import",
      location: "Lyon, France",
      image: "/images/services.jpg",
      rating: 5,
      text: "L'équipe nous a accompagnés dans l'import de produits gastronomiques italiens. Leur réseau de fournisseurs et leur maîtrise des certifications alimentaires ont été déterminants pour le succès de notre entreprise. Résultats au-delà de nos espérances !",
      project: "Import produits gastronomiques",
      savings: "25% de réduction des coûts"
    },
    {
      name: "Sophie Leroy",
      position: "Responsable Achats",
      company: "Mode & Style",
      location: "Marseille, France",
      image: "/images/services.jpg",
      rating: 5,
      text: "Pour notre collection de vêtements, ils ont négocié des conditions exceptionnelles avec nos fournisseurs asiatiques. Leur expertise en logistique nous a permis de réduire nos délais de livraison de 40%. Un partenariat gagnant-gagnant !",
      project: "Import textile et mode",
      savings: "40% de délais réduits"
    },
    {
      name: "Ahmed Ben Ali",
      position: "Directeur Export",
      company: "Maghreb Trade",
      location: "Casablanca, Maroc",
      image: "/images/services.jpg",
      rating: 5,
      text: "Leur accompagnement pour l'export de nos produits artisanaux vers l'Europe a été remarquable. Ils ont géré toute la complexité administrative et douanière. Grâce à eux, notre chiffre d'affaires export a triplé en 18 mois !",
      project: "Export produits artisanaux",
      savings: "300% d'augmentation CA"
    },
    {
      name: "Carlos Rodriguez",
      position: "CEO",
      company: "Iberian Solutions",
      location: "Madrid, Espagne",
      image: "/images/services.jpg",
      rating: 5,
      text: "Nous cherchions à importer des machines industrielles de Chine. Leur expertise technique et leur réseau de contacts nous ont permis de trouver les meilleurs fournisseurs. Un service professionnel et des résultats concrets !",
      project: "Import machines industrielles",
      savings: "20% d'économies"
    },
    {
      name: "Anna Kowalski",
      position: "Directrice Commerciale",
      company: "Polish Furniture Co.",
      location: "Varsovie, Pologne",
      image: "/images/services.jpg",
      rating: 5,
      text: "L'export de nos meubles vers la France était un défi. Ils ont géré toute la logistique et les certifications nécessaires. Aujourd'hui, 60% de notre production est destinée au marché français. Un succès incroyable !",
      project: "Export mobilier",
      savings: "60% du CA à l'export"
    },
    {
      name: "Thomas Weber",
      position: "Directeur Technique",
      company: "German Engineering",
      location: "Munich, Allemagne",
      image: "/images/services.jpg",
      rating: 5,
      text: "Pour l'export de nos équipements de précision, nous avions besoin d'un partenaire fiable. Leur connaissance des marchés internationaux et leur rigueur allemande nous ont convaincus. Excellent travail !",
      project: "Export équipements de précision",
      savings: "35% nouveaux marchés"
    },
    {
      name: "Isabella Rossi",
      position: "Propriétaire",
      company: "Bella Italia Import",
      location: "Milan, Italie",
      image: "/images/services.jpg",
      rating: 5,
      text: "Ils nous ont aidés à exporter nos produits de luxe italiens vers l'Asie. Leur compréhension des cultures locales et leur réseau de distribution ont été essentiels. Nos ventes ont augmenté de 150% !",
      project: "Export produits de luxe",
      savings: "150% d'augmentation"
    },
    {
      name: "David Johnson",
      position: "Managing Director",
      company: "UK Trade Solutions",
      location: "Londres, Royaume-Uni",
      image: "/images/services.jpg",
      rating: 5,
      text: "Post-Brexit, nous avions besoin d'expertise pour maintenir nos échanges avec l'UE. Leur connaissance des nouvelles réglementations nous a été précieuse. Ils ont sauvé notre business !",
      project: "Adaptation post-Brexit",
      savings: "Maintien de 90% du CA"
    },
    {
      name: "Fatima Al-Zahra",
      position: "Directrice Développement",
      company: "Emirates Trading",
      location: "Dubaï, EAU",
      image: "/images/services.jpg",
      rating: 5,
      text: "Dubaï est un hub commercial majeur, mais naviguer dans les réglementations reste complexe. Leur expertise nous a permis d'optimiser nos flux logistiques vers l'Europe. Un partenariat stratégique !",
      project: "Optimisation logistique",
      savings: "45% de temps gagné"
    },
    {
      name: "Hiroshi Tanaka",
      position: "Export Manager",
      company: "Tokyo Precision",
      location: "Tokyo, Japon",
      image: "/images/services.jpg",
      rating: 5,
      text: "L'export de nos technologies vers l'Europe nécessitait une expertise particulière. Leur approche respectueuse de notre culture et leur efficacité nous ont impressionnés. Arigato gozaimasu !",
      project: "Export technologies",
      savings: "50% nouveaux clients"
    },
    {
      name: "Elena Petrov",
      position: "CEO",
      company: "Russian Resources",
      location: "Moscou, Russie",
      image: "/images/services.jpg",
      rating: 5,
      text: "Malgré le contexte géopolitique complexe, ils ont trouvé des solutions créatives pour maintenir nos échanges commerciaux légaux. Leur expertise juridique internationale est remarquable.",
      project: "Commerce international complexe",
      savings: "Maintien activité"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages authentiques de nos partenaires commerciaux du monde entier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-blue-600 font-medium">{testimonial.position}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  <p className="text-gray-400 text-xs flex items-center mt-1">
                    <i className="ri-map-pin-line mr-1"></i>
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              <div className="border-t pt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <i className="ri-briefcase-line text-blue-500 mr-2"></i>
                  <span className="text-gray-600">Projet: </span>
                  <span className="font-medium text-gray-900 ml-1">{testimonial.project}</span>
                </div>
                <div className="flex items-center text-sm">
                  <i className="ri-trending-up-line text-green-500 mr-2"></i>
                  <span className="text-gray-600">Résultat: </span>
                  <span className="font-medium text-green-600 ml-1">{testimonial.savings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Faites confiance à notre expertise pour développer votre activité d'import-export. 
              Plus de 500 entreprises nous font déjà confiance.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>
              Demander un Devis Gratuit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGridSection;
