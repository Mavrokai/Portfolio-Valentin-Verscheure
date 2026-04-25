# Portfolio - Valentin Verscheure

Portfolio personnel développé avec Vue.js 3 et Tailwind CSS.

## 🚀 Technologies utilisées

- **Vue.js 3** - Framework JavaScript progressif
- **Vite** - Build tool moderne et rapide
- **Tailwind CSS** - Framework CSS utility-first
- **EmailJS** - Service d'envoi d'emails

## 📦 Installation

1. Installer les dépendances :
```bash
npm install
```

## 🛠️ Développement

Lancer le serveur de développement :
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 🏗️ Build pour production

Générer les fichiers de production :
```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`

## 👀 Prévisualiser le build

Prévisualiser le build de production localement :
```bash
npm run preview
```

## 📁 Structure du projet

```
Portfolio-Valentin-Verscheure/
├── public/              # Assets statiques (images, PDF, etc.)
│   └── assets/
├── src/
│   ├── assets/          # Styles CSS
│   │   └── styles/
│   ├── components/       # Composants Vue
│   │   ├── NavBar.vue
│   │   ├── Hero.vue
│   │   ├── About.vue
│   │   ├── Skills.vue
│   │   ├── Projects.vue
│   │   └── Contact.vue
│   ├── composables/     # Composables Vue (logique réutilisable)
│   │   ├── useAnimations.js
│   │   └── useEmail.js
│   ├── App.vue          # Composant racine
│   └── main.js          # Point d'entrée
├── index.html           # Template HTML
├── vite.config.js       # Configuration Vite
├── tailwind.config.js   # Configuration Tailwind
└── package.json
```

## 🎨 Personnalisation

### Couleurs

Les couleurs personnalisées sont définies dans `tailwind.config.js` :
- `portfolio-dark` : #1B0B0A
- `portfolio-dark-alt` : #2a1615
- `portfolio-amber` : #fbbf24
- `portfolio-amber-dark` : #f59e0b

### Animations

Les animations personnalisées sont définies dans `src/assets/styles/animations.css`.

## 📧 Configuration EmailJS

Le service EmailJS est configuré dans `src/main.js`. Pour modifier les paramètres :
- Service ID : `service_lmf8hyk`
- Template ID : `template_cxqeb2u`
- Public Key : `l_ce7qtvjadGdWq3w`

## 📝 Notes

- Les anciens fichiers HTML/JS/CSS sont conservés dans le projet mais ne sont plus utilisés
- Le projet utilise la Composition API de Vue.js 3
- Les animations sont gérées via le composable `useAnimations`
