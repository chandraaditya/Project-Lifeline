import Node from "./Node.js";
import Coordinate from "./Coordinate.js";
import Road from "./Road.js";
import House from "./House.js";

export default class Hashmap {
    constructor() {
        this._map = new Map();
    }

    addRoad(fromCoordinates, toCoordinates) {
        let from;
         if (this.hasNode(fromCoordinates)) {
            from = this.getNode(fromCoordinates);
         } else {
             from = new Road(fromCoordinates);
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
        this._map.set(node.coordinates, node);
    }

    getNode(coordinates) {
        if (this.hasNode(coordinates)) {
            this._map.get(coordinates);
        } else {
            return null;
        }
    }

    hasNode(coordinates) {
        return this._map.has(coordinates);
    }

}