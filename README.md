# WTTJ Widget

Gestioin des tâches - Webpack
- Pour commencer le projet, j'ai installé le webpack. J'ai passé beaucoup de temps sur la configuration du fichier webpack.config.js pour résoudre les problèmes que j'ai rencontré notament sur babel.

Gestioin des sliders - Swiper
- [Swiper](https://idangero.us/swiper/) est un slider tactile moderne et gratuit sans avoir JS librairie. Je l'ai choisi pour intégrer dans ce projet parce que je l'ai déjà utilisé sur mon dernier projet et je sais qu'il est facile de configurer le nombre ou la position des sliders, pagination, navigation et etc.

Accessibilité
- Pour avoir plus d'accessibilité, j'ai utilisé les astuces suivantes :
  - les balises sémantiques HTML5 `header`, `main`, `footer`, `blockquote`, `figure`, `figcaption`...
  - les attributs `role`, `aria-label` et `aria-hidden`
  - l'attribut `alt` dans la balise `img`

SEO
- J'ai également mis en place les microdata dans HTML5 qui pourront être lues, récupérées et traitées par des logiciels ou des applicatifs Web de façon automatique afin de proposer aux Internautes des résultats de recherche plus pertinents.

CSS
- J'ai utilisé la méthodologie BEM(bloc, element, modifier) pour éviter les cascades dans les sélecteurs CSS et évidemment réduire les risques de conflits de nommage. Cette méthode est extrêment modulaire, réutilisable et extensible.

- Au niveau de l'organisation des fichiers CSS :
  - tous les CSS commons(ex: variable, mixin, normalize...) dans le folder `<base>`
  - les CSS des plugins dans le folder `<plugins>`
  - les blocs commons(ex: header, footer) dans le folder `<layout>`
  - le core des pages dans le folder `<pages>`

Les points à améliorer
  - faire le swiper en [react-slick](https://github.com/akiran/react-slick)
  - générer les icons en fonts via [icomoon](http://moon.io/app/) et les gérer via [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader/blob/master/README.md). L'avantage est que les icons peuvent être facielemnt personnalisés et le poid des icons en fonts est très léger.
  - si les images ou posters sont lourds en poid, c'est mieux de les intégrer via balises `picture`, `source` qui sont faites pour gérer les images en fonction de la taille de l'écran.
