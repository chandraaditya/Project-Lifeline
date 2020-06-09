import anime from "../bin/anime-master/lib/anime.es.js";
import Car from "../js/Car.js";

let b = [];

let a = function() {
    for (let i = 0; i < 10; i++) {
        b.push(new Car(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), [0, 90, 180, 270][Math.floor(Math.random()*4)]));
        console.log("Car created! ID: " + Car.numCars);
    }
}

a();

// let path = anime.path('#test-path path');
// anime({
//     targets: '.car',
//     translateX: path('x'),
//     translateY:path('y'),
//     rotate: path('angle'),
//     easing: 'linear',
//     duration: 10000,
//     loop: true
// });