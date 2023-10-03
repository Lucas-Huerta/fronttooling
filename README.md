# Boilerplate Front-end tooling 🤓

Un projet front-end créé avec [Vite](https://vitejs.dev/){:target="\_blank"} dans le cadre du cours de Front-end Tooling.

## Aperçu 🕶️

Ce projet est un boilerplate (modèle de démarrage) pour les projets front-end utilisant [Vite](https://vitejs.dev/){:target="\_blank"}, une technologie de développement rapide pour les applications web. Il est conçu pour vous permettre de démarrer rapidement avec la configuration minimale et les outils nécessaires pour développer des applications web modernes.

## Installation 🗂️

1. Clonez ce dépôt vers votre machine locale :

```bash
git clone https://github.com/Lucas-Huerta/fronttooling.git

cd nom-du-projet

npm install
# ou
yarn

npm install
# ou
yarn

npm run build
# ou
yarn build
```

## Technologies incluses ⚙️

Ce modèle de démarrage inclut les technologies suivantes :

- [Storybook](https://storybook.js.org/){:target="\_blank"}
- Un système de test avec [Jest](https://jestjs.io/fr/){:target="\_blank"}
- Hooks personnalisés dans src/hooks
- Un [Linter](https://eslint.org/){:target="\_blank"}
- Un .env et .env-example

## Commandes disponibles ⌨️

Dans le répertoire du projet, vous pouvez exécuter les commandes suivantes :

```bash
npm run dev
# ou
yarn dev
```

Lance l'application en mode développement.

```bash
npm run build
# ou
yarn build
```

Construit l'application pour la production dans le dossier dist.

```bash
npm run storybook
# ou
yarn storybook
```

Lance le serveur de développement Storybook.

```bash
npm run lint
# ou
yarn lint
```

Exécute le linter pour vérifier les problèmes de style de code.

```bash
npm run test
# ou
yarn test
```

Exécute les tests unitaires.

## Variables d'environnement ⍵

Ce projet utilise des variables d'environnement pour configurer certains aspects de l'application. Vous pouvez créer un fichier .env à la racine du projet pour définir ces variables. Un fichier d'exemple est fourni dans env-example.
