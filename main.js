let scratchpad = document.querySelector("#scratchpad");

let newGridBtn = document.querySelector("#create-grid");
newGridBtn.addEventListener("click", createGrid);


for (let i = 0; i < 16; i++) {
    let container = document.createElement("div");
    container.className = "row-container";

    for (let i = 0; i < 16; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        container.appendChild(cell);
    }

    scratchpad.appendChild(container);    
}


function createGrid(event) {
    scratchpad.replaceChildren();
    len = Number(prompt("Enter no. of cells per side"))

    for (let i = 0; i < len; i++) {
        let container = document.createElement("div");
        container.className = "row-container";

        for (let i = 0; i < len; i++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            container.appendChild(cell);
        }

        scratchpad.appendChild(container);
    }

    console.log("Grid created");
}

