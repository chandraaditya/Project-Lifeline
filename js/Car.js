export default class Car {
    constructor(x, y, direction) {
        this._x = x;
        this._y = y;
        this._direction = direction;
        this._height = 4;
        this._width = this.height/2;
        this._carImg = "assets/car.svg";
        Car.newCarCreated();
        this._id = Car._numCars;
        this.create();
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

    get car() {
        return this._car;
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
        wrapperIDAttribute.value = "carWrapper" + this.id;
        let wrapperStyleAttribute = document.createAttribute("style");
        wrapperStyleAttribute.value = "position: relative; top: " + (this.y - (this.height/2)) + "vh; left: " + (this.x  - (this.width/2)) + "vw; transform: rotate(" + this.direction + "deg); margin: 0;";
        wrapper.setAttributeNode(wrapperIDAttribute);
        wrapper.setAttributeNode(wrapperStyleAttribute);

        let car = document.createElement("div");
        let carClassAttribute = document.createAttribute("class");
        carClassAttribute.value = "car";
        let carIDAttribute = document.createAttribute("id");
        carIDAttribute.value = "car" + this.id;
        let carStyleAttribute = document.createAttribute("style");
        carStyleAttribute.value = "height: " + this.height + "vh;";
        car.setAttributeNode(carClassAttribute);
        car.setAttributeNode(carIDAttribute);
        car.setAttributeNode(carStyleAttribute);

        let asset = document.createElement("img");
        let assetClassAttribute = document.createAttribute("class");
        assetClassAttribute.value = "car_img";
        let assetSrcAttribute = document.createAttribute("src");
        assetSrcAttribute.value = this.carImg;
        let assetStyleAttribute = document.createAttribute("style");
        assetStyleAttribute.value = "height: " + this.height + "vh";
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