let canvas;
let frame;
let snake = [];
var dir = "";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;

function setup() {
	canvas = createCanvas(GAME_WIDTH, GAME_HEIGHT);
	resetGame();
	frame = 0;
	noLoop();
}

function draw() {
	background(0);
	if ((frame % 20) == 0) {
		for (let i = 0; i < snake.length -1; i++) {
			//giving position from front to back
			snake[i].pos.x = snake[i + 1].pos.x;
			snake[i].pos.y = snake[i + 1].pos.y;
		}

		switch (dir) {
			case "left":
				snake[snake.length -1].pos.x += -10;
				break;
			case "right":
				snake[snake.length -1].pos.x += 10;
				break;
			case "up":
				snake[snake.length -1].pos.y += -10;
				break;
			case "down":
				snake[snake.length -1].pos.y += 10;
				break;
		}
	}

	for (let i = 0; i < snake.length; i++){
		snake[i].draw();
		snake[i].update(GAME_WIDTH, GAME_HEIGHT, i);
	}

	frame %= 20;
	frame += 1;
}

function resetGame() {
	snake = [];
	snake[0] = (new Snake(400, 400));
}

function restartGame() {
	noLoop();
	resetGame();
	redraw();
}

function startGame() {
	loop();
}

function stopGame() {
	noLoop();
}
