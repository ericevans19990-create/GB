# Projet — Site Vite + React

**But** : Ce dépôt contient un site statique (Vite + React + TypeScript + Tailwind) modifié pour **ne plus dépendre d'images externes Readdy** et pour router les formulaires vers `/api/form` en développement.

## Démarrage rapide (développement) ✅
1. Installer les dépendances:

   ```bash
   npm install
   ```

2. Lancer le frontend et l'API de test (concurrently):

   ```bash
   npm run dev:all
   ```

   - Frontend (Vite) → `http://localhost:5173` (ou autre port si 5173 est occupé)
   
   Note: Vite peut écouter sur l'interface IPv6 local (`[::1]`). Si `127.0.0.1` ne répond pas, essayez d'ouvrir `http://localhost:5173` ou l'URL affichée par Vite.
   - API stub Express → `http://localhost:3001` (endpoints: `GET /api/health`, `POST /api/form`)

3. Page pratique: une page `dev-info` est exposée publiquement pour faciliter les tests à :

   - `http://localhost:5173/dev-info.html`

   Pour l'ouvrir automatiquement (sur macOS), vous pouvez exécuter:

   ```bash
   npm run show:dev-info
   ```

## Déploiement sur Hostinger (offre mutualisée — "standard")

Pour un hébergement standard (mutualisé) Hostinger, la meilleure approche est de déployer le site **statiquement** et d'utiliser un service externe pour traiter les formulaires.

1. Créez une build statique :

   ```bash
   npm run build
   ```

   Le dossier `dist/` contient les fichiers prêts à être déployés.

2. Déployer les fichiers :

   - Via hPanel → File Manager : uploadez le contenu de `dist/` dans `public_html/`.
   - Ou via FTP/SFTP : copiez `dist/*` vers `public_html/`.

   -- Astuce Hostinger Business :

   - Placez un fichier `.htaccess` à la racine du site pour permettre le *SPA fallback* (déjà présent dans `public/.htaccess` — il sera copié automatiquement dans `dist/`).
   - Si vous préférez, exécutez `npm run build:zip` pour générer `dist.zip` et importez ce zip via l'outil File Manager d'hPanel.

3. Formulaires :

   - Le frontend cherche `import.meta.env.VITE_FORM_ENDPOINT` pour l'URL de soumission des formulaires.
   - Sur Hostinger (mutualisé) vous ne pouvez généralement pas exécuter Node en backend, donc utilisez un service externe (Formspree, Getform, Supabase Functions, Google Cloud Function, etc.).
   - Mettez la variable `VITE_FORM_ENDPOINT` au moment de la build (ex: `VITE_FORM_ENDPOINT=https://formspree.io/f/<id> npm run build`) ou créez un fichier `.env` local avant de builder.

   - Option alternative (gérer les e‑mails via Hostinger) : vous pouvez déployer un handler PHP directement dans `public/api/form.php`. Le projet contient un exemple `public/api/form.php` qui :
     - accepte `application/x-www-form-urlencoded` et `application/json` ;
     - envoie un email au propriétaire du site et un email de confirmation au visiteur ;
     - intègre un simple honeypot (`hp`) pour réduire le spam.

     Pour l'utiliser en production sur Hostinger :
     1. Déployez le contenu de `dist/` sur Hostinger (ou copiez `public/api/form.php` dans `public_html/api/form.php`).
     2. Configurez la variable d'environnement au moment de la build ou modifiez `.env.local` :

        VITE_FORM_ENDPOINT=https://votre-domaine.com/api/form.php
        VITE_FORM_ENCODE=form

     3. Relancez la build : `VITE_FORM_ENDPOINT=https://votre-domaine.com/api/form.php VITE_FORM_ENCODE=form npm run prepare:deploy`.

     4. Testez via curl :

        curl -X POST 'https://votre-domaine.com/api/form.php' \
          -H 'Content-Type: application/x-www-form-urlencoded' \
          --data 'formId=contact-form&nom=Test&email=test@example.com&message=Bonjour'

     Remarque : remplacez l'adresse destinataire et l'adresse "no-reply" dans `public/api/form.php` par vos adresses (variables en haut du fichier). Pour une meilleure délivrabilité, utilisez plutôt l'option **PHPMailer/SMTP** décrite plus bas, et stockez vos identifiants SMTP en .env (ou dans l'interface Hostinger).

