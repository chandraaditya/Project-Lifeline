import Coordinate from "./Coordinate.js";

const types = {
    ROADS: 1,
    HOUSES: 2,
    BUILDINGS: 3
}

Object.freeze(types);

export default class Node {
    constructor(coordinate, type) {
        this._this = coordinate;
        this._to = new Map();
        this._type = types[type];
    }

    get coordinates() {
        return this._this;
    }

    goesTo() {
        return this._to;
    }

    checkGoesTo(coordinate) {
        return this._to.has(coordinate);
    }

    getGoesTO(coordinate) {
        return this._to.get(coordinate);
    }

    addTo(node) {
        this._to.add(node.coordinates, node);
    }

    get type() {
        return this._type;
    }

}