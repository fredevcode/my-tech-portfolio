# 📋 Checklist de Personnalisation du Portfolio

## ✅ Fichiers à Modifier (Dans l'ordre de priorité)

### 1. 🎯 Informations de Base (OBLIGATOIRE)

#### `app/layout.tsx` - Metadata SEO
```typescript
// Ligne 9-40 : Mettre à jour
export const metadata: Metadata = {
  title: 'Votre Nom - Fullstack Engineer',  // ← MODIFIER
  description: 'Votre description',          // ← MODIFIER
  keywords: ['vos', 'mots', 'clés'],        // ← MODIFIER
  authors: [{ name: 'Votre Nom' }],         // ← MODIFIER
  openGraph: {
    // Mettre à jour tous les champs
  },
}
```

#### `components/sections/footer.tsx` - Liens Sociaux
```typescript
// Ligne 12-31 : Mettre à jour
const socialLinks: SocialLink[] = [
  {
    id: '1',
    name: 'GitHub',
    url: 'https://github.com/VOTRE_USERNAME',    // ← MODIFIER
    icon: 'github',
  },
  {
    id: '2',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/VOTRE_PROFIL', // ← MODIFIER
    icon: 'linkedin',
  },
  // ... etc
]
```

### 2. 💼 Contenu Professionnel (IMPORTANT)

#### `components/sections/hero.tsx` - Page d'Accueil
```typescript
// Lignes 20-40 : Modifier le contenu
<h1>Votre Titre Professionnel</h1>          // Ligne 24
<p>Votre description professionnelle</p>    // Ligne 31
```

#### `components/sections/experience.tsx` - Expériences
```typescript
// Lignes 11-36 : Remplacer tout le tableau
const experiences: Achievement[] = [
  {
    id: '1',
    title: 'Votre Poste',
    description: 'Description de votre expérience',
    date: '2023 - Present',
    company: 'Votre Entreprise',
    location: 'Votre Localisation',
  },
  // Ajouter toutes vos expériences
]
```

#### `components/sections/projects.tsx` - Projets
```typescript
// Lignes 12-69 : Remplacer tout le tableau
const projects: Project[] = [
  {
    id: '1',
    title: 'Nom de votre projet',
    description: 'Description courte',
    image: '/votre-image.jpg',              // ← Ajouter l'image dans public/
    tags: ['Next.js', 'TypeScript', '...'],
    demoUrl: 'https://demo.com',            // ← MODIFIER
    githubUrl: 'https://github.com/...',   // ← MODIFIER
  },
  // Minimum 3-6 projets recommandés
]
```

#### `components/sections/tech-stack.tsx` - Technologies
```typescript
// Lignes 10-68 : Personnaliser les technologies
const technologies: Technology[] = [
  {
    id: '1',
    name: 'Votre Techno',
    description: 'Pourquoi vous l\'aimez',
    icon: '🔥',  // Emoji ou icône
    category: 'frontend',
  },
  // 6-10 technologies recommandées
]
```

### 3. 📝 Contenu Secondaire (OPTIONNEL)

#### `components/sections/blog-posts.tsx` - Articles
```typescript
// Lignes 10-34 : Ajouter vos articles
const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Titre de votre article',
    excerpt: 'Résumé court',
    url: 'https://votre-blog.com/article',
    publishedAt: '2024-01-15',
  },
  // 3-5 articles recommandés
]
```

#### `components/sections/activities.tsx` - Hobbies
```typescript
// Lignes 10-35 : Personnaliser vos activités
const activities: Activity[] = [
  {
    id: '1',
    title: 'Votre Hobby',
    description: 'Description courte',
    image: '/placeholder-activity.jpg',
    icon: 'camera',  // camera, code, music, plane
  },
  // 4-6 activités recommandées
]
```

### 4. 🎨 Personnalisation Visuelle (OPTIONNEL)

