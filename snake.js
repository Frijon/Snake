class Snake {

	constructor(gameWidth, gameHeight) {
		this.width = 10;
		this.height = 10;

		this.pos = {
			x: (400),
			y: (400),
		}

		this.dir = "left";
	}

	update() {
		if ((frame % 10) == 0) {

			for (let i = 0; i < snake.length; ++i) {
				if (snake.length != 1){
					snake[snake.length -1 - i].pos.x = snake[snake.length - 2].pos.x;
					snake[i].pos.y = snake[i + 1].pos.y;

					//fix bit position update
				}
			}

			switch (this.dir) {
				case "left":
					this.pos.x += -10;
					break;
				case "right":
					this.pos.x += 10;
					break;
				case "up":
					this.pos.y += -10;
					break;
				case "down":
					this.pos.y += 10;
					break;
			}
		}
	}

	addbit(){
		var i = body.length;
		body[i] = new Snake(800, 500);
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
