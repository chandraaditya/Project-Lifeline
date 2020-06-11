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
                gridBoxID.value = `box${i}${j}`;
                gridBox.setAttributeNode(gridBoxID);
                let gridBoxActive = document.createElement("div");
                let gridBoxActiveAttribute = document.createAttribute("class");
                gridBoxActiveAttribute.value = "grid-box-active";
                gridBoxActive.setAttributeNode(gridBoxActiveAttribute);
                let gridBoxActiveID = document.createAttribute("id");
                gridBoxActiveID.value = `activeBox${i}${j}`;
                gridBoxActive.setAttributeNode(gridBoxActiveID);
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