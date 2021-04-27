let canvasGame = document.getElementById("snake");
let context = canvasGame.getContext("2d");

let box = 32;

let start = document.getElementById("start");
start.addEventListener("click", startGame);

function startGame() {
    let game = setInterval(createBG, 100);
    start.remove(start);
    canvasGame.style.display = "block";
}

function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