#### `app/globals.css` - Couleurs du Thème
```css
/* Lignes 5-27 : Mode clair */
:root {
  --primary: 222.2 47.4% 11.2%;     /* Couleur principale */
  --secondary: 210 40% 96.1%;       /* Couleur secondaire */
  /* Modifier selon votre palette */
}

/* Lignes 29-50 : Mode sombre */
.dark {
  --primary: 210 40% 98%;
  /* Adapter pour le dark mode */
}
```

#### `components/navigation.tsx` - Logo/Nom du Site
```typescript
// Ligne 60 : Modifier le nom
<Link href="/" className="text-xl font-bold">
  Votre Nom  // ← MODIFIER
</Link>
```

### 5. 📁 Images à Ajouter

Créez ces fichiers dans le dossier `public/` :

```
public/
├── og-image.jpg           # Image Open Graph (1200x630px)
├── favicon.ico            # Favicon
├── project-1.jpg          # Images de projets
├── project-2.jpg
├── project-3.jpg
└── ...
```

Puis mettez à jour les chemins dans :
- `app/layout.tsx` (ligne 27) : Open Graph image
- `components/sections/projects.tsx` : Images de projets

## 🔄 Ordre de Modification Recommandé

### Phase 1 : Contenu Essentiel (30 min)
1. ✅ `app/layout.tsx` - Metadata
2. ✅ `components/sections/footer.tsx` - Liens sociaux
3. ✅ `components/sections/hero.tsx` - Titre et description

### Phase 2 : Contenu Professionnel (1h)
4. ✅ `components/sections/experience.tsx` - Expériences
5. ✅ `components/sections/projects.tsx` - Projets
6. ✅ `components/sections/tech-stack.tsx` - Technologies

### Phase 3 : Contenu Complémentaire (30 min)
7. ✅ `components/sections/blog-posts.tsx` - Articles (si vous avez un blog)
8. ✅ `components/sections/activities.tsx` - Hobbies

### Phase 4 : Visuel & Images (30 min)
9. ✅ Ajouter toutes les images dans `public/`
10. ✅ Personnaliser les couleurs si souhaité

## 📌 Checklist Rapide

Cochez au fur et à mesure :

- [ ] Metadata SEO mis à jour
- [ ] Liens sociaux configurés
- [ ] Titre et description Hero modifiés
- [ ] Expériences professionnelles ajoutées
- [ ] Projets avec images et liens
- [ ] Stack technique personnalisée
- [ ] Articles de blog (optionnel)
- [ ] Hobbies/activités (optionnel)
- [ ] Images ajoutées dans public/
- [ ] Couleurs personnalisées (optionnel)
- [ ] Build testé : `npm run build`
- [ ] Testé sur mobile
- [ ] Déployé sur Vercel
- [ ] Domaine configuré

## 💡 Conseils de Personnalisation

1. **Commencez Simple** : Modifiez d'abord le contenu, puis le visuel
2. **Testez Régulièrement** : `npm run dev` après chaque modification
3. **Sauvegardez** : Committez après chaque section complétée
4. **Images Optimisées** : Compressez vos images (TinyPNG, Squoosh)
5. **Mobile First** : Testez toujours sur mobile

## 🚨 Erreurs Courantes à Éviter

- ❌ Oublier de mettre `'use client'` dans les composants avec hooks
- ❌ Chemins d'images incorrects (doivent commencer par `/`)
- ❌ Apostrophes non échappées dans JSX (utiliser `&apos;`)
- ❌ Oublier de builder avant de déployer
- ❌ Ne pas tester sur mobile

## 📞 Besoin d'Aide ?

Si vous rencontrez des problèmes :

1. Vérifiez d'abord `SETUP_GUIDE.md` (en anglais)
2. Consultez `LISEZMOI.md` pour le guide complet
3. Lancez `npm run build` pour voir les erreurs exactes
4. Vérifiez la console du navigateur pour les erreurs côté client

---

**Temps estimé total de personnalisation** : 2-3 heures

Bon courage ! 🚀
