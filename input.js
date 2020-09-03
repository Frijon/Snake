function keyPressed() {

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
	return false;
}
