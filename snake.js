class Snake {

	constructor(gameWidth, gameHeight) {
		this.width = 10;
		this.height = 10;

		this.pos = {
			x: (400),
			y: (400),
		}
	}

	update() {
		if ((frame % 20) == 0) {
			if (snake.length != 1) {
				for (let i = 0; i < snake.length -1; ++i) {
						//giving position from front to back
						snake[i].pos.x = snake[i + 1].pos.x;
						snake[i].pos.y = snake[i + 1].pos.y;
				}
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
				//control loop
			for (let i = 0; i < snake.length; ++i){
				console.log("snake[" + [i] +"].pos.x, y = " + snake[i].pos.x + ", " + snake[i].pos.y);
			}
		}
	}

	draw() {
		fill(255, 255, 255);
		rect(this.pos.x, this.pos.y, this.width, this.height);
	}
}

function addbit() {
	console.log("snake.length = " + snake.length);
	snake[snake.length] = new Snake(800, 500);
}
