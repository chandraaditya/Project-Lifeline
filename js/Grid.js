import Roads from "./Roads.js";

export default class Grid{
    constructor() {
        this.create();
        this.render();
    }

    create() {
        let gridContainer = document.createElement("div");
        let gridContainerClass = document.createAttribute("class");
        gridContainerClass.value = "grid-container";
        gridContainer.setAttributeNode(gridContainerClass);

        for (let i = 0; i < 25; i++) {
            let gridRow = document.createElement("div");
            let gridRowClass = document.createAttribute("class");
            gridRowClass.value = "row-container";
            gridRow.setAttributeNode(gridRowClass);
            let gridRowID = document.createAttribute("id");
            gridRowID.value = `row${i}`;
            gridRow.setAttributeNode(gridRowID);
            for ( let j = 0; j < 25; j++) {
                let gridBox = document.createElement("div");
                let gridBoxClass = document.createAttribute("class");
                gridBoxClass.value = "grid";
                gridBox.setAttributeNode(gridBoxClass);
                let gridBoxID = document.createAttribute("id");
                gridBoxID.value = `box ${i} ${j}`;
                gridBox.setAttributeNode(gridBoxID);

                let road = document.createElement("div");
                let roadClass = document.createAttribute("class");
                roadClass.value = "road";
                road.setAttributeNode(roadClass);
                let roadID = document.createAttribute("id");
                roadID.value = `road ${i} ${j}`;
                road.setAttributeNode(roadID);
                let roadX = document.createAttribute("data-x");
                roadX.value = `${i}`;
                road.setAttributeNode(roadX);
                let roadY = document.createAttribute("data-y");
                roadY.value = `${j}`;
                road.setAttributeNode(roadY);

                let gridBoxActive = document.createElement("div");
                let gridBoxActiveAttribute = document.createAttribute("class");
                gridBoxActiveAttribute.value = "grid-box-active";
                gridBoxActive.setAttributeNode(gridBoxActiveAttribute);
                let gridBoxActiveID = document.createAttribute("id");
                gridBoxActiveID.value = `activeBox ${i} ${j}`;
                gridBoxActive.setAttributeNode(gridBoxActiveID);
                gridBoxActive.addEventListener("mouseover", () => {
                    if (gridBox.id !== Roads.current) {
                        Roads.current = road.id;
                        Roads.startDrawing = true;
                    } else {
                        Roads.startDrawing = false;
                    }
                });

                gridBox.appendChild(road);
                gridBox.appendChild(gridBoxActive);
                gridRow.appendChild(gridBox);
            }
            gridContainer.appendChild(gridRow);
        }
        this._gridContainer = gridContainer;
    }

    render() {
        let world = document.getElementById("world");
        world.appendChild(this._gridContainer);
    }

}

// let drag = false;
//
// document.addEventListener('mousedown', () => drag = false);
// document.addEventListener('mousemove', () => drag = true);
// document.addEventListener('mouseup', () => console.log(drag ? 'drag' : 'click'));