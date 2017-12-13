const ALFABETO = "abcdefghijklmnñopqrstuvwxyz";

class Rosco {
	constructor() {
		this.letters = [];
		for (var i in ALFABETO) {
			this.letters.push( new Letter(ALFABETO[i]));
		}
		this.selected = 0;
		this.letters[this.selected].select();
		this.aciertos = 0;
		this.fallos = 0;
	}

	show() {
		translate(width/2, height/2);
		const angle = 2*PI/ALFABETO.length;
		for (var i in ALFABETO) {
			push();
			translate(250*cos(i*angle - PI/2), 250*sin(i*angle - PI/2));
			this.letters[i].draw(35);
			pop();
		}
	}

	pasapalabra() {
		this.letters[this.selected].unselect();
		this.selected++;
		var a = true;
		while(a) {
			if (this.selected == this.letters.length)
				this.selected = 0;
			if (this.letters[this.selected].isBlue())
				a = false;
			else
				this.selected++;
		}
		this.letters[this.selected].select();
	}
}
