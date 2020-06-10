// import anime from "../bin/anime-master/lib/anime.es.js";
import Car from "../js/Car.js";

let a = new Car(50, 50, 0);

// anime({
//     targets: "#" + a.ID,
//     translateX: 250,
//     easing: 'easeInOutExpo',
//     duration: 800
// })

// let b = [];
//
// let a = function() {
//     for (let i = 0; i < 10; i++) {
//         b.push(new Car(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), [0, 90, 180, 270][Math.floor(Math.random()*4)]));
//         console.log("Car created! ID: " + Car.numCars);
//     }
// }

// a();

// let f = function() {a.car.style.transform = "rotate(270deg)"; console.log("Transformed")};
// setTimeout(f, 2000);

// let path = anime.path('#test-path path');
// anime({
//     targets: '#' + a.ID,
//     translateX: path('x'),
//     translateY:path('y'),
//     rotate: path('angle'),
//     easing: 'linear',
//     duration: 10000,
//     loop: true
// });