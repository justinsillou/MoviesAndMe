# MoviesAndMe

Développez une application mobile React Native

> NodeJS (LTS 14.x)  
> Atom  
> Expo  

# Installation des outils
`$ (sudo) npm install -g expo-cli`

**Création d'une CRNA**     
`$ expo init my-app`  
-> Projet vierge : 'blank'

**Ajout du fichier token**  
*Remplacer XXX par votre token The Data Base Movies*  
```
  cd Helpers
  echo "const API_TOKEN = \"XXX\"
  export default API_TOKEN" > token.js
```

# Démarrage  
`$ cd /my-app`  
`$ npm start`

# Réalisations  
- Ajout d'un `Components Custom` Search.js (Components/Search.js)
- Ajout d'un `Style`
- Construction des vues avec `Flexbox`
- Utilisation des `Props` (Propriété appliquée à un Component)
