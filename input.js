function keyPressed() {

	switch (keyCode) {
		case UP_ARROW:
			snake[0].dir = "up";
			break;
		case DOWN_ARROW:
			snake[0].dir = "down";
			break;
		case LEFT_ARROW:
			snake[0].dir = "left";
			break;
		case RIGHT_ARROW:
			snake[0].dir = "right";
			break;
		case 71:
			addbit();
			break;
	}
	return false;
}
