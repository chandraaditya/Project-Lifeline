import Roads from "./Roads.js";

export default class World{
    static _world;
    static _graph;
    constructor() {
        World._world = document.getElementById("world");
        let world = document.getElementById("world");
        world.addEventListener("pointerdown", () => {
            Roads.drawRoads = true;
            console.log("Draw roads!");
            Roads.drawRoads = true;
        });
        world.addEventListener("pointerup", () => {
            Roads.drawRoads = false;
            console.log("Stop drawing!");
        });
        console.log(World._roads);
    }

    static getSurrounding(grid) {

    }

    // let drag = false;
    //
    // document.addEventListener('mousedown', () => drag = false);
    // document.addEventListener('mousemove', () => drag = true);
    // document.addEventListener('mouseup', () => console.log(drag ? 'drag' : 'click'));
}