# 🧪 Piscine – Module de gestion de panier en TDD (Node.js + Vitest + Zod)

## 🎯 Objectifs pédagogiques

- Comprendre et pratiquer le **TDD (Test Driven Development)**
- Écrire des **tests unitaires robustes avec Vitest**
- Valider les données avec **Zod**
- Structurer un mini-module métier en Express (sans BDD)
- (Bonus) Créer un **hook React** `useCart` testable

## 🧱 Contexte

Tu travailles sur une application e-commerce. L’objectif est de développer un **module de panier** (cart) qui doit pouvoir :

- ajouter un produit
- supprimer un produit
- calculer le total
- calculer le nombre de produits dans le panier
- appliquer des remises
- valider les entrées

Tu devras **implémenter chaque fonction uniquement après avoir rédigé les tests correspondants.**

## 📦 Spécifications fonctionnelles

### Format d’un produit

```ts
type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
```

### Fonctions à implémenter (dans `cart.ts`)

- `addProduct(product: Product): void`
- `removeProduct(productId: string): void`
- `getProductCount(): void`
- `getTotal(): number`
- `applyDiscount(code: string): void`

## ✅ Étapes

1. Rédige les tests unitaires dans `tests/cart.test.ts`
2. Implémente les fonctions dans `src/cart.ts`
3. Valide les données avec `Zod`
4. Utilise `Vitest` pour exécuter tes tests (`npm run test`)

## 🧪 Cas de test à prévoir

- Ajouter un produit simple
- Ajouter un produit déjà existant
- Supprimer un produit existant / inexistant
- Calculer le nombre de produits dans le panier
- Calculer un total
- Appliquer un code promo valide / invalide
- Tester des entrées invalides (prix négatif, quantité 0...)

## 📥 validation Zod

Crée un schéma Zod `ProductSchema` pour vérifier les données produit à l’ajout. Lève une erreur si le produit est invalide.

## 🚀 Bonus : useCart en React

Implémente un hook React :

```ts
const { cart, addProduct, removeProduct, getTotal } = useCart();
```

## ✅ Contraintes

- TypeScript
- Respect de la logique TDD
- Cas de test complets
- Validation avec Zod
- Code clair, structuré et documenté

## Documentation :

- Zod : https://zod.dev/
- Vitest : https://vitest.dev/guide/
