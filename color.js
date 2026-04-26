let wrapper = document.querySelector(".wrapper");
let gridButton = document.querySelector("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.querySelector("width-range");
let gridHeigth = document.querySelector("heigth-range");
let ColorButton = document.querySelector("color-btn");
let erasebtn = document.querySelector("erase-btn");
let paintBtn = document.querySelector("paint-btn");
let widthValue = document.querySelector("width-value");
let heigthValue = document.querySelector("heigth-value");

let events {
    mouse: {
        down: "mousedown";
        move: "mousemove";
        up: "mouseap"
    },
    touch: {
        down: "touchdown",
        mobe: "tochmobe",
        up: "touchmobe",
    },
};

let deviceType = "";
let draw = false;
let erase = false;
    

