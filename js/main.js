// import anime from "../bin/anime-master/lib/anime.es.js";
import Dot from "./Dot.js";

let a = new Dot(0, 0, 90);

let path = anime.path('#path');

anime({
    targets: '#' + a.ID,
    translateX: path('x'),
    translateY:path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 50000,
    loop: true
});