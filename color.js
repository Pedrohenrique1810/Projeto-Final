let container = document.querySelector(".container");

let gridButton = document.querySelector("#submit-grid");
let clearGridButton = document.querySelector("#clear-grid");

let gridWidth = document.querySelector("#width-range");
let gridHeight = document.querySelector("#height-range");

let colorInput = document.querySelector("#color-input");

let eraseBtn = document.querySelector("#erase-btn");
let paintBtn = document.querySelector("#paint-btn");

let widthValue = document.querySelector("#width-value");
let heightValue = document.querySelector("#height-value");

let draw = false;
let erase = false;

widthValue.innerHTML = gridWidth.value;
heightValue.innerHTML = gridHeight.value;

gridWidth.addEventListener("input", () => {
    widthValue.innerHTML = gridWidth.value;
});

gridHeight.addEventListener("input", () => {
    heightValue.innerHTML = gridHeight.value;
});

paintBtn.addEventListener("click", () => {
    erase = false;
});

eraseBtn.addEventListener("click", () => {
    erase = true;
});

gridButton.addEventListener("click", createGrid);

clearGridButton.addEventListener("click", () => {
    let cells = document.querySelectorAll(".gridCol");

    cells.forEach((cell) => {
        cell.style.backgroundColor = "transparent";
    });
});

function createGrid(){

    container.innerHTML = "";

    container.style.gridTemplateColumns =
        `repeat(${gridWidth.value}, 20px)`;

    let totalCells = gridWidth.value * gridHeight.value;

    for(let i = 0; i < totalCells; i++){

        let cell = document.createElement("div");

        cell.classList.add("gridCol");

        cell.addEventListener("mousedown", colorCell);

        cell.addEventListener("mouseover", (e) => {
            if(draw){
                colorCell(e);
            }
        });

        container.appendChild(cell);
    }
}

function colorCell(e){

    draw = true;

    if(erase){
        e.target.style.backgroundColor = "transparent";
    }
    else{
        e.target.style.backgroundColor =
            colorInput.value;
    }
}
document.body.onmouseup = () => {
    draw = false;
};