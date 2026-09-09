/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let container = document.querySelector("container");
let clearButton = document.querySelector("#clearContainer");

for (let i = 0; i < 2500; i++) {
    let square = document.createElement("square");
    square.addEventListener("mousedown", changeColor);
    square.addEventListener("mouseenter", event => {
        if (event.buttons === 1) {
            changeColor(event);
        }
    });

    container.appendChild(square);
}

function changeColor(event) {
    event.target.style.backgroundColor = "blue";
}

clearButton.addEventListener("click", clearContainer);
    function clearContainer() {
    let squares = document.querySelectorAll("square");
    squares.forEach(square => {
        square.style.backgroundColor = "whitesmoke";
    });
}