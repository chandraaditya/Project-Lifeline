// <svg height="100vh" width="100vw" style="position: absolute; top: 0; left: 0;">
//     <path id="path" fill="none" stroke-width="2" stroke="black" d="M 100 150 Q 150 50 200 150 Q 250 550 300 150 Q 350 50 400 200 C 450 550 450 50 500 150 C 500 200 550 550 600 150 A 50 50 0 1 1 750 150 C 700 400 700 400 650 500 C 600 550 550 450 500 550 C 500 600 425 525 300 500 C 175 500 225 500 100 500 Z"/>
// </svg>

//Way to create paths using SVG

export default class Dot {
    constructor(x, y, direction = 0) {
        this._x = x;
        this._y = y;
        this._direction = direction;
        Dot._size = 1;
        this._height = Dot._size;
        this._width = Dot._size;
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
        return Dot._size;
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
         let wrapperStyleAttribute = document.createAttribute("style");
         wrapperStyleAttribute.value = "position: absolute; top: " + (this.y - (this.height/2)) + "vh; left: " + (this.x  - (this.width/2)) + "vw;";
         wrapper.setAttributeNode(wrapperStyleAttribute);
        wrapper.setAttributeNode(wrapperIDAttribute);

        let dotWrapper = document.createElement("div");
        let dotWrapperIDAttribute = document.createAttribute("id");
        // let dotStyleAttribute = document.createAttribute("style");
        // dotStyleAttribute.value = "position: absolute; left: " + (-(this.width/2)) + "vh; top: " + (-(this.height/2)) + "vh;";
        dotWrapperIDAttribute.value = "dotWrapper" + this.num;
        dotWrapper.setAttributeNode(dotWrapperIDAttribute);
        // dotWrapper.setAttributeNode(dotStyleAttribute);

        let asset = document.createElement("img");
        let assetClassAttribute = document.createAttribute("class");
        assetClassAttribute.value = "dot-img";
        let assetIDAttribute = document.createAttribute("id");
        assetIDAttribute.value = "dot" + this.num;
        let assetSrcAttribute = document.createAttribute("src");
        assetSrcAttribute.value = this.dotImage;
        let assetStyleAttribute = document.createAttribute("style");
        assetStyleAttribute.value = "transform: rotate(" + this.direction + "deg)";
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