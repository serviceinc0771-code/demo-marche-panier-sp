# Marché San-Pédro — Simulateur de panier

Démo statique **Astro + Tailwind** : catalogue marché avec fourchettes de prix en FCFA (`prixMinimum` / `prixEstime` / `prixMaximum`) et panier avec totaux min · estimé · max.

> **Estimations démo** — les prix sont indicatifs, non branchés à une API live. Voir `/methodologie`.

## Démarrage

```bash
cd demo-marche-panier-sp
npm install
npm run dev      # http://localhost:4321
npm run build    # sortie → dist/
npm run preview  # prévisualiser le build
```

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Catalogue + filtres par catégorie + ajout au panier + barre sticky totaux |
| `/panier` | Détail panier + totaux géants min / estimé / max |
| `/methodologie` | Explication des fourchettes (indicatives) |

## Données

Produits seedés dans [`src/data/products.json`](src/data/products.json) (~28 items : riz, attiéké, igname, tomate, oignon, poisson, poulet, huile, sucre, magni, charbon, etc.).

Schéma par produit :

```json
{
  "id": "riz-local",
  "nom": "Riz local",
  "unite": "kg",
  "categorie": "Céréales",
  "emoji": "🍚",
  "prixMinimum": 400,
  "prixEstime": 550,
  "prixMaximum": 700
}
```

## Panier (client)

Vanilla JS dans `public/js/panier.js` — stockage `localStorage` (`marche-sp-panier`). Pas d’île framework : scripts inline sur les pages.

## Design (DA)

| Token | Hex | Usage |
|-------|-----|--------|
| fond | `#FAFAF9` | page |
| surface | `#FFFFFF` | cartes |
| texte | `#0A0A0A` | corps |
| secondaire | `#525252` | labels |
| primaire | `#166534` | marque / min |
| CTA | `#15803D` | boutons |
| total | `#14532D` | totaux estimés |
| alerte | `#B45309` | max / badges démo |
| bord | `#E5E5E5` | séparateurs |

Chiffres d’abord : prix estimé et totaux en très gros caractères gras (FCFA).

## Build

Site 100 % statique (`output: 'static'`). Aucun déploiement ni push Git inclus dans cette démo.

## Licence

Démonstration pédagogique — pas de transaction réelle.
