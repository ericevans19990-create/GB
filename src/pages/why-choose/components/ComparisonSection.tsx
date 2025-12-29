
import { useEffect, useState } from 'react';

export default function ComparisonSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('comparison-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const comparisonData = [
    {
      criteria: 'Présence locale en Chine',
      sinosource: 'Équipes permanentes dans 3 villes',
      competitors: 'Partenaires locaux occasionnels',
      advantage: true
    },
    {
      criteria: 'Expertise linguistique',
      sinosource: 'Trilingue natif (CN/FR/EN)',
      competitors: 'Traducteurs externes',
      advantage: true
    },
    {
      criteria: 'Contrôle qualité',
      sinosource: 'Processus en 12 étapes certifié',
      competitors: 'Contrôles basiques',
      advantage: true
    },
    {
      criteria: 'Délais de réponse',
      sinosource: 'Moins de 2h en moyenne',
      competitors: '24-48h standard',
      advantage: true
    },
    {
      criteria: 'Transparence tarifaire',
      sinosource: 'Prix détaillés sans frais cachés',
      competitors: 'Marges opaques',
      advantage: true
    },
    {
      criteria: 'Support post-livraison',
      sinosource: 'Accompagnement permanent',
      competitors: 'Support limité',
      advantage: true
    },
    {
      criteria: 'Réseau de fournisseurs',
      sinosource: '2000+ partenaires vérifiés',
      competitors: 'Base limitée',
      advantage: true
    },
    {
      criteria: 'Certifications',
      sinosource: 'ISO 9001, CE, FDA approuvé',
      competitors: 'Certifications variables',
      advantage: true
    }
  ];

  return (
    <section id="comparison-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Glorys Business Services vs Concurrence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez pourquoi nos clients nous choisissent plutôt que nos concurrents. 
            Une comparaison objective basée sur des critères mesurables.
          </p>
        </div>

        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Critères de Comparaison</th>
                  <th className="px-6 py-4 text-center font-semibold">SinoSource Pro</th>
                  <th className="px-6 py-4 text-center font-semibold">Concurrents Traditionnels</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.criteria}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <i className="ri-check-line text-green-500 text-xl"></i>
                        <span className="text-gray-700 font-medium">{item.sinosource}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <i className="ri-close-line text-red-500 text-xl"></i>
                        <span className="text-gray-500">{item.competitors}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`mt-12 grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-trophy-line text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Leader du Marché</h3>
            <p className="text-gray-600">Reconnu comme référence dans le sourcing en Chine</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-customer-service-2-line text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Premium</h3>
            <p className="text-gray-600">Accompagnement personnalisé de A à Z</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Garantie Qualité</h3>
            <p className="text-gray-600">Engagement de résultat avec garantie satisfait ou remboursé</p>
          </div>
        </div>
      </div>
    </section>
  );
}
