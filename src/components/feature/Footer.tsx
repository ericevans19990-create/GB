
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const navigate = useNavigate();
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  // scrollToSection removed (unused)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Bonjour, je souhaite obtenir des informations sur vos services de sourcing en Chine."
    );
    window.open(`https://wa.me/33617530567?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent(
      "Demande d'information - Services GLORYS BUSINESS"
    );
    const body = encodeURIComponent(
      "Bonjour,\n\nJe souhaite obtenir des informations sur vos services de sourcing en Chine.\n\nCordialement,"
    );
    window.open(
      `mailto:contact@glorysbusiness-services.com?subject=${subject}&body=${body}`,
      '_blank'
    );
  };

  const socialLinks = [
    { icon: 'ri-linkedin-fill', color: 'bg-blue-600 hover:bg-blue-500', name: 'LinkedIn' },
    { icon: 'ri-twitter-fill', color: 'bg-blue-500 hover:bg-blue-400', name: 'Twitter' },
    { icon: 'ri-wechat-fill', color: 'bg-green-500 hover:bg-green-400', name: 'WeChat' },
  ];

  const services = [
    'Recherche de fournisseurs',
    'Contrôle qualité',
    'Logistique internationale',
    'Solutions de stockage',
    'Gestion de stock',
    'Accompagnement personnalisé',
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {/* NOTE: The class string contains double quotes inside a data‑URL. To avoid JSX parsing errors we use a template literal wrapped in `` */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]`}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <img
                  src="/images/logo.svg"
                  alt="Glorys Business Logo"
                  className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-xl font-bold text-blue-400 block leading-tight transition-colors duration-300 group-hover:text-blue-300">
                  GLORYS BUSINESS
                </span>
                <span className="text-sm text-gray-400 block leading-tight">
                  DEVELOPMENT AND SERVICES
                </span>
              </div>
            </div>

            <p className="text-gray-300 mb-10 leading-relaxed text-sm">
              Votre partenaire de confiance pour le sourcing en Chine,
              le contrôle qualité et la logistique internationale depuis plus de 10 ans.
            </p>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                Suivez-nous
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-11 h-11 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-lg relative group`}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                    {hoveredSocial === social.name && (
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {social.name}
                      </div>
                    )}
                  </a>
                ))}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-11 h-11 bg-green-600 hover:bg-green-500 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-lg relative group"
                  onMouseEnter={() => setHoveredSocial('WhatsApp')}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <i className="ri-whatsapp-fill text-lg"></i>
                  {hoveredSocial === 'WhatsApp' && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      WhatsApp
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-8 text-blue-400 relative">
              Nos Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-400"></div>
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start space-x-2 group">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Adresse */}
          <div>
            <h3 className="text-lg font-semibold mb-8 text-blue-400 relative">
              Adresse
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-400"></div>
            </h3>

            <div className="space-y-8">
              {/* France Address */}
              <div className="group">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                    <i className="ri-map-pin-line text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm font-medium mb-2">France</p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      1 Avenue de la Libération<br />
                      91380 Chilly-Mazarin<br />
                      France
                    </p>
                  </div>
                </div>
              </div>

              {/* China Address */}
              <div className="group">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 transition-colors duration-300">
                    <i className="ri-map-pin-line text-red-400"></i>
                  </div>
                  <div>
                    <p className="text-red-300 text-sm font-medium mb-2">Chine</p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      A118, Yilong Building<br />
                      Fuhai Street, Bao'an District<br />
                      Shenzhen, Chine
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Links */}
              <div className="pt-2">
                <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">
                  Localisation
                </h4>
                <div className="space-y-2">
                  <a
                    href="https://maps.google.com/?q=1+Avenue+de+la+Libération,+91380+Chilly-Mazarin,+France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer text-xs group"
                  >
                    <i className="ri-external-link-line group-hover:scale-110 transition-transform duration-300"></i>
                    <span>Voir sur Google Maps (France)</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=A118+Yilong+Building,+Fuhai+Street,+Bao'an+District,+Shenzhen,+China"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors duration-300 cursor-pointer text-xs group"
                  >
                    <i className="ri-external-link-line group-hover:scale-110 transition-transform duration-300"></i>
                    <span>Voir sur Google Maps (Chine)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-8 text-blue-400 relative">
              Contact
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-400"></div>
            </h3>

            <div className="space-y-8">
              {/* Phone */}
              <div className="group">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                    <i className="ri-phone-line text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium mb-2">Téléphone</p>
                    <p className="text-gray-400 text-xs leading-relaxed">+33 6 17 53 05 67 (France)</p>
                    <p className="text-gray-400 text-xs leading-relaxed">+86 131 8046 9651 (Chine)</p>
                    <p className="text-gray-400 text-xs leading-relaxed">+237 687935703 (Cameroun)</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                    <i className="ri-mail-line text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium mb-1">Email</p>
                    <button
                      onClick={handleEmailClick}
                      className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer block text-xs"
                    >
                      contact@glorysbusiness-services.com
                    </button>
                    <button
                      onClick={handleEmailClick}
                      className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer block text-xs"
                    >
                      support@glorysbusiness-services.com
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="pt-2">
                <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">
                  Contact Rapide
                </h4>
                <div className="flex space-x-3">
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-4 py-3 rounded-lg text-sm transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
                  >
                    <i className="ri-whatsapp-fill mr-2"></i>
                    WhatsApp
                  </button>
                  <button
                    onClick={handleEmailClick}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-4 py-3 rounded-lg text-sm transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
                  >
                    <i className="ri-mail-fill mr-2"></i>
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <p className="text-gray-400 text-sm">
                © 2024 GLORYS BUSINESS. Tous droits réservés.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="/legal"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors cursor-pointer hover:underline"
              >
                Mentions légales
              </a>
              <button
                onClick={() => navigate('/privacy')}
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors cursor-pointer hover:underline"
              >
                Politique de confidentialité
              </button>
              {/* 'Powered by Readdy' link removed */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
