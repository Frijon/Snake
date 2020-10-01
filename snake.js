class Snake {

	constructor(posx, posy) {
		this.width = 10;
		this.height = 10;

		this.pos = {
			x: (posx),
			y: (posy),
		}
	}

	update(gameWidth, gameHeight, snakeBit){
		if ((this.pos.x + this.width) <= 0 || (this.pos.x) >= gameWidth || (this.pos.y + this.height) <= 0 || (this.pos.y) >= gameHeight) {
			alert("You lost!");
			// stopGame();
			restartGame();
		}
		if (snakeBit + 1 < snake.length){
			compare(snake[snakeBit].pos.x, snake[snakeBit + 1].pos.x);
		// } else {
		//fix 
		//
		// }
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

function compare(posx, posy){
	if (pos1 == pos2) {
		return true;
	} else {
		return false;
	}
}
