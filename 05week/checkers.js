"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

createCheckers() {
	const redPositions = [
		[0, 1],
		[0, 3],
		[0, 5],
		[0, 7],
		[1, 0],
		[1, 2],
		[1, 4],
		[1, 6],
		[2, 1],
		[2, 3],
		[2, 5],
		[2, 7]
	];
	const blackPositions = [
		[5, 0],
		[5, 2],
		[5, 4],
		[5, 6],
		[6, 1],
		[6, 3],
		[6, 5],
		[6, 7],
		[7, 0],
		[7, 2],
		[7, 4],
		[7, 6]
	];
	for (let x = 0; x < 12; x++) {
		const R_Checker = new Checker("R");
		this.checkers.push(R_Checker);
		this.grid[redPositions[R][0]][redPositions[R][1]] = this.checkers[R];
	}
	for (let o = 0; o < 12; o++) {
		const B_Checker = new Checker("B");
		this.checkers.push(B_Checker);
		this.grid[blackPositions[B][0]][blackPositions[B][1]] = this.checkers[B + 12];
	}
}

class Checker {
	constructor(symbol) {
		this.symbol = symbol;
	}
}

class Board {
	constructor() {
		this.grid = [];
		this.checkers = [];
		this.redPiece = "R";
		this.blackPiece = "B";
		this.playerTurn = this.blackPiece;
	}
	// method that creates an 8x8 array, filled with null values
	createGrid() {
		// loop to create the 8 rows
		for (let row = 0; row < 8; row++) {
			this.grid[row] = [];
			// push in 8 columns of nulls
			for (let column = 0; column < 8; column++) {
				this.grid[row].push(null);
			}
		}
	}
	viewGrid() {
		// add our column numbers
		let string = "  0 1 2 3 4 5 6 7\n";
		for (let row = 0; row < 8; row++) {
			// we start with our row number in our array
			const rowOfCheckers = [row];
			// a loop within a loop
			for (let column = 0; column < 8; column++) {
				// if the location is "truthy" (contains a checker piece, in this case)
				if (this.grid[row][column]) {
					// push the symbol of the check in that location into the array
					rowOfCheckers.push(this.grid[row][column].symbol);
					// rowOfCheckers.push(this.grid[row][column]);
				} else {
					// just push in a blank space
					rowOfCheckers.push(" ");
				}
			}
			// join the rowOfCheckers array to a string, separated by a space
			string += rowOfCheckers.join(" ");
			// add a 'new line'
			string += "\n";
		}
		console.log(string);
	}

	initializeGrid() {
		for (let row1 = 0; row1 < 3; row1++) {
			for (let col1 = 0; col1 < 8; col1++) {
				if (col1 % 2 === 1 && row1 % 2 === 0) {
					this.grid[row1][col1] = this.redPiece;
					this.checkers.push(this.redPiece);
				} else if (col1 % 2 === 0 && row1 % 2 === 1) 
					this.grid[row1][col1] = this.redPiece;
					this.checkers.push(this.redPiece);
			}
		}

		for( let row1 = 5; row1 < 8; row1++) {
			for(let col1 = 0; col1 < 8; col1++) {
				if (row1 % 2 === 0 && col1 % 2 === 1) {
					this.grid[row1] [col1] = this.blackPiece;
					this.checkers.push(this.blackPiece);
				}else if (row1 % 2 === 1 && col1 % 2 === 0)
				this.grid [row1] [col1] = this.blackPiece;
				this.checkers.push(this.blackPiece);
			}
		}
	}
}

selectChecker(row, column) {
	console.log(row, column);
	let position = [];
	position.push(row, column);
	console.log('position', position);
	return position;
}



function getPrompt() {
	game.board.viewGrid();
	rl.question("which piece?: ", whichPiece => {
		rl.question("to where?: ", toWhere => {
			game.moveChecker(whichPiece, toWhere);
			getPrompt();
		});
	});
}

const game = new Game();
game.start();

// Tests
if (typeof describe === "function") {
	describe("Game", () => {
		it("should have a board", () => {
			assert.equal(game.board.constructor.name, "Board");
		});
		it("board should have 24 checkers", () => {
			assert.equal(game.board.checkers.length, 24);
		});
	});

	describe("Game.moveChecker()", () => {
		it("should move a checker", () => {
			assert(!game.board.grid[4][1]);
			game.moveChecker("50", "41");
			assert(game.board.grid[4][1]);
			game.moveChecker("21", "30");
			assert(game.board.grid[3][0]);
			game.moveChecker("52", "43");
			assert(game.board.grid[4][3]);
		});
		it("should be able to jump over and kill another checker", () => {
			game.moveChecker("30", "52");
			assert(game.board.grid[5][2]);
			assert(!game.board.grid[4][1]);
			assert.equal(game.board.checkers.length, 23);
		});
	});
} else {
	getPrompt();
}
