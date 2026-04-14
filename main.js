let scratchpad = document.querySelector("#scratchpad");
scratchpad.addEventListener("mouseover", paintCell);

let newGridBtn = document.querySelector("#create-grid");
newGridBtn.addEventListener("click", createGrid);

let modeSelector = document.querySelector("#mode-btns");
modeSelector.addEventListener("click", setPaintMode);

// For the initial 16x16 grid
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

function setPaintMode(event) {
    // console.log("Works");
    let tempPad = scratchpad.cloneNode(true);
    scratchpad.replaceWith(tempPad);
    scratchpad = tempPad;

    let btn = event.target;

    switch (btn.id) {
        case "regular-mode":
            scratchpad.addEventListener("mouseover", paintCell);
            alert();
            break;
        
        case "random-color-mode":
            scratchpad.addEventListener("mouseover", paintCellRandom);
            alert();
            break;

        case "gradual-mode":
            scratchpad.addEventListener("mouseover", paintCellGradual);
            alert();
            break;

        default:
            break;
    }
}

function createGrid(event) {
    let input = prompt("Enter no. of cells per side");
    
    if (input === null) {
        return;
    }

    let len = Number(input);

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
            container.appendChild(cell);
        }

        scratchpad.appendChild(container);
    }

    console.log("Grid created");
}

function paintCell(event) {
    let cell = event.target;

    cell.style.backgroundColor = "grey";
    cell.classList.add("painted");
}

function paintCellGradual(event) {
    let cell = event.target;
    
    let filterVal = window.getComputedStyle(cell).filter;
    console.log(filterVal); 
    let brightness = parseFloat(filterVal.slice(11));
    console.log(brightness)

    cell.style.filter = `brightness(${brightness - 0.1})`;
}

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${blue}, ${green})`;
}

function paintCellRandom(event) {
    let cell = event.target;    

    cell.style.backgroundColor = getRandomColor();
    cell.classList.add("painted");
}
