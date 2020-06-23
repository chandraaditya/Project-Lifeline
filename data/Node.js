import Coordinate from "./Coordinate.js";

export default class Node {
    constructor(coordinate, type) {
        this._this = coordinate;
        this._type = type;
    }

    get coordinates() {
        return this._this;
    }

    get type() {
        return this._type;
    }

}