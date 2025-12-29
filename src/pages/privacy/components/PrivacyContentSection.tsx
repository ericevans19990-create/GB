
import { useEffect, useState } from 'react';

export default function PrivacyContentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: 'ri-information-line'
    },
    {
      id: 'donnees-collectees',
      title: 'Données collectées',
      icon: 'ri-database-2-line'
    },
    {
      id: 'utilisation',
      title: 'Utilisation des données',
      icon: 'ri-settings-3-line'
    },
    {
      id: 'partage',
      title: 'Partage des données',
      icon: 'ri-share-line'
    },
    {
      id: 'securite',
      title: 'Sécurité',
      icon: 'ri-shield-check-line'
    },
    {
      id: 'droits',
      title: 'Vos droits',
      icon: 'ri-user-settings-line'
    },
    {
      id: 'cookies',
      title: 'Cookies',
      icon: 'ri-cookie-line'
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: 'ri-mail-line'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Navigation latérale */}
          <div className="lg:w-1/4">
            <div className={`sticky top-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Sommaire</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center space-x-3 ${
                        activeSection === section.id
                          ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-600'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <i className={`${section.icon} text-lg`}></i>
                      <span className="font-medium">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:w-3/4">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Introduction */}
              <div id="introduction" className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <i className="ri-information-line text-white text-xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Introduction</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    GLORYS BUSINESS DEVELOPMENT AND SERVICES (ci-après "nous", "notre" ou "la société") 
                    s'engage à protéger et respecter votre vie privée. Cette politique de confidentialité 
                    explique comment nous collectons, utilisons, stockons et protégeons vos informations 
                    personnelles lorsque vous utilisez nos services.
                  </p>
                  <p>
                    En utilisant nos services, vous acceptez les pratiques décrites dans cette politique. 
                    Si vous n'acceptez pas cette politique, veuillez ne pas utiliser nos services.
                  </p>
                </div>
              </div>

              {/* Données collectées */}
              <div id="donnees-collectees" className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <i className="ri-database-2-line text-white text-xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Données que nous collectons</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Informations que vous nous fournissez</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Nom, prénom et coordonnées (email, téléphone, adresse)</li>
                      <li>Informations sur votre entreprise</li>
                      <li>Détails de vos demandes et projets</li>
                      <li>Communications avec notre équipe</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Informations collectées automatiquement</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Adresse IP et données de géolocalisation</li>
                      <li>Type de navigateur et système d'exploitation</li>
                      <li>Pages visitées et temps passé sur le site</li>
                      <li>Cookies et technologies similaires</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Utilisation des données */}
              <div id="utilisation" className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <i className="ri-settings-3-line text-white text-xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Comment nous utilisons vos données</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Services principaux</h3>
                    <ul className="text-blue-700 space-y-2">
                      <li>• Traitement de vos demandes</li>
                      <li>• Fourniture de nos services</li>
                      <li>• Communication avec vous</li>
                      <li>• Support client</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Amélioration</h3>
                    <ul className="text-green-700 space-y-2">
                      <li>• Analyse de l'utilisation</li>
                      <li>• Amélioration des services</li>
                      <li>• Personnalisation</li>
                      <li>• Recherche et développement</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Partage des données */}
              <div id="partage" className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <i className="ri-share-line text-white text-xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Partage de vos données</h2>
                </div>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations 
                    uniquement dans les cas suivants :
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <ul className="space-y-2">
                      <li><strong>Partenaires de confiance :</strong> Fournisseurs nécessaires à la prestation de nos services</li>
                      <li><strong>Obligations légales :</strong> Lorsque la loi l'exige</li>
                      <li><strong>Protection :</strong> Pour protéger nos droits ou ceux de tiers</li>
                      <li><strong>Avec votre consentement :</strong> Dans tous les autres cas</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sécurité */}
              <div id="securite" className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <i className="ri-shield-check-line text-white text-xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Sécurité de vos données</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-lock-line text-white text-2xl"></i>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Chiffrement</h3>
                    <p className="text-gray-600 text-sm">Toutes les données sont chiffrées en transit et au repos</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-server-line text-white text-2xl"></i>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Serveurs sécurisés</h3>
                    <p className="text-gray-600 text-sm">Hébergement sur des serveurs certifiés et surveillés 24h/24</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-team-line text-white text-2xl"></i>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Accès limité</h3>
                    <p className="text-gray-600 text-sm">Seul le personnel autorisé peut accéder à vos données</p>
                  </div>
                </div>
              </div>

              {/* Vos droits */}
              <div id="droits" className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <i className="ri-user-settings-line text-white text-xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Vos droits</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <i className="ri-eye-line text-blue-500 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Droit d'accès</h3>
                        <p className="text-gray-600 text-sm">Consulter les données que nous détenons sur vous</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-edit-line text-green-500 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Droit de rectification</h3>
                        <p className="text-gray-600 text-sm">Corriger ou mettre à jour vos informations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-delete-bin-line text-red-500 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Droit à l'effacement</h3>
                        <p className="text-gray-600 text-sm">Demander la suppression de vos données</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <i className="ri-download-line text-purple-500 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Droit à la portabilité</h3>
                        <p className="text-gray-600 text-sm">Récupérer vos données dans un format lisible</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-stop-line text-orange-500 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Droit d'opposition</h3>
                        <p className="text-gray-600 text-sm">Vous opposer au traitement de vos données</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-pause-line text-indigo-500 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Droit à la limitation</h3>
                        <p className="text-gray-600 text-sm">Limiter le traitement de vos données</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div id="cookies" className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <i className="ri-cookie-line text-white text-xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Politique des cookies</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
                    Les cookies sont de petits fichiers stockés sur votre appareil.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-2">Cookies essentiels</h3>
                      <p className="text-blue-700 text-sm">Nécessaires au fonctionnement du site</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="font-semibold text-green-900 mb-2">Cookies analytiques</h3>
                      <p className="text-green-700 text-sm">Pour comprendre l'utilisation du site</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h3 className="font-semibold text-purple-900 mb-2">Cookies marketing</h3>
                      <p className="text-purple-700 text-sm">Pour personnaliser votre expérience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold">Nous contacter</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-blue-100 mb-6">
                      Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                      contactez notre délégué à la protection des données.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <i className="ri-mail-line text-blue-200"></i>
                        <span>privacy@glorysbusiness-services.com</span>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                          <i className="ri-phone-line text-blue-200"></i>
                          <span>+33 6 17 53 05 67 (France)</span>
                        </div>
                        <div className="flex items-center space-x-3 ml-7">
                          <span>+86 131 8046 9651 (Chine)</span>
                        </div>
                        <div className="flex items-center space-x-3 ml-7">
                          <span>+237 687935703 (Cameroun)</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="ri-map-pin-line text-blue-200"></i>
                        <span>Paris, France</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Temps de réponse</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-blue-100">Demandes générales</span>
                        <span className="font-semibold">48h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-100">Exercice des droits</span>
                        <span className="font-semibold">30 jours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-100">Urgences</span>
                        <span className="font-semibold">24h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