### Option B — PHPMailer + SMTP (recommandé pour la délivrabilité)

Si vous hébergez sur Hostinger, l'option la plus fiable est d'envoyer les mails via SMTP (votre boîte mail Hostinger). Le projet contient un exemple `public/api/form_smtp.php` qui utilise **PHPMailer**.

Installation de PHPMailer (recommandé via composer) :

1. Dans la racine du projet (local), exécutez :

   ```bash
   composer require phpmailer/phpmailer
   ```

   Ceci va créer `vendor/` et `vendor/autoload.php`. Copiez le dossier `vendor/` vers votre hébergement si vous ne pouvez pas exécuter composer sur le serveur.

2. Configurez vos variables SMTP dans `.env.local` (ou via l'interface Hostinger) :

   ```bash
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=587
   SMTP_USER=you@your-domain.com
   SMTP_PASS=supersecret
   SMTP_FROM=you@your-domain.com
   SMTP_FROM_NAME="GLORYS Business"
   SMTP_SECURE=tls
   SITE_OWNER=contact@your-domain.com
   ```

3. Déployez `public/api/form_smtp.php` et le dossier `vendor/` sur Hostinger (ex: `public_html/api/form_smtp.php` et `public_html/vendor/`).

4. Modifiez votre variable `VITE_FORM_ENDPOINT` pour pointer vers le handler SMTP :

   ```bash
   VITE_FORM_ENDPOINT=https://votre-domaine.com/api/form_smtp.php
   VITE_FORM_ENCODE=form
   ```

5. Testez :

   ```bash
   curl -X POST 'https://votre-domaine.com/api/form_smtp.php' -H 'Content-Type: application/x-www-form-urlencoded' --data 'formId=contact&nom=Test&email=test@example.com&message=Bonjour'
   ```

Le handler renverra `{"ok":true}` en cas de succès et renverra un message d'erreur si la configuration SMTP est incorrecte.

Sécurité : stockez les identifiants SMTP dans `.env.local` et ne les commitez pas (le projet ignore `.env.local`).

      - Remarque sur l'encodage : certains services (Formspree, Getform) acceptent JSON, d'autres attendent des données `application/x-www-form-urlencoded`. Notre helper `submitToApi` envoie `application/json`. Si votre fournisseur n'accepte pas JSON, je peux adapter `submitToApi` pour supporter l'encodage nécessaire.

   ### Formspree — configuration rapide pour débutant ✅

   Si vous souhaitez **recevoir facilement les soumissions sans gérer un serveur**, Formspree est idéal. Suivez ces étapes simples :

   1. Créez un compte sur https://formspree.io et créez un nouveau formulaire — récupérez l'URL fournie (elle ressemble à `https://formspree.io/f/<id>`).
   2. Dans votre projet, créez un fichier `.env.local` à la racine (n'ajoutez pas vos secrets au dépôt) et ajoutez :

   ```bash
   # Exemple (remplacez <id> par votre id Formspree)
   VITE_FORM_ENDPOINT=https://formspree.io/f/<id>
   # Recommandé : utiliser l'encodage urlencoded qui est compatible avec Formspree
   VITE_FORM_ENCODE=form
   ```

   3. Redémarrez le serveur de dev (`npm run dev`) ou relancez la build (`VITE_FORM_ENDPOINT=... VITE_FORM_ENCODE=form npm run prepare:deploy`) pour que la variable soit prise en compte.
   4. Testez depuis le site : soumettez le formulaire et vérifiez le tableau de bord Formspree ou vos emails pour confirmer la réception.

   Remarque : si vous préférez envoyer du JSON, définissez `VITE_FORM_ENCODE=json`, mais assurez‑vous que votre endpoint Formspree / destinataire l'accepte (par défaut `form` est le plus compatible).

4. Vérifier :

   - Ouvrez votre domaine (ou l'URL temporaire fournie par Hostinger) et testez les formulaires.

## Étapes simplifiées pour débutant (Hostinger Business)

1) Cloner / récupérer le dépôt localement

   ```bash
   git clone <repo-url>
   cd <repo>
   npm install
   ```

2) Préparer les variables d'environnement pour la build (ex: Formspree)

   ```bash
   # Exemple : envoie en urlencoded (Formspree)
   VITE_FORM_ENDPOINT=https://formspree.io/f/<id> VITE_FORM_ENCODE=form npm run prepare:deploy
   ```

   - Ceci crée `dist/` et `dist.zip` (prêt à uploader via hPanel File Manager).

3) Vérifier le contenu :

   ```bash
   npm run verify:dist
   ```

