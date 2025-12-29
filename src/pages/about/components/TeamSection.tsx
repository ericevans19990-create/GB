
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TeamSection() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleMembers, setVisibleMembers] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animer les membres un par un
          [0, 1, 2, 3, 4, 5].forEach((index) => {
            setTimeout(() => {
              setVisibleMembers(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('equipe');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleContactClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const teamMembers = [
    {
      name: 'Alexandre Martin',
      role: 'CEO & Fondateur',
      description: 'Expert en commerce international avec 8 ans d\'expérience en Asie. Visionnaire de la digitalisation des échanges commerciaux.',
      image: '/images/team-1.jpg',
      linkedin: '#',
      email: 'alexandre@glorys-business.com',
      specialties: ['Stratégie', 'Leadership', 'Innovation']
    },
    {
      name: 'Sophie Chen',
      role: 'Directrice Sourcing Chine',
      description: 'Bilingue français-mandarin, elle supervise nos relations fournisseurs et garantit la qualité de notre réseau en Chine.',
      image: '/images/team-2.jpg',
      linkedin: '#',
      email: 'sophie@glorys-business.com',
      specialties: ['Sourcing', 'Négociation', 'Mandarin']
    },
    {
      name: 'Thomas Dubois',
      role: 'Responsable Qualité',
      description: 'Ingénieur qualité certifié, il développe nos protocoles de contrôle et assure la conformité de tous nos produits.',
      image: '/images/team-3.jpg',
      linkedin: '#',
      email: 'thomas@glorys-business.com',
      specialties: ['Contrôle Qualité', 'Certification', 'Audit']
    },
    {
      name: 'Marie Leroy',
      role: 'Directrice Logistique',
      description: 'Spécialiste en supply chain internationale, elle optimise nos flux logistiques et coordonne les livraisons mondiales.',
      image: '/images/team-1.jpg',
      linkedin: '#',
      email: 'marie@glorys-business.com',
      specialties: ['Logistique', 'Supply Chain', 'Transport']
    },
    {
      name: 'Lucas Bernard',
      role: 'Développeur Tech',
      description: 'Expert en développement web et IA, il conçoit nos outils digitaux et notre plateforme de suivi en temps réel.',
      image: '/images/team-2.jpg',
      linkedin: '#',
      email: 'lucas@glorys-business.com',
      specialties: ['Développement', 'IA', 'Digital']
    },
    {
      name: 'Emma Rodriguez',
      role: 'Responsable Client',
      description: 'Polyglotte passionnée, elle accompagne nos clients dans leurs projets et assure un service personnalisé d\'excellence.',
      image: '/images/team-3.jpg',
      linkedin: '#',
      email: 'emma@glorys-business.com',
      specialties: ['Relation Client', 'Communication', 'Multilingue']
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Notre 
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Équipe
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe jeune, dynamique et experte qui met son savoir-faire 
            au service de votre réussite internationale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                visibleMembers.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
                      >
                        <i className="ri-linkedin-fill text-lg"></i>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                      >
                        <i className="ri-mail-line text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-blue-600 font-semibold mb-4 text-lg">
                    {member.role}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {member.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section culture d'entreprise */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Rejoignez Notre 
              <span className="text-blue-600">Aventure</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              GLORYS BUSINESS recrute ! Nous recherchons des talents passionnés 
              pour accompagner notre croissance et révolutionner le commerce international.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Esprit d'Équipe</h4>
                <p className="text-gray-600">Collaboration et entraide au quotidien</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-rocket-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600">Technologies de pointe et créativité</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-trophy-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-600">Dépassement de soi et qualité</p>
              </div>
            </div>
            <button 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-mail-send-line mr-2"></i>
              Nous Contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
