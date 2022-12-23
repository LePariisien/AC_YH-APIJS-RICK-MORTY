# AC_YH-APIJS-RICK-MORTY: Pour initialiser notre Application, on commence par quelques configurations dans le terminal de notre editeur de code:

"npm install"

puis,

"pnpm install"

On aura besoin aussi de Node.js:

<p>brew install node<p>

On poursuit avec une vérification de l'installation:

"pnpm --version"

ainsi que pour node:

"node --version"

Dès que l'on a ces deux outils on peut alors initalisé le projet en demarrant le server avec la commande suivante:

"pnpm dev"

Et Démarrer le projet avec la commande "pnpm init" qui crée le fichier "package.json" qui nous servira pour le bon lancement de l'application

Notre Application que l'on vient de créer est une SPA (Simple Page Application). 

L'API qu'on utilise pour cette SPA est l'API Rick & Morty en prenant l'URL suivant "https://rickandmortyapi.com/".

Notre Simple Page Application va servir à afficher plusieurs éléments de l'API Rick et Morty.

Dans la première page, nous avons une liste de personnages qui font partis de la serie Rick et Morty, on peut y voir leurs noms, leurs prénoms ainsi que leurs genres sous forme d'un bouton qui est clicable.

Dès le click initialisé, nous serons redirigés vers une page de description du personnage avec plus d'éléments sur lui comme son statut et ses specificités par exemple.

Une page de recherche qui permet de pouvoir filtrer (par des caractéristiques comme le statut ou le genre du (ou des) personnage(s) recherché(s)) la liste des personnages précédemment cités
