import Hashmap from "../data/Hashmap.js";
import Coordinate from "../data/Coordinate";

export default class Roads {
    static _last;
    static _current;
    static _drawRoads;
    static _startDrawing;
    static _grid;
    static _roads;

    constructor() {
        Roads._last = -1;
        Roads._current = -1;
        Roads._drawRoads = false;
        Roads._startDrawing = false;
        Roads._grid = Array(25).fill().map(() => Array(25).fill(0));
        Roads._hashmap = new Hashmap();
    }

    static get last() {
        return Roads._last;
    }

    static set last(value) {
        Roads._last = value;
    }

    static get current() {
        return Roads._current;
    }

    static set current(value) {
        Roads.last = Roads.current;
        Roads._current = value;
        if (Roads.startDrawing && Roads.drawRoads && Roads.last !== -1 && Roads.current !== -1) {
            Roads.buildRoad();
        }
    }

    static get startDrawing() {
        return Roads._startDrawing;
    }

    static set startDrawing(value) {
        Roads._startDrawing = value;
    }

    static get drawRoads() {
        return Roads._drawRoads;
    }

    static set drawRoads(value) {
        Roads._drawRoads = value;
    }

    static getRoadAt(grid) {
        return Roads._roads.get(grid);
    }

    static setRoadAt(grid, road) {
        Roads._roads.set(grid, road);
    }

    static buildRoad() {
        let last = document.getElementById(Roads._last);
        let current = document.getElementById(Roads._current);
        let last_x = parseInt(last.getAttribute('data-x'));
        let last_y = parseInt(last.getAttribute('data-y'));
        let current_x = parseInt(current.getAttribute('data-x'));
        let current_y = parseInt(current.getAttribute('data-y'));
        if (Roads._grid[last_x][last_y] === 0) {
            Roads._grid[last_x][last_y] = 1;
            last.style.backgroundColor = "black";
        }
        if (Roads._grid[current_x][current_y] === 0) {
            Roads._grid[current_x][current_y] = 1;
            current.style.backgroundColor = "black";
        }
        Roads._hashmap.addRoad(new Coordinate(last_x, last_y), new Coordinate(current_x, current_y));
        console.log(Roads._hashmap);
        console.log(Roads._grid);
    }
}