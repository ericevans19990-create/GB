
import { useEffect, useState } from 'react';
import { submitToApi } from '../../../lib/form';

export default function NewsletterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('newsletter');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setSubmitStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitToApi('newsletter-blog', { email });
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <i className="ri-mail-line text-blue-300 mr-2"></i>
              <span className="text-blue-200 font-medium">Newsletter Exclusive</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Restez à la Pointe du Commerce International
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Recevez chaque semaine nos analyses exclusives, tendances du marché chinois, 
              conseils d'experts et opportunités business directement dans votre boîte mail.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center md:justify-start">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <i className="ri-lightbulb-line text-white text-xl"></i>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold">Insights Exclusifs</h4>
                  <p className="text-blue-200 text-sm">Analyses approfondies</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <i className="ri-trending-up-line text-white text-xl"></i>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold">Tendances Marché</h4>
                  <p className="text-blue-200 text-sm">Opportunités business</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <i className="ri-calendar-event-line text-white text-xl"></i>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold">Événements</h4>
                  <p className="text-blue-200 text-sm">Invitations exclusives</p>
                </div>
              </div>
            </div>
            
            <form 
              id="newsletter-blog-form"
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email professionnelle"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
                  required
                  disabled={isSubmitting}
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line mr-2 animate-spin"></i>
                      Inscription...
                    </>
                  ) : (
                    <>
                      <i className="ri-mail-send-line mr-2"></i>
                      S'abonner
                    </>
                  )}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-400 rounded-lg">
                  <p className="text-green-100 flex items-center">
                    <i className="ri-check-line mr-2"></i>
                    Merci ! Vous recevrez nos actualités chaque semaine.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-400 rounded-lg">
                  <p className="text-red-100 flex items-center">
                    <i className="ri-error-warning-line mr-2"></i>
                    Erreur lors de l'inscription. Veuillez réessayer.
                  </p>
                </div>
              )}
            </form>
            
            <p className="text-blue-200 text-sm mt-6">
              <i className="ri-shield-check-line mr-1"></i>
              Pas de spam • Désabonnement facile • Données protégées
            </p>
            
            <div className="flex items-center justify-center mt-8 space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15,000+</div>
                <div className="text-blue-200 text-sm">Abonnés actifs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-blue-200 text-sm">Taux de satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5★</div>
                <div className="text-blue-200 text-sm">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
