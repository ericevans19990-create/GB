
export default function LegalContentSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          
          {/* Informations sur l'éditeur */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Informations sur l'éditeur</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4"><strong>Raison sociale :</strong> Glorys Business</p>
              <p className="mb-4"><strong>Forme juridique :</strong> SARL</p>
              <p className="mb-4"><strong>Capital social :</strong> 50 000 €</p>
              <p className="mb-4"><strong>Siège social :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
              <p className="mb-4"><strong>RCS :</strong> Paris B 123 456 789</p>
              <p className="mb-4"><strong>SIRET :</strong> 123 456 789 00012</p>
              <p className="mb-4"><strong>TVA intracommunautaire :</strong> FR12 123456789</p>
              <p className="mb-2"><strong>Téléphone :</strong></p>
              <p className="mb-2 ml-6">+33 6 17 53 05 67 (France)</p>
              <p className="mb-2 ml-6">+86 131 8046 9651 (Chine)</p>
              <p className="mb-4 ml-6">+237 687935703 (Cameroun)</p>
              <p className="mb-4"><strong>Email :</strong> contact@glorysbusiness-services.com</p>
              <p><strong>Directeur de publication :</strong> Jean Dupont</p>
            </div>
          </div>

          {/* Hébergement */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Hébergement</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4"><strong>Hébergeur :</strong> OVH SAS</p>
              <p className="mb-4"><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
              <p className="mb-4"><strong>Téléphone :</strong> +33 6 17 53 05 67</p>
              <p><strong>Site web :</strong> www.ovh.com</p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Propriété intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="text-gray-700 mb-4">
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
            <p className="text-gray-700">
              Les marques et logos figurant sur le site sont déposés par Glorys Business ou éventuellement par ses partenaires. Toute reproduction totale ou partielle de ces marques ou de ces logos effectuée à partir des éléments du site sans l'autorisation expresse de Glorys Business est donc prohibée.
            </p>
          </div>

          {/* Responsabilité */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
            </p>
            <p className="text-gray-700 mb-4">
              Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse contact@glorysbusiness-services.com, en décrivant le problème de la manière la plus précise possible.
            </p>
            <p className="text-gray-700">
              Glorys Business ne pourra en aucun cas être tenu responsable de tout dommage de quelque nature qu'il soit résultant de l'interprétation ou de l'utilisation des informations et/ou documents disponibles sur ce site.
            </p>
          </div>

          {/* Liens hypertextes */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Liens hypertextes</h2>
            <p className="text-gray-700 mb-4">
              Les sites internet de tiers auxquels il est fait référence sur le site ne sont pas sous le contrôle de Glorys Business. En conséquence, Glorys Business n'est pas responsable du contenu de ces sites internet.
            </p>
            <p className="text-gray-700">
              Les risques liés à l'utilisation de ces sites incombent pleinement à l'utilisateur. Il se conformera à leurs conditions d'utilisation.
            </p>
          </div>

          {/* Données personnelles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Protection des données personnelles</h2>
            <p className="text-gray-700 mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données personnelles.
            </p>
            <p className="text-gray-700 mb-4">
              Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter notre délégué à la protection des données (DPO) :
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-blue-800"><strong>Email :</strong> dpo@sinosourcepro.com</p>
              <p className="text-blue-800"><strong>Courrier :</strong> DPO - SinoSource Pro, 123 Avenue des Champs-Élysées, 75008 Paris</p>
            </div>
            <p className="text-gray-700">
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
            </p>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Cookies</h2>
            <p className="text-gray-700 mb-4">
              Le site peut collecter automatiquement des informations standard. Toutes les informations collectées indirectement ne seront utilisées que pour suivre le volume, le type et la provenance du trafic utilisant ce site, pour développer et améliorer ce site ainsi que les services associés.
            </p>
            <p className="text-gray-700">
              Vous pouvez désactiver ces cookies dans votre navigateur. Cependant, ceci pourrait empêcher certaines fonctionnalités de ce site de fonctionner correctement.
            </p>
          </div>

          {/* Droit applicable */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Droit applicable et juridiction compétente</h2>
            <p className="text-gray-700 mb-4">
              Tout litige en relation avec l'utilisation du site www.sinosourcepro.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <i className="ri-mail-line text-blue-600 mr-2"></i>
                <span className="text-gray-700">contact@glorysbusiness-services.com</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <i className="ri-phone-line text-blue-600 mr-2"></i>
                  <span className="text-gray-700">+33 6 17 53 05 67 (France)</span>
                </div>
                <div className="flex items-center mb-2 ml-6">
                  <span className="text-gray-700">+86 131 8046 9651 (Chine)</span>
                </div>
                <div className="flex items-center ml-6">
                  <span className="text-gray-700">+237 687935703 (Cameroun)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
