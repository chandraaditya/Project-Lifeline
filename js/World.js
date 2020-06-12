import Roads from "./Roads";

export default class World{
    static _world;
    constructor() {
        World._world = document.getElementById("world");
        World._world.addEventListener('mousedown', () => Roads.buildRoad())
        World._world.addEventListener('mouseup', () => Roads)
    }
    // let drag = false;
    //
    // document.addEventListener('mousedown', () => drag = false);
    // document.addEventListener('mousemove', () => drag = true);
    // document.addEventListener('mouseup', () => console.log(drag ? 'drag' : 'click'));
}