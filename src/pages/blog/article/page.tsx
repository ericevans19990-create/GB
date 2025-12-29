
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SEO from '../../../components/SEO';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function BlogArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // All articles data
  const getArticleData = (slug: string) => {
    const articles: { [key: string]: any } = {
      'nouvelles-reglementations-douanieres-ue-chine-2025': {
        title: 'Nouvelles Réglementations Douanières UE-Chine 2025',
        excerpt: 'Découvrez les dernières modifications des accords commerciaux entre l\'Union Européenne et la Chine, et leur impact sur vos importations en 2025.',
        content: `
          <p>Les relations commerciales entre l'Union Européenne et la Chine connaissent des évolutions majeures en 2025. Ces nouvelles réglementations douanières impactent directement les entreprises européennes qui importent depuis la Chine.</p>
          
          <h2>Principales Modifications</h2>
          <p>Les accords commerciaux ont été révisés pour inclure de nouvelles mesures de transparence et de traçabilité. Les entreprises doivent désormais fournir des informations détaillées sur l'origine des produits et les conditions de production.</p>
          
          <h3>1. Nouvelles Procédures Douanières</h3>
          <ul>
            <li>Déclaration électronique obligatoire 48h avant l'arrivée</li>
            <li>Certification d'origine renforcée</li>
            <li>Contrôles qualité aléatoires augmentés de 30%</li>
            <li>Traçabilité complète de la chaîne d'approvisionnement</li>
          </ul>
          
          <h3>2. Impact sur les Délais</h3>
          <p>Les nouveaux contrôles peuvent rallonger les délais de dédouanement de 2 à 5 jours ouvrables. Il est crucial d'anticiper ces délais dans votre planification logistique.</p>
          
          <h3>3. Coûts Additionnels</h3>
          <p>Les frais de dossier ont été revus à la hausse, avec une augmentation moyenne de 15% sur les procédures de dédouanement standard.</p>
          
          <h2>Conseils Pratiques</h2>
          <p>Pour vous adapter à ces changements, nous recommandons :</p>
          <ul>
            <li>De mettre à jour vos procédures internes</li>
            <li>De former vos équipes aux nouvelles exigences</li>
            <li>D'établir des partenariats avec des transitaires expérimentés</li>
            <li>D'anticiper les délais supplémentaires dans vos plannings</li>
          </ul>
          
          <p>Notre équipe d'experts reste à votre disposition pour vous accompagner dans cette transition et optimiser vos processus d'importation.</p>
        `,
        date: '12 Janvier 2025',
        category: 'Réglementation',
        image: '/images/hero.jpg',
        readTime: '6 min',
        author: 'Marie Dubois',
        authorImage: '/images/team-1.jpg'
      },
      'intelligence-artificielle-logistique-revolution-2025': {
        title: 'Intelligence Artificielle dans la Logistique : Révolution 2025',
        excerpt: 'Comment l\'IA transforme la chaîne d\'approvisionnement internationale et optimise les coûts de transport entre la Chine et l\'Europe.',
        content: `
          <p>L'intelligence artificielle révolutionne le secteur de la logistique internationale en 2025. Les entreprises qui adoptent ces technologies observent des gains d'efficacité spectaculaires dans leurs opérations d'import-export avec la Chine.</p>
          
          <h2>Applications Concrètes de l'IA en Logistique</h2>
          <p>L'IA s'impose comme un game-changer dans la gestion des flux internationaux, offrant des solutions innovantes pour optimiser chaque étape de la chaîne d'approvisionnement.</p>
          
          <h3>1. Prédiction des Délais de Transport</h3>
          <p>Les algorithmes d'apprentissage automatique analysent des milliers de variables (conditions météorologiques, trafic portuaire, congestion des routes) pour prédire avec une précision de 95% les délais de livraison.</p>
          
          <h3>2. Optimisation des Routes</h3>
          <ul>
            <li>Réduction des coûts de transport de 20 à 30%</li>
            <li>Minimisation de l'empreinte carbone</li>
            <li>Évitement proactif des zones de congestion</li>
            <li>Adaptation en temps réel aux conditions changeantes</li>
          </ul>
          
          <h3>3. Gestion Intelligente des Stocks</h3>
          <p>L'IA prédit les besoins en stock avec une précision inégalée, réduisant les coûts de stockage de 25% tout en évitant les ruptures.</p>
          
          <h2>ROI Mesurable</h2>
          <p>Les entreprises utilisant l'IA dans leur logistique rapportent :</p>
          <ul>
            <li>Réduction des coûts opérationnels : 15-25%</li>
            <li>Amélioration de la satisfaction client : +40%</li>
            <li>Diminution des erreurs de livraison : -60%</li>
            <li>Optimisation des délais : -20% en moyenne</li>
          </ul>
          
          <h2>Mise en Œuvre Pratique</h2>
          <p>Pour intégrer l'IA dans votre chaîne logistique, commencez par identifier les points de friction actuels et évaluez le potentiel d'amélioration. Notre équipe peut vous accompagner dans cette transformation digitale.</p>
        `,
        date: '8 Janvier 2025',
        category: 'Innovation',
        image: '/images/hero.jpg',
        readTime: '8 min',
        author: 'Thomas Chen',
        authorImage: '/images/team-1.jpg'
      },
      'sourcing-durable-exigences-esg-2025': {
        title: 'Sourcing Durable : Les Nouvelles Exigences ESG 2025',
        excerpt: 'Les critères environnementaux, sociaux et de gouvernance deviennent incontournables. Guide complet pour un sourcing responsable en Chine.',
        content: `
          <p>Les exigences ESG (Environnementales, Sociales et de Gouvernance) redéfinissent les standards du sourcing international en 2025. Les entreprises européennes doivent désormais intégrer ces critères dans leur stratégie d'approvisionnement en Chine.</p>
          
          <h2>Nouvelles Obligations Réglementaires</h2>
          <p>La directive européenne sur la diligence raisonnable des entreprises impose de nouvelles obligations aux importateurs, avec des sanctions pouvant aller jusqu'à 5% du chiffre d'affaires mondial.</p>
          
          <h3>1. Critères Environnementaux</h3>
          <ul>
            <li>Certification ISO 14001 obligatoire pour les fournisseurs</li>
            <li>Bilan carbone détaillé de la production</li>
            <li>Gestion responsable des déchets industriels</li>
            <li>Utilisation d'énergies renouvelables (minimum 30%)</li>
          </ul>
          
          <h3>2. Standards Sociaux</h3>
          <p>Les conditions de travail des ouvriers chinois font l'objet d'une surveillance renforcée :</p>
          <ul>
            <li>Audit social annuel obligatoire</li>
            <li>Respect des conventions OIT</li>
            <li>Interdiction du travail des enfants</li>
            <li>Salaires équitables et horaires régulés</li>
          </ul>
          
          <h3>3. Gouvernance et Transparence</h3>
          <p>Les entreprises doivent démontrer une gouvernance éthique à travers leurs fournisseurs chinois.</p>
          
          <h2>Checklist Pratique ESG</h2>
          <p>Pour vous conformer aux nouvelles exigences :</p>
          <ol>
            <li><strong>Audit initial</strong> : Évaluez vos fournisseurs actuels</li>
            <li><strong>Plan d'action</strong> : Définissez des objectifs mesurables</li>
            <li><strong>Formation</strong> : Sensibilisez vos équipes et partenaires</li>
            <li><strong>Monitoring</strong> : Mettez en place un suivi continu</li>
            <li><strong>Reporting</strong> : Documentez vos progrès</li>
          </ol>
          
          <h2>Avantages Compétitifs</h2>
          <p>Au-delà de la conformité, le sourcing durable offre des avantages concrets : amélioration de l'image de marque, réduction des risques, accès à de nouveaux marchés et attraction des talents.</p>
        `,
        date: '3 Janvier 2025',
        category: 'Durabilité',
        image: '/images/hero.jpg',
        readTime: '7 min',
        author: 'Sophie Martin',
        authorImage: '/images/team-1.jpg'
      },
      'optimisation-couts-logistiques-strategies-2025': {
        title: 'Optimisation des Coûts Logistiques : Stratégies 2025',
        excerpt: 'Nouvelles approches pour réduire vos coûts de transport maritime et aérien. Analyse comparative des routes commerciales et négociation avec les transporteurs.',
        content: `
          <p>Face à l'augmentation des coûts énergétiques et des tensions géopolitiques, l'optimisation des coûts logistiques devient cruciale pour maintenir la rentabilité des importations depuis la Chine en 2025.</p>
          
          <h2>Analyse des Coûts Actuels</h2>
          <p>Les coûts de transport ont augmenté de 35% en moyenne depuis 2023. Cette hausse s'explique par plusieurs facteurs : prix du carburant, congestion portuaire, et nouvelles réglementations environnementales.</p>
          
          <h3>1. Transport Maritime : Nouvelles Stratégies</h3>
          <ul>
            <li><strong>Consolidation des expéditions</strong> : Réduction de 20-30% des coûts unitaires</li>
            <li><strong>Contrats annuels négociés</strong> : Stabilité des prix et priorité d'embarquement</li>
            <li><strong>Routes alternatives</strong> : Exploration de nouveaux corridors commerciaux</li>
            <li><strong>Flexibilité des dates</strong> : Évitement des pics de demande</li>
          </ul>
          
          <h3>2. Transport Aérien : Optimisation Intelligente</h3>
          <p>Pour les produits urgents ou de haute valeur, le transport aérien reste incontournable. Les stratégies d'optimisation incluent :</p>
          <ul>
            <li>Groupage avec d'autres expéditeurs</li>
            <li>Utilisation des vols cargo directs</li>
            <li>Négociation de tarifs préférentiels sur volume</li>
          </ul>
          
          <h3>3. Solutions Multimodales</h3>
          <p>La combinaison rail-mer-route offre un compromis optimal entre coût et délai pour de nombreux produits.</p>
          
          <h2>Négociation avec les Transporteurs</h2>
          <p>Les clés d'une négociation réussie :</p>
          <ol>
            <li><strong>Volume garanti</strong> : Engagement sur 12 mois minimum</li>
            <li><strong>Flexibilité mutuelle</strong> : Adaptation aux variations saisonnières</li>
            <li><strong>Partenariat long terme</strong> : Construction d'une relation de confiance</li>
            <li><strong>Clauses de révision</strong> : Ajustement selon les conditions du marché</li>
          </ol>
          
          <h2>Technologies d'Optimisation</h2>
          <p>Les outils digitaux permettent une optimisation en temps réel des coûts logistiques, avec des gains pouvant atteindre 25% sur les coûts totaux de transport.</p>
        `,
        date: '28 Décembre 2024',
        category: 'Logistique',
        image: '/images/hero.jpg',
        readTime: '5 min',
        author: 'Pierre Leroy',
        authorImage: '/images/team-1.jpg'
      },
      'tendances-ecommerce-transfrontalier-2025': {
        title: 'Tendances du E-commerce Transfrontalier 2025',
        excerpt: 'Le marché du e-commerce entre la Chine et l\'Europe explose. Découvrez les opportunités, défis réglementaires et meilleures pratiques pour réussir.',
        content: `
          <p>Le e-commerce transfrontalier entre la Chine et l'Europe connaît une croissance exceptionnelle en 2025, avec un volume d'échanges qui devrait atteindre 180 milliards d'euros, soit une progression de 45% par rapport à 2024.</p>
          
          <h2>Évolution du Marché</h2>
          <p>Cette explosion s'explique par la démocratisation des plateformes de vente en ligne, l'amélioration de la logistique internationale et l'évolution des habitudes de consommation post-COVID.</p>
          
          <h3>1. Nouveaux Canaux de Distribution</h3>
          <ul>
            <li><strong>Marketplaces européennes</strong> : Intégration facilitée des produits chinois</li>
            <li><strong>Social Commerce</strong> : Vente directe via les réseaux sociaux</li>
            <li><strong>Live Shopping</strong> : Démonstrations en temps réel</li>
            <li><strong>B2B2C</strong> : Partenariats avec les distributeurs locaux</li>
          </ul>
          
          <h3>2. Défis Réglementaires</h3>
          <p>La réglementation européenne s'adapte à cette croissance :</p>
          <ul>
            <li>TVA sur les importations dès 1€ (suppression de la franchise de 22€)</li>
            <li>Responsabilité des plateformes sur la conformité produits</li>
            <li>Nouvelles obligations de marquage CE</li>
            <li>Traçabilité renforcée des colis</li>
          </ul>
          
          <h3>3. Logistique du Dernier Kilomètre</h3>
          <p>L'enjeu majeur reste la livraison finale au consommateur européen. Les solutions émergentes incluent :</p>
          <ul>
            <li>Centres de distribution européens</li>
            <li>Partenariats avec La Poste et DPD</li>
            <li>Points relais et consignes automatiques</li>
            <li>Livraison express 24-48h</li>
          </ul>
          
          <h2>Meilleures Pratiques 2025</h2>
          <ol>
            <li><strong>Localisation</strong> : Adaptation aux préférences locales</li>
            <li><strong>Service client multilingue</strong> : Support en temps réel</li>
            <li><strong>Paiements sécurisés</strong> : Intégration des solutions européennes</li>
            <li><strong>Retours simplifiés</strong> : Processus de retour optimisé</li>
          </ol>
          
          <h2>Opportunités Sectorielles</h2>
          <p>Les secteurs les plus prometteurs : technologie, mode, beauté, maison et jardin, avec des taux de croissance dépassant 60% annuels dans certaines catégories.</p>
        `,
        date: '22 Décembre 2024',
        category: 'Économie',
        image: '/images/hero.jpg',
        readTime: '6 min',
        author: 'Liu Wei',
        authorImage: '/images/team-1.jpg'
      },
      'controle-qualite-normes-internationales': {
        title: 'Contrôle Qualité : Nouvelles Normes Internationales',
        excerpt: 'Les standards de qualité évoluent rapidement. Guide pratique pour mettre en place un système de contrôle qualité efficace avec vos fournisseurs chinois.',
        content: `
          <p>Les normes internationales de contrôle qualité connaissent des évolutions majeures en 2025, poussées par les exigences croissantes des consommateurs et les nouvelles réglementations européennes sur la sécurité des produits.</p>
          
          <h2>Nouvelles Normes ISO 2025</h2>
          <p>L'ISO 9001:2025 introduit des exigences renforcées en matière de traçabilité digitale et d'amélioration continue basée sur l'intelligence artificielle.</p>
          
          <h3>1. Standards de Production</h3>
          <ul>
            <li><strong>ISO 9001:2025</strong> : Management de la qualité modernisé</li>
            <li><strong>ISO 14001:2025</strong> : Impact environnemental intégré</li>
            <li><strong>ISO 45001</strong> : Sécurité et santé au travail</li>
            <li><strong>IATF 16949</strong> : Spécifique à l'industrie automobile</li>
          </ul>
          
          <h3>2. Protocoles de Test Renforcés</h3>
          <p>Les nouveaux protocoles incluent des tests plus stricts sur :</p>
          <ul>
            <li>Substances chimiques (REACH, RoHS)</li>
            <li>Sécurité électrique (CE, FCC)</li>
            <li>Résistance mécanique et durabilité</li>
            <li>Conformité aux normes alimentaires</li>
          </ul>
          
          <h3>3. Digitalisation du Contrôle</h3>
          <p>L'intégration des technologies numériques révolutionne le contrôle qualité :</p>
          <ul>
            <li>Capteurs IoT en temps réel</li>
            <li>Vision par ordinateur pour la détection des défauts</li>
            <li>Blockchain pour la traçabilité</li>
            <li>Rapports de contrôle automatisés</li>
          </ul>
          
          <h2>Mise en Place Pratique</h2>
          <ol>
            <li><strong>Audit initial</strong> : Évaluation des capacités du fournisseur</li>
            <li><strong>Plan de contrôle</strong> : Définition des points critiques</li>
            <li><strong>Formation du personnel</strong> : Sensibilisation aux nouvelles normes</li>
            <li><strong>Outils de mesure</strong> : Investissement dans l'équipement approprié</li>
            <li><strong>Suivi continu</strong> : Monitoring des performances</li>
          </ol>
          
          <h2>ROI du Contrôle Qualité</h2>
          <p>Un système de contrôle qualité efficace génère un ROI de 300% en moyenne, grâce à la réduction des retours clients, l'amélioration de la réputation et la diminution des coûts de non-conformité.</p>
          
          <h2>Partenariat avec les Fournisseurs</h2>
          <p>La réussite du contrôle qualité repose sur une collaboration étroite avec vos fournisseurs chinois, incluant des formations régulières et un partage des meilleures pratiques.</p>
        `,
        date: '18 Décembre 2024',
        category: 'Sourcing',
        image: '/images/hero.jpg',
        readTime: '9 min',
        author: 'Marie Dubois',
        authorImage: '/images/team-1.jpg'
      },
      'blockchain-commerce-international': {
        title: 'Blockchain dans le Commerce International',
        excerpt: 'La technologie blockchain révolutionne la traçabilité et la sécurité des transactions commerciales. Cas d\'usage pratiques et implémentation.',
        content: `
          <p>La blockchain s'impose comme une technologie révolutionnaire dans le commerce international en 2025, offrant une transparence et une sécurité inégalées pour les transactions entre l'Europe et la Chine.</p>
          
          <h2>Applications Concrètes</h2>
          <p>La blockchain trouve ses applications dans de nombreux aspects du commerce international, transformant la façon dont les entreprises gèrent leurs échanges transfrontaliers.</p>
          
          <h3>1. Traçabilité des Produits</h3>
          <ul>
            <li><strong>Suivi en temps réel</strong> : De la production à la livraison finale</li>
            <li><strong>Authenticité garantie</strong> : Lutte contre la contrefaçon</li>
            <li><strong>Origine vérifiée</strong> : Certification de provenance</li>
            <li><strong>Conditions de transport</strong> : Température, humidité, chocs</li>
          </ul>
          
          <h3>2. Sécurisation des Paiements</h3>
          <p>La blockchain élimine les intermédiaires bancaires traditionnels :</p>
          <ul>
            <li>Réduction des frais de transaction de 40%</li>
            <li>Délais de paiement réduits à quelques minutes</li>
            <li>Élimination des risques de change</li>
            <li>Transparence totale des flux financiers</li>
          </ul>
          
          <h3>3. Smart Contracts</h3>
          <p>Les contrats intelligents automatisent les processus commerciaux :</p>
          <ul>
            <li>Libération automatique des paiements</li>
            <li>Exécution des clauses contractuelles</li>
            <li>Gestion des litiges simplifiée</li>
            <li>Réduction des coûts administratifs</li>
          </ul>
          
          <h2>Cas d'Usage Sectoriels</h2>
          
          <h3>Textile et Mode</h3>
          <p>Traçabilité complète de la fibre à la boutique, garantissant l'éthique de production et la qualité des matériaux.</p>
          
          <h3>Agroalimentaire</h3>
          <p>Suivi de la chaîne du froid, certification bio, et garantie de fraîcheur pour les consommateurs européens.</p>
          
          <h3>Électronique</h3>
          <p>Authentification des composants, lutte contre la contrefaçon, et gestion des garanties internationales.</p>
          
          <h2>Implémentation Pratique</h2>
          <ol>
            <li><strong>Évaluation des besoins</strong> : Identifier les cas d'usage prioritaires</li>
            <li><strong>Choix de la plateforme</strong> : Ethereum, Hyperledger, ou solutions propriétaires</li>
            <li><strong>Pilote</strong> : Test sur un produit ou une ligne spécifique</li>
            <li><strong>Formation des équipes</strong> : Montée en compétences</li>
            <li><strong>Déploiement progressif</strong> : Extension à l'ensemble des operations</li>
          </ol>
          
          <h2>Défis et Solutions</h2>
          <p>Malgré ses avantages, la blockchain présente des défis : consommation énergétique, scalabilité, et adoption par les partenaires. Les nouvelles blockchains éco-responsables et les consortiums sectoriels apportent des solutions à ces enjeux.</p>
        `,
        date: '15 Décembre 2024',
        category: 'Innovation',
        image: '/images/hero.jpg',
        readTime: '7 min',
        author: 'Thomas Chen',
        authorImage: '/images/team-1.jpg'
      },
      'changement-climatique-routes-commerciales': {
        title: 'Impact du Changement Climatique sur les Routes Commerciales',
        excerpt: 'Comment les changements climatiques affectent les routes commerciales traditionnelles et quelles alternatives développer pour maintenir vos approvisionnements.',
        content: `
          <p>Le changement climatique redessine la géographie du commerce international en 2025. Les routes traditionnelles entre la Chine et l'Europe subissent des perturbations croissantes, obligeant les entreprises à repenser leurs stratégies logistiques.</p>
          
          <h2>Impacts Observés</h2>
          <p>Les phénomènes climatiques extrêmes perturbent de plus en plus fréquemment les chaînes d'approvisionnement mondiales, avec des conséquences directes sur les coûts et les délais.</p>
          
          <h3>1. Routes Maritime Affectées</h3>
          <ul>
            <li><strong>Canal de Suez</strong> : Niveau d'eau fluctuant, restrictions de passage</li>
            <li><strong>Détroit de Malacca</strong> : Tempêtes tropicales plus intenses</li>
            <li><strong>Ports européens</strong> : Montée du niveau de la mer, tempêtes</li>
            <li><strong>Mer de Chine</strong> : Typhons plus fréquents et violents</li>
          </ul>
          
          <h3>2. Transport Ferroviaire</h3>
          <p>La nouvelle route de la soie subit également les effets du changement climatique :</p>
          <ul>
            <li>Fonte du pergélisol en Sibérie</li>
            <li>Inondations en Asie centrale</li>
            <li>Sécheresses affectant les infrastructures</li>
            <li>Températures extrêmes dégradant les rails</li>
          </ul>
          
          <h3>3. Transport Aérien</h3>
          <p>L'aviation cargo fait face à de nouveaux défis :</p>
          <ul>
            <li>Turbulences accrues</li>
            <li>Fermetures d'aéroports dues aux intempéries</li>
            <li>Restrictions de poids par haute température</li>
            <li>Consommation de carburant augmentée</li>
          </ul>
          
          <h2>Solutions Alternatives</h2>
          
          <h3>Diversification des Routes</h3>
          <p>Les entreprises adoptent une approche multi-routes pour réduire les risques :</p>
          <ol>
            <li><strong>Route arctique</strong> : Ouverture progressive du passage du Nord-Est</li>
            <li><strong>Corridors terrestres</strong> : Développement de nouvelles liaisons ferroviaires</li>
            <li><strong>Hubs régionaux</strong> : Multiplication des points de stockage intermédiaires</li>
            <li><strong>Transport multimodal</strong> : Combinaison optimisée des différents modes</li>
          </ol>
          
          <h3>Technologies d'Adaptation</h3>
          <ul>
            <li>Prévisions météorologiques avancées</li>
            <li>IA pour l'optimisation des routes en temps réel</li>
            <li>Conteneurs résistants aux conditions extrêmes</li>
            <li>Systèmes de monitoring environnemental</li>
          </ul>
          
          <h2>Stratégies de Résilience</h2>
          
          <h3>Planification Préventive</h3>
          <p>Anticiper les perturbations climatiques devient essentiel :</p>
          <ul>
            <li>Stocks de sécurité renforcés</li>
            <li>Fournisseurs multiples par région</li>
            <li>Contrats flexibles avec les transporteurs</li>
            <li>Plans de continuité d'activité actualisés</li>
          </ul>
          
          <h3>Partenariats Stratégiques</h3>
          <p>Collaboration renforcée avec les acteurs de la chaîne logistique pour partager les risques et les solutions innovantes.</p>
          
          <h2>Opportunités Émergentes</h2>
          <p>Paradoxalement, le changement climatique ouvre de nouvelles opportunités : routes arctiques plus accessibles, développement de technologies vertes, et émergence de nouveaux hubs logistiques dans des régions auparavant marginales.</p>
        `,
        date: '10 Décembre 2024',
        category: 'Durabilité',
        image: '/images/hero.jpg',
        readTime: '8 min',
        author: 'Sophie Martin',
        authorImage: '/images/team-1.jpg'
      }
    };

    return articles[slug || ''] || null;
  };

  const article = getArticleData(slug || '');

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
            <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
            <button 
              onClick={() => navigate('/blog')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Retour au blog
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Glorys Business"
    },
    "datePublished": article.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${import.meta.env.VITE_SITE_URL || ""}/blog/${slug}`
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={`${article.title} | Glorys Business`}
        description={article.excerpt}
        keywords={`${article.category.toLowerCase()}, sourcing chine, import export, ${article.title.toLowerCase()}`}
        ogTitle={article.title}
        ogDescription={article.excerpt}
        ogImage={article.image}
        canonicalUrl={`/blog/${slug}`}
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-6">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-center space-x-6 text-gray-500">
                <div className="flex items-center">
                  <img 
                    src={article.authorImage}
                    alt={article.author}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-calendar-line mr-2"></i>
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-time-line mr-2"></i>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img 
                src={article.image}
                alt={article.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:mb-2">
                <div 
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
              
              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Partager cet article</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer whitespace-nowrap">
                    <i className="ri-linkedin-fill"></i>
                    <span>LinkedIn</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer whitespace-nowrap">
                    <i className="ri-twitter-fill"></i>
                    <span>Twitter</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer whitespace-nowrap">
                    <i className="ri-whatsapp-fill"></i>
                    <span>WhatsApp</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer whitespace-nowrap">
                    <i className="ri-mail-fill"></i>
                    <span>Email</span>
                  </button>
                </div>
              </div>

              {/* Back to Blog */}
              <div className="mt-12 text-center">
                <button 
                  onClick={() => navigate('/blog')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Retour au blog
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Articles Similaires</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Intelligence Artificielle dans la Logistique : Révolution 2025',
                    excerpt: 'Comment l\'IA transforme la chaîne d\'approvisionnement internationale et optimise les coûts de transport.',
                    date: '8 Janvier 2025',
                    category: 'Innovation',
                    image: '/images/blog-thumb.jpg',
                    slug: 'intelligence-artificielle-logistique-revolution-2025'
                  },
                  {
                    title: 'Sourcing Durable : Les Nouvelles Exigences ESG 2025',
                    excerpt: 'Les critères environnementaux, sociaux et de gouvernance deviennent incontournables pour un sourcing responsable.',
                    date: '3 Janvier 2025',
                    category: 'Durabilité',
                    image: '/images/blog-thumb.jpg',
                    slug: 'sourcing-durable-exigences-esg-2025'
                  },
                  {
                    title: 'Optimisation des Coûts Logistiques : Stratégies 2025',
                    excerpt: 'Nouvelles approches pour réduire vos coûts de transport maritime et aérien entre la Chine et l\'Europe.',
                    date: '28 Décembre 2024',
                    category: 'Logistique',
                    image: '/images/blog-thumb.jpg',
                    slug: 'optimisation-couts-logistiques-strategies-2025'
                  }
                ].filter(relatedArticle => relatedArticle.slug !== slug).slice(0, 3).map((relatedArticle, index) => (
                  <article 
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
                    onClick={() => navigate(`/blog/${relatedArticle.slug}`)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {relatedArticle.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <i className="ri-calendar-line mr-2"></i>
                        <span>{relatedArticle.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {relatedArticle.excerpt}
                      </p>
                      
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                        <span>Lire l'article</span>
                        <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
