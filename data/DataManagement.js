import Hashmap from "./Hashmap.js";
import Coordinate from "./Coordinate";

let hashmap = new Hashmap();

function add(x1, y1, x2, y2) {
    let from = new Coordinate(x1, y1);
    let to = new Coordinate(x2, y2);
    if (hashmap.has(from)) {
        let grid = hashmap.get(from);

    }

}