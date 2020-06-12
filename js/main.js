import anime from "../bin/anime-master/lib/anime.es.js";
import Dot from "./Dot.js";
import Grid from "./Grid.js";
import Roads from "./Roads.js";




let world1 = new Grid();
//
let world = document.getElementById("world");
world.addEventListener("mousedown", () => {
    Roads.drawRoads = true;
    Roads.buildRoad();
    console.log("Draw roads!");
});
world.addEventListener("mouseup", () => {
    Roads.drawRoads = false;
    console.log("Stop drawing!");
});

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