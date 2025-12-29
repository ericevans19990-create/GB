
import { useCallback } from "react";

/**
 * TestimonialsStatsSection
 *
 * This component displays a set of statistics about the company and provides
 * a call‑to‑action button that smoothly scrolls to the contact section.
 *
 * The previous version contained two default exports with the same name,
 * which caused a compilation error. The duplicated export has been removed,
 * and the remaining component now includes robust error handling for the
 * navigation logic.
 */
const TestimonialsStatsSection = () => {
  /**
   * Smoothly navigate to the contact section.
   *
   * The original code attempted to call `window.REACT_APP_NAVIGATE`,
   * which does not exist and throws a runtime error. The function now
   * safely falls back to `window.location.assign` if a custom navigation
   * method is not defined, and it adds checks to avoid failures when
   * the DOM element is missing.
   */
  const handleQuoteRequest = useCallback(() => {
    try {
      // Use a custom navigation function if it exists (e.g., from env or a global)
      // otherwise fallback to a simple hash navigation.
      if (typeof window.REACT_APP_NAVIGATE === "function") {
        window.REACT_APP_NAVIGATE("/#contact");
      } else {
        // Directly change the URL hash – this works in all browsers.
        window.location.assign("/#contact");
      }

      // Give the browser a short moment to render the new hash before scrolling.
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        } else {
          // Optional: log a warning for developers (does not break the UI)
          console.warn(
            "[TestimonialsStatsSection] No element with id='contact' found."
          );
        }
      }, 100);
    } catch (err) {
      // Gracefully handle any unexpected errors.
      console.error(
        "[TestimonialsStatsSection] Failed to navigate to contact section:",
        err
      );
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Nos Résultats en Chiffres
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 10 ans d&apos;expérience au service de nos clients dans le
            monde entier
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Stat #1 */}
          <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold text-blue-600 mb-4">500+</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">
              Clients Satisfaits
            </div>
            <div className="text-gray-600">Dans plus de 50 pays</div>
          </div>

          {/* Stat #2 */}
          <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold text-green-600 mb-4">10+</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">
              Années d&apos;Expérience
            </div>
            <div className="text-gray-600">Sur le marché chinois</div>
          </div>

          {/* Stat #3 */}
          <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold text-purple-600 mb-4">98%</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">
              Taux de Satisfaction
            </div>
            <div className="text-gray-600">Clients recommandent nos services</div>
          </div>

          {/* Stat #4 */}
          <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold text-orange-600 mb-4">24/7</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">
              Support Client
            </div>
            <div className="text-gray-600">Assistance continue</div>
          </div>
        </div>

        {/* Call‑to‑Action Button */}
        <div className="text-center">
          <button
            onClick={handleQuoteRequest}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-line mr-2" aria-hidden="true"></i>
            Demander un Devis Gratuit
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStatsSection;
