let canvas;
let gameRunning;
let frame;
let snake = [];

const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;

function setup() {
	canvas = createCanvas(GAME_WIDTH, GAME_HEIGHT);
	resetGame();
	frame = 0;
	noLoop();
}

function draw() {
	gameRunning = true;
	background(0, 0, 0);
	keyPressed();
	console.log("snake.length = " + snake.length);
	for (let i = 0; i < snake.length; ++i){
		console.log("i = " + i);
		snake[i].update();
		snake[i].draw();
	}

	frame += 1;
	if (frame >= 100000000000000){
		frame = 0;
	}
}

function resetGame() {
	snake = [];
	snake[0] = (new Snake(GAME_WIDTH, GAME_HEIGHT));
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

//fix adding only one bit at a time
//fix position update from the back of the array
//add basically the whole game 