let body = document.querySelector("body");

len = Number(prompt("Enter no. of cells per side"))

for (let i = 0; i < len; i++) {
    let container = document.createElement("div");
    container.className = "row-container";

    for (let i = 0; i < len; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        container.appendChild(cell);
    }

    body.appendChild(container);
}
