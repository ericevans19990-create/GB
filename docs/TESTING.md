Checklist de test & QA

Prérequis :
- Node.js + npm installés
- Depuis la racine du projet : `npm install`

Lancer les serveurs :
- Pour lancer l'API en mode développement (reload automatique) :
  npm run dev:api
- Pour lancer le frontend :
  npm run dev
- Pour lancer les deux en parallèle :
  npm run dev:all

Tester l'API manuellement :
- Vérifiez la santé :
  curl http://localhost:3001/api/health
- Envoyer un POST de test :
  curl -X POST http://localhost:3001/api/form -H "Content-Type: application/json" -d '{"formId":"test","data":{"name":"Toto","email":"toto@example.com"}}'

Tester via le script Node fourni :
- node scripts/test-form.js                     # cible http://localhost:3001 par défaut
- node scripts/test-form.js http://localhost:5173 # cible un serveur Vite qui expose son middleware

Vérifications front-end (manuel) :
- Ouvrez http://localhost:5173
- Soumettez les formulaires : Contact, Devis, Newsletter
- Vérifiez que les messages de succès / d'erreur s'affichent correctement
- Sur le serveur (console) vous devriez voir une ligne :
  [local-api] /api/form received: { formId: '...', data: {...} }
  ou, si vous utilisez l'Express stub :
  [express-api] /api/form received: { ... }

Vérifications d'intégration :
- test:form (si vous avez Node installé) : `npm run test:form`
- Si vous souhaitez automatiser des tests, on peut ajouter un test avec Jest / Playwright pour simuler la soumission et vérifier le comportement UI + API.

Remarques :
- Le middleware Vite capture les POST `/api/form` quand vous exécutez `npm run dev`.
- Le serveur Express (`npm run dev:api`) expose le même endpoint et est utile pour tester une instance de serveur réelle.
