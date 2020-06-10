export default class Car {
    constructor(x, y, direction) {
        this._x = x;
        this._y = y;
        this._direction = direction;
        this._size = 4;
        this._height = this._size;
        this._width = this._size;
        this._carImg = "assets/car.svg";
        Car.newCarCreated();
        this._num = Car.numCars;
        this.create();
        this.render();
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get num() {
        return this._num;
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

    get car() {
        return this._car;
    }

    get ID() {
        return "car" + this.num;
    }

    get size() {
        return this._size;
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

    create() {
        let wrapper = document.createElement("div");
        let wrapperIDAttribute = document.createAttribute("id");
        wrapperIDAttribute.value = "carWrapper" + this.num;
        let wrapperStyleAttribute = document.createAttribute("style");
        wrapperStyleAttribute.value = "position: absolute; top: " + (this.y - (this.height/2)) + "vh; left: " + (this.x  - (this.width/2)) + "vw; transform: rotate(" + this.direction + "deg); ";
        wrapper.setAttributeNode(wrapperIDAttribute);
        wrapper.setAttributeNode(wrapperStyleAttribute);

        let car = document.createElement("div");
        let carClassAttribute = document.createAttribute("class");
        carClassAttribute.value = "car";
        let carIDAttribute = document.createAttribute("id");
        carIDAttribute.value = "car" + this.num;
        let carStyleAttribute = document.createAttribute("style");
        carStyleAttribute.value = "height: " + this.height + "vh; width: " + this.width + "vh; position: relative; transform: rotate(" + this.direction + "deg); ";
        car.setAttributeNode(carClassAttribute);
        car.setAttributeNode(carIDAttribute);
        car.setAttributeNode(carStyleAttribute);

        let asset = document.createElement("img");
        let assetClassAttribute = document.createAttribute("class");
        assetClassAttribute.value = "car_img";
        let assetSrcAttribute = document.createAttribute("src");
        assetSrcAttribute.value = this.carImg;
        let assetStyleAttribute = document.createAttribute("style");
        assetStyleAttribute.value = "transform: rotate(" + this.direction + "deg); height: " + this.size + "vh;" + "position: relative; margin: 0;";
        asset.setAttributeNode(assetClassAttribute);
        asset.setAttributeNode(assetSrcAttribute);
        asset.setAttributeNode(assetStyleAttribute);

        car.appendChild(asset);
        wrapper.appendChild(car);

        this._car = wrapper;
    }

    render() {
        let world = document.getElementById("world");
        world.appendChild(this.car);
    }
}