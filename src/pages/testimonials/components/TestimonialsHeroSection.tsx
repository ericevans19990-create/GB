
const TestimonialsHeroSection = () => {
  return (
    <section 
      className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(67, 56, 202, 0.9)), url('/images/hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Témoignages de nos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Clients Satisfaits
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Découvrez pourquoi plus de 500 entreprises nous font confiance pour leurs opérations d'import-export internationales
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-xl"></i>
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5</span>
            </div>
            <div className="flex items-center">
              <i className="ri-user-3-fill text-yellow-400 mr-2 text-xl"></i>
              <span className="text-lg">500+ Clients</span>
            </div>
            <div className="flex items-center">
              <i className="ri-global-line text-yellow-400 mr-2 text-xl"></i>
              <span className="text-lg">50+ Pays</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHeroSection;
