function keyPressed() {

	if (snake.length != 1){
		switch (keyCode) {
			case UP_ARROW:
				if (dir == "down"){
					break;
				} else {
					dir = "up";
				}
				break;
			case DOWN_ARROW:
				if (dir == "up"){
					break;
				} else {
					dir = "down";
				}
				break;
			case LEFT_ARROW:
				if (dir == "right") {
					break;
				} else {
					dir = "left";
				}
				break;
			case RIGHT_ARROW:
				if (dir == "left") {
					break;
				} else {
					dir = "right";
				}
				break;
			case 71:
				Snake.addbit();
				break;
		}
	} else {
		switch (keyCode) {
			case UP_ARROW:
				dir = "up";
				break;
			case DOWN_ARROW:
				dir = "down";
				break;
			case LEFT_ARROW:
				dir = "left";
				break;
			case RIGHT_ARROW:
				dir = "right";
				break;
			case 71:
				Snake.addbit();
				break;
		}
	}

	return false;
}
