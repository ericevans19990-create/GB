Test du stub /api/form (dev)

✅ Le projet contient un stub d'API pour les formulaires qui s'exécute dans le serveur de développement Vite.

Comment tester localement :

1) Lancer le serveur dev :
   npm run dev

2) Ouvrez le site (par défaut http://localhost:5173) et soumettez un formulaire (contact, devis, newsletter, etc.).

3) Le middleware de développement capture les POST vers `/api/form` et renvoie une réponse JSON { ok: true, received: ... }.
   - Vous verrez une ligne dans la console du serveur Vite :
     [local-api] /api/form received: { formId: '...', data: { ... } }

Note: pour un accès rapide et des exemples de commandes, ouvrez `http://localhost:5173/dev-info.html` après avoir démarré le frontend (ou utilisez `npm run show:dev-info` sur macOS).

Notes :
- Ce stub est prévu pour le développement et les tests. En production, fournissez un endpoint serveur réel qui traitera/stockera/relayra les données (ex : fonction serverless, express, API route).
- Le client utilise le helper `src/lib/form.ts` (fonction `submitToApi(formId, data)`) pour centraliser les envois.

Serveur Express d'exemple (optionnel)

1) Installer les dépendances (si non fait) :
   npm install

2) Lancer le serveur Express d'exemple :
   npm run start:api

3) Le serveur écoute par défaut sur http://localhost:3001 et expose :
   - POST /api/form  → renvoie { ok: true, received: ... }
   - GET  /api/health → renvoie { ok: true, message: 'form api stub running' }

Remarque : le script `start:api` lance `server/index.cjs` (express). Ce serveur est fourni à titre d'exemple pour que vous puissiez exécuter un endpoint réel en local.

Lancement combiné (frontend + API)

Vous pouvez lancer **les deux** serveurs en parallèle avec une seule commande :

   npm install
   npm run dev:all

Cette commande utilise `concurrently` (installé en devDependencies) pour démarrer à la fois le serveur Express (`start:api`) et le serveur Vite (`dev`).
