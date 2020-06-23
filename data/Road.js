import Node from "./Node.js";

export default class Road extends Node {
    constructor(coordinates) {
        super(coordinates, 'ROAD');
        this._to = new Map();
    }

    checkGoesTo(coordinates) {
        return this._to.has(coordinates);
    }

    addTo(Node) {
        if (!this.checkGoesTo(Node.coordinates)) {
            this._to.set(Node.coordinates, Node);
        }
    }

}