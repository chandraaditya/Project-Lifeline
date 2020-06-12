export default class Roads {
    static _last;
    static _current;
    static _drawRoads;
    static _startDrawing;
    constructor() {
        Roads._last = null;
        Roads._current = null;
        Roads._drawRoads = false;
        Roads._startDrawing = false;
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
        while (Roads.drawRoads) {
            if (Roads.startDrawing) {
                console.log("Drawing!");
                let last = document.getElementById(Roads._last);
                let current = document.getElementById(Roads._current);
                last.innerHTML = "x";
                current.innerHTML = "x";
            }
        }
        Roads.startDrawing = false;
    }

}