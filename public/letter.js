const RED = '#ff0000';
const GREEN = '#00ff00';
const LBLUE = '#0000ff';
const BLUE = '#000050';

class Letter {
	constructor(c) {
		this.c = c.toUpperCase();
		this.color = BLUE;
	}

	draw(size) {
		fill(this.color);
		stroke('#ffffff');
		strokeWeight(2);
		ellipse(0, 0, size, size);
		fill(255);
		noStroke();
		textSize(size*0.7);
		textAlign(CENTER, CENTER);
		text(this.c, 0, size*0.1);
	}

	select() {
		if (this.color != BLUE)
			return false;
		var that = this;
		this.i = setInterval(function() {
			if (that.color == BLUE)
				that.color = LBLUE;
			else
				that.color = BLUE;
		}, 500);
		return true;
	}

	unselect() {
		clearInterval(this.i);
		this.color = BLUE;
	}


	setRed() {
		this.unselect();
		this.color = RED;
	}

	setGreen() {
		this.unselect();
		this.color = GREEN;
	}

	isBlue() {
		return this.color == BLUE;
	}
}
