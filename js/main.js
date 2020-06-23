import anime from "../bin/anime-master/lib/anime.es.js";
import Dot from "./Dot.js";
import Grid from "./Grid.js";
import WorldBuilder from "./WorldBuilder.js";
import World from "./World.js";
import Hashmap from "../data/Hashmap.js";




let world1 = new Grid();
let world = new World();
let roads = new WorldBuilder();



//Creating DOT and moving DOT.
// let a = new Dot(50, 50, 90);
//
// let path = anime.path('#path');
//
// anime({
//     targets: '#' + a.ID,
//     translateX: path('x'),
//     translateY:path('y'),
//     rotate: path('angle'),
//     easing: 'linear',
//     duration: 50000,
//     loop: true
// });