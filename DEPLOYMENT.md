# Guide de Déploiement DevTeam Website

## 🌐 Site en ligne

**URL de production**: [https://v0-dev-team.vercel.app](https://v0-dev-team.vercel.app)

## 🚀 Déploiement sur Vercel (Recommandé)

### Le site est déjà déployé automatiquement :

1. **URL de production**: [https://v0-dev-team.vercel.app](https://v0-dev-team.vercel.app)
2. **Déploiement automatique** à chaque push sur la branche main
3. **Configuration automatique** par Vercel

## 🔧 Déploiement manuel sur Vercel

### Si vous voulez déployer votre propre version :

1. **Connecter à Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Connecter votre compte GitHub
   - Importer le repository

2. **Configuration automatique**
   - Vercel détecte automatiquement Next.js
   - Déploiement automatique à chaque push
   - URL personnalisée disponible

## 🌐 Déploiement sur Netlify

### Alternative simple :

1. **Drag & Drop**
   - Exécuter `npm run build`
   - Glisser le dossier `out` sur netlify.com
   - Site déployé instantanément

2. **Git Integration**
   - Connecter le repository
   - Build command: `npm run build`
   - Publish directory: `out`

## 🚀 Déploiement sur GitHub Pages

### Étapes pour configurer le déploiement :

1. **Créer un repository GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/devteam-website.git
   git push -u origin main
   \`\`\`

2. **Activer GitHub Pages**
   - Aller dans Settings > Pages
   - Source: "GitHub Actions"
   - Le workflow se lancera automatiquement

3. **Vérifier le déploiement**
   - Aller dans l'onglet "Actions"
   - Vérifier que le workflow s'exécute sans erreur
   - Le site sera disponible à : `https://VOTRE-USERNAME.github.io/devteam-website`

## 🐛 Résolution des problèmes

### Erreur 404 :
- Vérifier que `output: 'export'` est dans next.config.js
- S'assurer que toutes les images utilisent des chemins relatifs
- Vérifier que les composants 3D ont des fallbacks

### Erreurs de build :
- Exécuter `npm run build` localement pour tester
- Vérifier les imports dynamiques pour les composants 3D
- S'assurer que TypeScript et ESLint sont configurés pour ignorer les erreurs

### Performance :
- Les composants 3D se chargent de manière différée
- Fallbacks statiques pour les navigateurs non compatibles
- Images optimisées pour le web

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifier les logs dans l'onglet Actions de GitHub
2. Tester le build localement avec `npm run build`
3. Contacter l'équipe DevTeam pour assistance

**Site en ligne**: [https://v0-dev-team.vercel.app](https://v0-dev-team.vercel.app)
