
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('accueil');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);

      // Détecter la section active uniquement sur la page d'accueil
      if (location.pathname === '/') {
        const sections = ['accueil', 'about', 'services', 'why-choose', 'testimonials', 'blog', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, location.pathname]);

  // Remonter en haut lors du changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    if (path === '/') {
      // Pour la page d'accueil, forcer le retour en haut
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate(path);
    } else {
      navigate(path);
      // Pour les autres pages, remonter en haut après navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    scrollToSection('contact');
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavItemClass = (path: string, sectionId?: string) => {
    let isActive = false;
    
    if (location.pathname === '/' && sectionId) {
      // Sur la page d'accueil, utiliser la section active détectée par le scroll
      isActive = activeSection === sectionId;
    } else {
      // Sur les autres pages, utiliser le pathname
      isActive = location.pathname === path;
    }
    
    return `text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
      isActive ? 'text-blue-600' : 'text-gray-700'
    }`;
  };

  const getMobileNavItemClass = (path: string, sectionId?: string) => {
    let isActive = false;
    
    if (location.pathname === '/' && sectionId) {
      isActive = activeSection === sectionId;
    } else {
      isActive = location.pathname === path;
    }
    
    return `block px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
      isActive
        ? 'text-blue-600 bg-blue-50' 
        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
    }`;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white/90 backdrop-blur-sm shadow-md py-3'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <img 
              src="/images/logo.svg" 
              alt="Glorys Business Logo" 
              className={`object-contain transition-all duration-300 ${
                isScrolled ? 'w-8 h-8' : 'w-10 h-10'
              }`}
              loading="eager"
            />
            <div>
              <span className={`font-bold text-blue-600 block leading-tight ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>
                GLORYS BUSINESS
              </span>
              <span className={`text-gray-600 block leading-tight ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                DEVELOPMENT AND SERVICES
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              onClick={() => handleNavigation('/')}
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer ${
                location.pathname === '/' && activeSection === 'accueil' ? 'text-blue-600' : ''
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/about"
              onClick={() => handleNavigation('/about')}
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer ${
                location.pathname === '/about' ? 'text-blue-600' : ''
              }`}
            >
              À Propos
            </Link>
            <Link
              to="/services"
              onClick={() => handleNavigation('/services')}
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer ${
                location.pathname === '/services' ? 'text-blue-600' : ''
              }`}
            >
              Services
            </Link>
            <Link
              to="/why-choose"
              onClick={() => handleNavigation('/why-choose')}
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer ${
                location.pathname === '/why-choose' ? 'text-blue-600' : ''
              }`}
            >
              Pourquoi Nous
            </Link>
            <Link
              to="/blog"
              onClick={() => handleNavigation('/blog')}
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer ${
                location.pathname === '/blog' ? 'text-blue-600' : ''
              }`}
            >
              Blog
            </Link>
            <Link
              to="/faq"
              onClick={() => handleNavigation('/faq')}
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer ${
                location.pathname === '/faq' ? 'text-blue-600' : ''
              }`}
            >
              FAQ
            </Link>
            <Button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line mr-2"></i>
              Demander un Devis
            </Button>
          </nav>

          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2 border-t mt-4">
            <Link
              to="/"
              onClick={() => handleNavigation('/')}
              className={`block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer ${
                location.pathname === '/' && activeSection === 'accueil' ? 'text-blue-600' : ''
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/about"
              onClick={() => handleNavigation('/about')}
              className={`block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer ${
                location.pathname === '/about' ? 'text-blue-600' : ''
              }`}
            >
              À Propos
            </Link>
            <Link
              to="/services"
              onClick={() => handleNavigation('/services')}
              className={`block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer ${
                location.pathname === '/services' ? 'text-blue-600' : ''
              }`}
            >
              Services
            </Link>
            <Link
              to="/why-choose"
              onClick={() => handleNavigation('/why-choose')}
              className={`block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer ${
                location.pathname === '/why-choose' ? 'text-blue-600' : ''
              }`}
            >
              Pourquoi Nous
            </Link>
            <Link
              to="/blog"
              onClick={() => handleNavigation('/blog')}
              className={`block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer ${
                location.pathname === '/blog' ? 'text-blue-600' : ''
              }`}
            >
              Blog
            </Link>
            <Link
              to="/faq"
              onClick={() => handleNavigation('/faq')}
              className={`block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer ${
                location.pathname === '/faq' ? 'text-blue-600' : ''
              }`}
            >
              FAQ
            </Link>
            <div className="px-3 py-2">
              <Button 
                onClick={scrollToContact}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line mr-2"></i>
                Demander un Devis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
