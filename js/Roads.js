export default class Roads {
    static _last;
    static _current;
    static _drawRoads;
    static _startDrawing;
    static _roads;

    constructor() {
        Roads._last = -1;
        Roads._current = -1;
        Roads._drawRoads = false;
        Roads._startDrawing = false;
        Roads._roads = Array(25).fill().map(() => Array(25).fill(0));
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

    static buildRoad() {
        let last = document.getElementById(Roads._last);
        let current = document.getElementById(Roads._current);
        last.style.backgroundColor = "black";
        current.style.backgroundColor = "black";
    }

}