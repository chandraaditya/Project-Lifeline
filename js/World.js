import WorldBuilder from "./WorldBuilder.js";

export default class World{
    static _world;
    static _graph;
    constructor() {
        World._world = document.getElementById("world");
        let world = document.getElementById("world");
        world.addEventListener("pointerdown", () => {
            WorldBuilder.drawRoads = true;
            console.log("Draw roads!");
            WorldBuilder.drawRoads = true;
        });
        world.addEventListener("pointerup", () => {
            WorldBuilder.drawRoads = false;
            console.log("Stop drawing!");
        });
    }

    static getSurrounding(grid) {

    }

    // let drag = false;
    //
    // document.addEventListener('mousedown', () => drag = false);
    // document.addEventListener('mousemove', () => drag = true);
    // document.addEventListener('mouseup', () => console.log(drag ? 'drag' : 'click'));
}