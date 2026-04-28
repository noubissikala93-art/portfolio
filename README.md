# DevOps Portfolio

Portfolio personnel minimaliste construit avec Next.js 15, App Router et Tailwind CSS.

---

## Prérequis

- Node.js 18+
- npm 9+

---

## Installation

```bash
# Cloner le projet
git clone https://github.com/[username]/devops-portfolio.git
cd devops-portfolio

# Installer les dépendances
npm install
```

---

## Démarrage

```bash
# Mode développement (hot reload)
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans le navigateur.

```bash
# Build de production
npm run build

# Lancer la version de production
npm start
```

---

## Structure du projet

```
devops-portfolio/
├── app/                        # App Router Next.js
│   ├── layout.tsx              # Layout global (Navbar + Footer)
│   ├── page.tsx                # Page d'accueil
│   ├── globals.css             # Styles globaux Tailwind
│   └── projects/[slug]/
│       └── page.tsx            # Page de détail par projet
│
├── components/
│   ├── Navbar.tsx              # Navigation sticky (responsive)
│   ├── Hero.tsx                # Section d'accueil
│   ├── About.tsx               # Section À propos
│   ├── Projects.tsx            # Grille de projets
│   ├── ProjectCard.tsx         # Carte individuelle de projet
│   ├── Skills.tsx              # Section compétences
│   └── Contact.tsx             # Section contact
│
├── data/
│   └── projects.ts             # Données de tous les projets (source de vérité)
│
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

---

## Personnalisation

### 1. Nom affiché dans la Navbar

Fichier : `components/Navbar.tsx`, ligne 23

```tsx
// Avant
[YourName]

// Après
Jean Dupont
```

---

### 2. Photo de profil

Fichier : `components/Hero.tsx`

Remplacer le bloc placeholder par une image :

```tsx
// Avant (placeholder gris)
<div className="w-80 h-96 bg-neutral-50 border border-neutral-200 ...">
  <div className="w-16 h-16 rounded-full bg-neutral-200" />
  <span>Photo</span>
</div>

// Après (vraie photo)
import Image from 'next/image'

<div className="w-80 h-96 relative overflow-hidden border border-neutral-200">
  <Image
    src="/photo.jpg"
    alt="[Votre Nom]"
    fill
    className="object-cover"
    priority
  />
</div>
```

Placer la photo dans `public/photo.jpg`.

---

### 3. Statistiques dans le Hero

Fichier : `components/Hero.tsx`, ligne 1

```tsx
const stats = [
  { value: '4', label: 'Projects' },   // nombre de projets
  { value: '2024', label: 'Since' },   // année de début
  { value: 'K8s', label: 'Platform' }, // technologie principale
]
```

---

### 4. Texte À propos

Fichier : `components/About.tsx`

Modifier directement les trois paragraphes `<p>`.
Règle : 2–3 phrases par paragraphe, pas de liste, pas de buzzwords.

---

### 5. Ajouter ou modifier un projet

Fichier : `data/projects.ts`

Chaque projet suit cette structure :

```typescript
{
  slug: 'nom-du-projet',          // URL : /projects/nom-du-projet
  title: 'Titre affiché',
  stack: ['Tool1', 'Tool2'],       // affiché comme tags
  summary: 'Une phrase.',          // affiché sur la carte
  problem: 'Quel était le problème ?',
  solution: 'Comment il a été résolu.',
  outcome: 'Quel a été le résultat concret.',
  details: [
    'Étape ou détail technique 1',
    'Étape ou détail technique 2',
  ],
}
```

**Ajouter un projet** — ajouter un objet dans le tableau `projects[]`.

**Supprimer un projet** — supprimer l'objet correspondant du tableau.

**Modifier un projet** — éditer directement les champs dans l'objet.

Les pages de détail (`/projects/[slug]`) sont générées automatiquement à partir de ces données.

---

### 6. Compétences

Fichier : `components/Skills.tsx`, variable `skillGroups`

```typescript
{
  category: 'Nom de la catégorie',
  items: ['Outil1', 'Outil2', 'Outil3'],
}
```

Ajouter, supprimer ou renommer librement les catégories et les items.

---

### 7. Liens de contact

Fichier : `components/Contact.tsx`, variable `contactLinks`

```typescript
const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/ton-username',
    display: 'github.com/ton-username',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ton-username',
    display: 'linkedin.com/in/ton-username',
  },
  {
    label: 'Email',
    href: 'mailto:ton@email.com',
    display: 'ton@email.com',
  },
]
```

---

## Déploiement

### Option A — Vercel (recommandé)

```bash
# Installer la CLI Vercel
npm i -g vercel

# Déployer
vercel
```

Ou connecter le dépôt GitHub directement sur [vercel.com](https://vercel.com) — déploiement automatique à chaque push.

---

### Option B — GitHub Pages (export statique)

Modifier `next.config.ts` :

```typescript
const nextConfig: NextConfig = {
  output: 'export',
}
```

Puis :

```bash
npm run build
# Le dossier `out/` contient le site statique prêt à être déployé
```

---

### Option C — Serveur propre (VPS / container)

```bash
npm run build
npm start
# Écoute sur le port 3000 par défaut
```

Pour changer le port :

```bash
npm start -- -p 8080
```

---

## Variables d'environnement

Ce projet ne nécessite aucune variable d'environnement par défaut.

Si besoin d'en ajouter (ex. URL d'API), créer un fichier `.env.local` à la racine :

```bash
NEXT_PUBLIC_MA_VARIABLE=valeur
```

---

## Checklist avant publication

- [ ] Remplacer `[YourName]` dans `Navbar.tsx`
- [ ] Remplacer les liens dans `Contact.tsx`
- [ ] Ajouter une vraie photo dans `Hero.tsx`
- [ ] Vérifier le contenu des projets dans `data/projects.ts`
- [ ] Mettre à jour le `<title>` et la `description` dans `app/layout.tsx`
- [ ] Lancer `npm run build` sans erreur
- [ ] Tester sur mobile (responsive)

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement avec hot reload |
| `npm run build` | Build de production optimisé |
| `npm start` | Lance le serveur de production |
| `npm run lint` | Vérifie le code avec ESLint |

---

## Stack technique

| Technologie | Version | Usage |
|---|---|---|
| Next.js | 15.x | Framework React (App Router) |
| React | 19.x | UI |
| TypeScript | 5.x | Typage statique |
| Tailwind CSS | 3.x | Styles utilitaires |
| Inter | — | Police (via `next/font`) |
