import Willow from '../assets/images/realisations/willow-tarot.jpg';
import Toscana from '../assets/images/realisations/latoscana.jpg';
import BreakingBad from '../assets/images/realisations/breaking-bad.jpg';
import FunWithFlags from '../assets/images/realisations/fun-with-flags.jpg';
import Burgerio from '../assets/images/realisations/burgerio.jpg';
import Fylo from '../assets/images/realisations/fylo.jpg';
import GetAMovie from '../assets/images/realisations/get-a-movie.jpg';

export default [
    {
        name: 'Willow Tarot',
        slug: "willow",
        image: Willow,
        link: 'https://willow-tarot.fr/',
        desc: "Site qui propose un accompagnement à l'aide de la taromancie",
        homepage: true
    },
    {
        name: "Get'a'Movie",
        slug: 'getamovie',
        image: GetAMovie,
        link: 'https://get-a-movie.graphandco.com/',
        desc: "Application React avec l'API de IMDB pour rechercher un film",
        homepage: true
    },
    {
        name: 'Burgerio',
        slug: 'burgerio',
        image: Burgerio,
        link: 'https://burgerio.graphandco.com/',
        desc:
            "Exemple de réalisation d'un site pour un restaurant spécialisé dans les burgers",
        homepage: true
    },
    {
        name: 'La Toscana',
        slug: 'toscana',
        image: Toscana,
        link: 'https://www.latoscana.fr/',
        desc: "Réalisation sur Wordpress d'un site one-page pour une pizzeria",
        homepage: false
    },
    {
        name: 'Breaking Bad',
        slug: 'breakingbad',
        image: BreakingBad,
        link: 'https://breaking-bad.graphandco.com/',
        desc: "App codée avec React et l'API Breaking Bad pour chercher un personnage de la série ",
        homepage: false
    },
    {
        name: 'Fun with flags',
        slug: 'funwithflags',
        image: FunWithFlags,
        link: 'https://funwithflags.graphandco.com/',
        desc: "Utilisation d'une API avec React pour chercher un pays et le localiser",
        homepage: false
    },
    {
        name: 'Fylo',
        slug: 'fylo',
        image: Fylo,
        link: 'https://fylo.graphandco.com/',
        desc: "Création d'une maquette pour un service de stockage en ligne",
        homepage: true
    },
    // {
    //     name: 'Infinite Cat-Scroll',
    //     image: CatScroll,
    //     link: 'https://cat-scroll.graphandco.com/',
    //     desc: 'Scroll infini avec chargement des images à la volée'
    // }
];