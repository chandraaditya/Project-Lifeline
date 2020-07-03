import Node from "./Node.js";
import Hashmap from "./Hashmap.js";
import Coordinate from "./Coordinate.js";

export default class House extends Node{
    constructor(coordinates) {
        super(coordinates, 'HOUSE');
        this._to = null;
    }

    get to() {
        return this._to;
    }

    set to(value) {
        this._to = value;
    }
}

