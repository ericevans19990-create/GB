
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import SEO from '../../components/SEO';
import BlogHeroSection from './components/BlogHeroSection';
import BlogListSection from './components/BlogListSection';
import NewsletterSection from './components/NewsletterSection';

export default function Blog() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Glorys Business",
    "description": "Actualités, conseils et guides sur le sourcing et l'import depuis la Chine",
    "publisher": {
      "@type": "Organization",
      "name": "Glorys Business"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${import.meta.env.VITE_SITE_URL || ""}/blog`
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Blog - GLORYS BUSINESS | Actualités et Conseils Sourcing Chine"
        description="Découvrez nos articles, actualités et conseils d'experts sur le sourcing, l'import et le commerce avec la Chine. Guides pratiques et tendances du marché."
        keywords="blog sourcing chine, actualités import, conseils sourcing, guides import chine, tendances marché"
        ogTitle="Blog - GLORYS BUSINESS | Actualités et Conseils Sourcing Chine"
        ogDescription="Articles, actualités et conseils d'experts sur le sourcing et l'import depuis la Chine"
        canonicalUrl="/blog"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <BlogHeroSection />
        <BlogListSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
