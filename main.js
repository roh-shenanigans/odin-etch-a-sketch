let scratchpad = document.querySelector("#scratchpad");

let newGridBtn = document.querySelector("#create-grid");
newGridBtn.addEventListener("click", createGrid);


// For the initial 16x16 grid
for (let i = 0; i < 16; i++) {
    let container = document.createElement("div");
    container.className = "row-container";

    for (let i = 0; i < 16; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("mouseover", paintCell);
        container.appendChild(cell);
    }

    scratchpad.appendChild(container);    
}


function createGrid(event) {
    len = Number(prompt("Enter no. of cells per side"))

    if (len === null) {
        return;
    }

    if (len > 100) {
        alert("Maximum grid size is 100x100 cells, please enter a smaller value");
        return;
    }

    scratchpad.replaceChildren();
    
    for (let i = 0; i < len; i++) {
        let container = document.createElement("div");
        container.className = "row-container";

        for (let i = 0; i < len; i++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.addEventListener("mouseover", paintCell);
            container.appendChild(cell);
        }

        scratchpad.appendChild(container);
    }

    console.log("Grid created");
}

function paintCell(event) {
    let cell = event.target;

    cell.style.backgroundColor = "grey";
}