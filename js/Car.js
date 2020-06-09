export default class Car {
    constructor(x, y, direction) {
        this._x = x;
        this._y = y;
        this._direction = direction;
        let dimensions = 5;
        this._height = dimensions;
        this._width = dimensions;
        this._carImg = "assets/car.svg";
        Car.newCarCreated();
        this._id = Car._numCars;
        this.render();
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get id() {
        return this._id;
    }

    get height() {
        return this._height;
    }

    get width() {
        return this._width;
    }

    get carImg() {
        return this._carImg;
    }

    get direction() {
        return this._direction;
    }

    static get numCars() {
        return Car._numCars;
    }

    static newCarCreated() {
        if (typeof Car._numCars === 'undefined') {
            Car._numCars = 0;
        } else {
            Car._numCars += 1;
        }
    }

    render() {
        let world = document.getElementById("world");

        let wrapper = document.createElement("div");
        let wrapperIDAttribute = document.createAttribute("id");
        wrapperIDAttribute.value = "carWrapper" + this.id;
        let wrapperStyleAttribute = document.createAttribute("style");
        wrapperStyleAttribute.value = "position: absolute; top: " + (this.y - (this.height/2)) + "vh; left: " + (this.x  - (this.width/2)) + "vw; height: " + this.height + "vh; transform: rotate(" + this.direction + "deg); margin: 0;";
        wrapper.setAttributeNode(wrapperIDAttribute);
        wrapper.setAttributeNode(wrapperStyleAttribute);

        let car = document.createElement("div");
        let carClassAttribute = document.createAttribute("class");
        carClassAttribute.value = "car";
        let carIDAttribute = document.createAttribute("id");
        carIDAttribute.value = "car" + this.id;
        let carStyleAttribute = document.createAttribute("style");
        carStyleAttribute.value = "margin: 0;";
        car.setAttributeNode(carClassAttribute);
        car.setAttributeNode(carIDAttribute);
        car.setAttributeNode(carStyleAttribute);

        let asset = document.createElement("img");
        let assetClassAttribute = document.createAttribute("class");
        assetClassAttribute.value = "car_img";
        let assetSrcAttribute = document.createAttribute("src");
        assetSrcAttribute.value = this.carImg;
        let assetStyleAttribute = document.createAttribute("style");
        assetStyleAttribute.value = "margin: 0; height: " + this.height + "vh";
        asset.setAttributeNode(assetClassAttribute);
        asset.setAttributeNode(assetSrcAttribute);
        asset.setAttributeNode(assetStyleAttribute);

        car.appendChild(asset);
        wrapper.appendChild(car);

        world.appendChild(wrapper);
    }
}