4) Uploader sur Hostinger via hPanel → File Manager → extraire `dist.zip` dans `public_html/`.

5) Tester le site en production et soumettre un formulaire pour vérifier que vous recevez bien les réponses (selon le fournisseur choisi).

Si vous préférez que je réalise la build et génère `dist.zip` pour vous, dites-le et je le ferai (je peux ensuite vous transmettre `dist.zip`).

Remarque : si vous avez un plan Hostinger Cloud/VPS qui supporte Node, je peux préparer l'app Express (`server/index.cjs`) pour être démarrée avec PM2 et configurer la redirection. Dites‑moi si vous souhaitez cette option.

## Comment fonctionnent les formulaires 📨
- En développement, les formulaires envoient un `POST /api/form` via la fonction `submitToApi` (dans `src/lib/form.ts`).
- Vite intègre un middleware de développement (dans `vite.config.ts`) qui capture les POST `/api/form` si vous ne lancez pas l'API Express.
- L'API Express de `server/index.cjs` logue la payload reçue puis renvoie `{ ok: true, received: ... }`.

> Remarque : le stub ne persiste pas les données en base ; en production vous devez brancher `/api/form` vers votre backend réel.

## Où sont les images et comment les remplacer 🖼️
- Les images localisées sont dans `public/images/` (ex: `logo.svg`, `placeholder-*`).
- Remplacez simplement les fichiers dans `public/images/` par vos fichiers (mêmes noms) ou mettez à jour les composants pour pointer vers d'autres chemins.
 - Nouveau : j'ai ajouté plusieurs images (hero, services, blog-thumb, team-1/2/3). Voir `docs/IMAGES.md` pour les crédits et les requêtes utilisées.

## Tests & utilitaires 🔬
- Script de test de formulaire : `npm run test:form` (envoie un POST de test à `/api/form`).
- Pour vérifier l'état de l'API :

  ```bash
  curl -sS http://127.0.0.1:3001/api/health
  ```

## FAQ & Dépannage (pour débutants)

- **Je ne vois rien sur http://127.0.0.1:5173/** : essayez `http://localhost:5173` — Vite peut écouter sur l'interface IPv6 (`[::1]`).
- **Le port 5173 est occupé** : Vite essaiera un autre port (ex: 5174). Regardez la sortie de `npm run dev` pour connaître l'URL exacte.
- **Je ne reçois pas les réponses de formulaire** : vérifiez que la variable `VITE_FORM_ENDPOINT` est bien renseignée avant de builder, et que `VITE_FORM_ENCODE` correspond au type d'encodage attendu (`json` ou `form`).
- **L'upload vers Hostinger ne fonctionne pas** : confirmez que vous avez uploadé/extrait le contenu de `dist/` dans `public_html/` et que `dist/.htaccess` est présent.
- **Comment tester une soumission localement ?** : utilisez `npm run test:form` ou la commande curl ci-dessus.

Si vous êtes bloqué, copiez-collez ici la sortie de `npm run dev` ou `npm run prepare:deploy` et je vous indique quoi corriger.

## Documentation détaillée
- `docs/FORM-STUB.md` — description du stub `/api/form` et exemples.
- `docs/TESTING.md` — scénarios de test manuels.

## Audit rapide 🔎
- **Références externes Readdy** : supprimées. Le projet ne charge plus d'images ni de scripts depuis `readdy`/`static.readdy.ai`.
- Les commentaires et le middleware listent désormais l'état (voir `index.html`, `vite.config.ts`, `server/index.cjs`, `docs/FORM-STUB.md`).

---

Si vous voulez, je peux :
- remplacer les placeholders par vos images (envoyez-les),
- ou brancher `/api/form` à une base de données ou service de mailing pour la production.

_Basé sur la configuration actuelle — développé pour macOS (script `show:dev-info` utilise la commande `open`)._
