import anime from "../bin/anime-master/lib/anime.es.js";

let path = anime.path('#test-path path');
anime({
    targets: '.screen',
    translateX: path('x'),
    translateY:path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 5000,
    loop: true
});