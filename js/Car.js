export default class Car {
    constructor(x, y) {
        this._x = x;
        this._y = y;
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
        let wrapperClassAttribute = document.createAttribute("id");
        wrapperClassAttribute.value = this.id;
        wrapper.setAttributeNode(wrapperClassAttribute);

        let car = document.createElement("div");
        let carClassAttribute = document.createAttribute("class");
        carClassAttribute.value = "car";
        let carStyleAttribute = document.createAttribute("style");
        carStyleAttribute.value = "position: absolute; top: " + (this.y - (this.height/2)) + "vh; left: " + (this.x  - (this.width/2)) + "vw; height: " + this.height + "vh; width: " + this.width + "vh;";
        car.setAttributeNode(carClassAttribute);
        car.setAttributeNode(carStyleAttribute);

        let asset = document.createElement("img");
        let assetClassAttribute = document.createAttribute("class");
        assetClassAttribute.value = "car_img";
        let assetSrcAttribute = document.createAttribute("src");
        assetSrcAttribute.value = this.carImg;
        asset.setAttributeNode(assetClassAttribute);
        asset.setAttributeNode(assetSrcAttribute);

        car.appendChild(asset);
        wrapper.appendChild(car);

        world.appendChild(wrapper);
    }
}