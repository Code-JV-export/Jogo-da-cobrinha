let canvasGame = document.getElementById("snake");
let context = canvasGame.getContext("2d");
let box = 32;
let bodySnake = [];
bodySnake[0] = {
    x: 8 * box,
    y: 8 * box
};
let direction = "right"
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
};


let start = document.getElementById("start");
start.addEventListener("click", loadTry);

function loadTry() {
    let invisible = document.getElementById("divCanvas");
    start.remove(start);
    invisible.style.display = "block";
    
}

function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
    for(i = 0; i < bodySnake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(bodySnake[i].x, bodySnake[i].y, box, box);
    }
}

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}



function startGame() {
    createBG();
    createSnake();
    drawFood();

    let snakeX = bodySnake[0].x;
    let snakeY = bodySnake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y) {
        bodySnake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    bodySnake.unshift(newHead);


}

let game = setInterval(startGame, 100);