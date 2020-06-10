export default class Dot {
    constructor(x, y, direction) {
        this._x = x;
        this._y = y;
        this._direction = direction;
        this._size = 2;
        this._height = this._size;
        this._width = this._size;
        this._dotImage = "assets/U.svg";
        Dot.newDotCreated();
        this._num = Dot.numDots;
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

    get dotImage() {
        return this._dotImage;
    }

    get direction() {
        return this._direction;
    }

    get dot() {
        return this._dot;
    }

    get ID() {
        return "dotWrapper" + this.num;
    }

    get size() {
        return this._size;
    }

    static get numDots() {
        return Dot._numDots;
    }

    static newDotCreated() {
        if (typeof Dot._numDots === 'undefined') {
            Dot._numDots = 0;
        } else {
            Dot._numCars += 1;
        }
    }

    create() {
        let wrapper = document.createElement("div");
        let wrapperIDAttribute = document.createAttribute("id");
        wrapperIDAttribute.value = "dotPathWrapper" + this.num;
        // let wrapperStyleAttribute = document.createAttribute("style");
        // wrapperStyleAttribute.value = "position: absolute; top: " + (this.y - (this.height/2)) + "vh; left: " + (this.x  - (this.width/2)) + "vw;";
        // wrapper.setAttributeNode(wrapperStyleAttribute);
        wrapper.setAttributeNode(wrapperIDAttribute);

        let dotWrapper = document.createElement("div");
        let dotWrapperIDAttribute = document.createAttribute("id");
        let dotStyleAttribute = document.createAttribute("style");
        dotStyleAttribute.value = "position: absolute; left: " + (-(this.width/2)) + "vh; top: " + (-(this.height/2)) + "vh;";
        dotWrapperIDAttribute.value = "dotWrapper" + this.num;
        dotWrapper.setAttributeNode(dotWrapperIDAttribute);
        dotWrapper.setAttributeNode(dotStyleAttribute);

        let asset = document.createElement("img");
        let assetClassAttribute = document.createAttribute("class");
        assetClassAttribute.value = "dot_img";
        let assetIDAttribute = document.createAttribute("id");
        assetIDAttribute.value = "dot" + this.num;
        let assetSrcAttribute = document.createAttribute("src");
        assetSrcAttribute.value = this.dotImage;
        let assetStyleAttribute = document.createAttribute("style");
        assetStyleAttribute.value = "height: " + this.size + "vh; width: " + this.size + "vh; transform: rotate(" + this.direction + "deg)";
        // transform: rotate(" + this.direction + "deg)
        //
        asset.setAttributeNode(assetClassAttribute);
        asset.setAttributeNode(assetIDAttribute);
        asset.setAttributeNode(assetSrcAttribute);
        asset.setAttributeNode(assetStyleAttribute);

        dotWrapper.appendChild(asset);
        wrapper.appendChild(dotWrapper);

        this._dot = wrapper;
    }

    render() {
        let world = document.getElementById("world");
        world.appendChild(this.dot);
    }
}