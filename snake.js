class Snake {

	constructor(posx, posy) {
		this.width = 10;
		this.height = 10;

		this.pos = {
			x: (posx),
			y: (posy),
		}
	}

	update(gameWidth, gameHeight){
		if ((this.pos.x + this.width) <= 0 || (this.pos.x) >= gameWidth || (this.pos.y + this.height) <= 0 || (this.pos.y) >= gameHeight) {
			alert("You lost!");
			// stopGame();
			restartGame();
		}
	}

	draw() {
		fill(255);
		if(this == snake[snake.length -1]) {
			fill(0, 255, 255);
		}
		rect(this.pos.x, this.pos.y, this.width, this.height);
	}

	static addbit() {
		snake.unshift(new Snake(snake[0].pos.x, snake[0].pos.y));
	}

}
