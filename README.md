# Marvel App

## Installation

git clone url-du-projet
cd marvel-app

npm install

## Lancement

npm run dev

L'application est accessible à l'adresse affichée dans la console.


## Rechargement à chaud

L'application supporte le rechargement à chaud, ce qui signifie que les modifications du code source sont prises en compte sans avoir à recharger la page.


## Point d'entrée

Le point d'entrée de l'application est le fichier `index.html` situé à la racine du projet. C'est ce fichier qui est chargé dans le navigateur et qui charge ensuite le fichier `main.jsx` qui est le point d'entrée de l'application React.

démo

## Tests unitaires

Ouvrir le terminal intégré (Ctrl+`) à la racine du projet puis exécuter l'une des commandes suivantes selon la configuration du projet :

- Lancer tous les tests :
  - npm test
  - ou npm run test

- Lancer les tests en mode surveillance (watch) :
  - npm test -- --watch
  - ou npm run test:watch

- Lancer un seul fichier de test :
  - npm test -- path/to/file.test.js
  - ou npm run test -- path/to/file.test.js

Remarques :
- Le gestionnaire de tests dépend de la configuration du projet (Jest, Vitest, react-scripts...). Vérifier le script "test" dans package.json pour connaître la commande exacte.
- Si aucun script "test" n'existe, on peut l'ajouter dans package.json. Exemple minimal pour Vitest :
  {
    "scripts": {
      "test": "vitest"
    }
  }