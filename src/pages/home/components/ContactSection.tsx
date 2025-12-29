
import { useEffect, useState } from 'react';
import Button from '../../../components/base/Button';
import { submitToApi } from '../../../lib/form';

export default function ContactSection() {
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

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Bonjour, je souhaite obtenir des informations sur vos services de sourcing en Chine.");
    window.open(`https://wa.me/33617530567?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Demande d'information - Services GLORYS BUSINESS");
    const body = encodeURIComponent("Bonjour,\n\nJe souhaite obtenir des informations sur vos services de sourcing en Chine.\n\nCordialement,");
    window.open(`mailto:contact@glorysbusiness-services.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+33617530567', '_self');
  };

  const handleAgentClick = () => {
    const agentButton = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
    if (agentButton) {
      agentButton.click();
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4">
            Contactez-Nous
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Prêt à optimiser votre sourcing en Chine ? Notre équipe d'experts est là pour vous accompagner.
          </p>
        </div>

        {/* Boutons de contact rapide */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-whatsapp-fill text-xl"></i>
            <span>WhatsApp</span>
          </button>
          
          <button
            onClick={handleEmailClick}
            className="bg-blue-600 hover:bg-blue-5

0 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-mail-fill text-xl"></i>
            <span>Email</span>
          </button>
          
          <button
            onClick={handlePhoneClick}
            className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill text-xl"></i>
            <span>Téléphone</span>
          </button>
          
          <button
            onClick={handleAgentClick}
            className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-customer-service-2-fill text-xl"></i>
            <span>Assistant IA</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-6">Parlons de Votre Projet</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Téléphone</h4>
                  <p className="text-blue-100">+33 6 17 53 05 67 (France)</p>
                  <p className="text-blue-100">+86 131 8046 9651 (Chine)</p>
                  <p className="text-blue-100">+237 687935703 (Cameroun)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-blue-100">contact@glorysbusiness-services.com</p>
                  <p className="text-blue-100">support@glorysbusiness-services.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Bureaux</h4>
                  <p className="text-blue-100 mb-2">
                    <span className="font-medium">France :</span><br />
                    1 Avenue de la Libération, 91380 Chilly-Mazarin
                  </p>
                  <p className="text-blue-100">
                    <span className="font-medium">Chine :</span><br />
                    A118, Yilong Building, Fuhai Street, Bao'an District, Shenzhen
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Horaires</h4>
                  <p className="text-blue-100">Lun-Ven: 9h-18h (CET)</p>
                  <p className="text-blue-100">Support 24/7 disponible</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <button 
                onClick={handleWhatsAppClick}
                className="w-12 h-12 bg-green-600 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-whatsapp-fill text-xl"></i>
              </button>
              <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer">
                <i className="ri-wechat-fill text-xl"></i>
              </a>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Demande de Devis Sécurisée</h3>
              
              <form 
                id="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const data = {
                    nom: formData.get('nom') as string,
                    email: formData.get('email') as string,
                    entreprise: formData.get('entreprise') as string,
                    telephone: formData.get('telephone') as string,
                    service: formData.get('service') as string,
                    message: formData.get('message') as string
                  };
                  
                  if (!data.nom || !data.email || !data.message) {
                    alert('Veuillez remplir tous les champs obligatoires');
                    return;
                  }
                  
                  const messageLength = data.message.length;
                  if (messageLength > 500) {
                    alert(`Votre message dépasse la limite de 500 caractères (${messageLength}/500)`);
                    return;
                  }
                  
                  submitToApi('contact-form', data)
                    .then(() => {
                      alert('Merci pour votre demande ! Nous vous recontacterons rapidement.');
                      (e.target as HTMLFormElement).reset();
                    })
                    .catch(() => {
                      alert('Une erreur est survenue. Veuillez réessayer.');
                    });
                }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input 
                      type="text" 
                      name="nom"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input 
                      type="text" 
                      name="entreprise"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input 
                      type="tel" 
                      name="telephone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service souhaité
                  </label>
                  <div className="relative">
                    <select 
                      name="service"
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer text-sm"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="sourcing">Recherche de fournisseurs</option>
                      <option value="qualite">Contrôle qualité</option>
                      <option value="logistique">Logistique internationale</option>
                      <option value="stockage">Solutions de stockage</option>
                      <option value="gestion-stock">Gestion de stock</option>
                      <option value="accompagnement">Accompagnement personnalisé</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none text-sm"></i>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message * (max 500 caractères)
                  </label>
                  <textarea 
                    name="message"
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                    placeholder="Décrivez votre projet et vos besoins..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <i className="ri-shield-check-line text-green-600"></i>
                  <span>Vos données sont protégées et sécurisées</span>
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full"
                >
                  <i className="ri-send-plane-line mr-2"></i>
                  Envoyer la Demande Sécurisée
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
