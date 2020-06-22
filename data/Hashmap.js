import Node from "./Node.js";
import Coordinate from "./Coordinate.js";

export default class Hashmap {
    constructor() {
        this._roads = new Map();
    }

    addRoad(fromCoordinates, toCoordinates) {
        let from;
         if (this.hasNode(fromCoordinates)) {
            from = this.getNode(fromCoordinates);
         } else {
             from = new Node(fromCoordinates, 'ROADS');
             this.addNode(from);
         }
         let to;
         if (this.hasNode(toCoordinates)) {
             to = this.getNode(toCoordinates);
         } else {
             to = new Node(toCoordinates, 'ROADS');
             this.addNode(to);
         }
         if (!from.checkGoesTo(toCoordinates)) {
             from.addTo(to);
         }
         if (!to.checkGoesTo(fromCoordinates)) {
             to.addTo(from);
         }
    }

    addHouse(coordinates) {
        if (!this.hasNode(coordinates)) {
            let house = new Node(coordinates, 'HOUSE');
            this.addNode(house);

        }
    }

    addNode(node) {
        this._roads.add(node.coordinates, node);
    }

    getNode(coordinates) {
        this._roads.get(coordinates);
    }

    hasNode(coordinates) {
        return this._roads.has(coordinates);
    }

}