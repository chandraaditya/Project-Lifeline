import Hashmap from "../data/Hashmap.js";
import Coordinate from "../data/Coordinate.js";

export default class WorldBuilder {
    static _last;
    static _current;
    static _drawRoads;
    static _startDrawing;
    static _grid;
    static _roads;

    constructor() {
        WorldBuilder._last = -1;
        WorldBuilder._current = -1;
        WorldBuilder._drawRoads = false;
        WorldBuilder._startDrawing = false;
        WorldBuilder._grid = Array(25).fill().map(() => Array(25).fill(0));
        WorldBuilder._hashmap = new Hashmap();
    }

    static get last() {
        return WorldBuilder._last;
    }

    static set last(value) {
        WorldBuilder._last = value;
    }

    static get current() {
        return WorldBuilder._current;
    }

    static set current(value) {
        WorldBuilder.last = WorldBuilder.current;
        WorldBuilder._current = value;
        if (WorldBuilder.startDrawing && WorldBuilder.drawRoads && WorldBuilder.last !== -1 && WorldBuilder.current !== -1) {
            WorldBuilder.buildRoad();
        }
    }

    static get startDrawing() {
        return WorldBuilder._startDrawing;
    }

    static set startDrawing(value) {
        WorldBuilder._startDrawing = value;
    }

    static get drawRoads() {
        return WorldBuilder._drawRoads;
    }

    static set drawRoads(value) {
        WorldBuilder._drawRoads = value;
    }

    static getRoadAt(grid) {
        return WorldBuilder._roads.get(grid);
    }

    static setRoadAt(grid, road) {
        WorldBuilder._roads.set(grid, road);
    }

    static buildRoad() {
        let last = document.getElementById(WorldBuilder._last);
        let current = document.getElementById(WorldBuilder._current);
        let last_x = parseInt(last.getAttribute('data-x'));
        let last_y = parseInt(last.getAttribute('data-y'));
        let current_x = parseInt(current.getAttribute('data-x'));
        let current_y = parseInt(current.getAttribute('data-y'));
        if (WorldBuilder._grid[last_x][last_y] === 0) {
            WorldBuilder._grid[last_x][last_y] = 1;
            last.style.backgroundColor = "black";
        }
        if (WorldBuilder._grid[current_x][current_y] === 0) {
            WorldBuilder._grid[current_x][current_y] = 1;
            current.style.backgroundColor = "black";
        }
        WorldBuilder._hashmap.addRoad(new Coordinate(last_x, last_y), new Coordinate(current_x, current_y));
        console.log(WorldBuilder._hashmap);
        console.log(WorldBuilder._grid);
    }
}