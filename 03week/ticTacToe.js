"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

let playerTurn = "X";

function printBoard() {
	console.log("   0  1  2");
	console.log("0 " + board[0].join(" | "));
	console.log("  ---------");
	console.log("1 " + board[1].join(" | "));
	console.log("  ---------");
	console.log("2 " + board[2].join(" | "));
}
function horizontalWin() {
const horizontalWin = () => {
	for (let x = 0; x < 3; x++) {
		if (
			board[x][0] == board[x][1] &&
			board[x][1] == board[x][2] &&
			board[x][1] != " "
		) {
			isItAWinner = true;
			console.log("horiz win");
		}
	}
	return isItAWinner;
};

function verticalWin() {
const verticalWin = () => {
	for (let y = 0; y < 3; y++) {
		if (
			board[0][y] == board[1][y] &&
			board[1][y] == board[2][y] &&
			board[1][y] != " "
		) {
			isItAWinner = true;
			console.log("vert win");
		}
	}
	return isItAWinner;
 }
};

function diagonalWin() {
const diagonalWin = () => {
	if (
		(board[0][0] == board[1][1] &&
			board[1][1] == board[2][2] &&
			board[1][1] != " ") ||
		(board[0][2] == board[1][1] &&
			board[1][1] == board[2][0] &&
			board[1][1] != " ")
	) {
		isItAWinner = true;
		console.log("diag win");
	}
	return isItAWinner;
}
};

function checkForWin() {
	const checkForWin = () => {
	return horizontalWin() || verticalWin() || diagonalWin();
	}
};

function ticTacToe(row, column) {
	const ticTacToe = (row, column) => {
	if (isEntryValid(row, column) && isValidPick(row, column)) {
		board[row][column] = playerTurn;
		if (checkForWin()) {
			console.log(playerTurn + " wins!");
			isItAWinner = false;
			resetBoard();
		} else if (checkForDraw()) {
			console.log("It's a draw!");
			resetBoard();
		} else {
			switchPlayers();
		}
	} else console.log("pick a number between 0 and 2!!");
	}
};

function getPrompt() {
	printBoard();
	console.log("It's Player " + playerTurn + "'s turn.");
	rl.question("row: ", row => {
		rl.question("column: ", column => {
			ticTacToe(row, column);
			getPrompt();
		});
	});
};

// Tests

if (typeof describe === "function") {
	describe("#ticTacToe()", () => {
		it("should place mark on the board", () => {
			ticTacToe(1, 1);
			assert.deepEqual(board, [
				[" ", " ", " "],
				[" ", "X", " "],
				[" ", " ", " "]
			]);
		});
		it("should alternate between players", () => {
			ticTacToe(0, 0);
			assert.deepEqual(board, [
				["O", " ", " "],
				[" ", "X", " "],
				[" ", " ", " "]
			]);
		});
		it("should check for vertical wins", () => {
			board = [[" ", "X", " "], [" ", "X", " "], [" ", "X", " "]];
			assert.equal(verticalWin(), true);
		});
		it("should check for horizontal wins", () => {
			board = [["X", "X", "X"], [" ", " ", " "], [" ", " ", " "]];
			assert.equal(horizontalWin(), true);
		});
		it("should check for diagonal wins", () => {
			board = [["X", " ", " "], [" ", "X", " "], [" ", " ", "X"]];
			assert.equal(diagonalWin(), true);
		});
		it("should detect a win", () => {
			assert.equal(checkForWin(), true);
		});
	});
}else {
  getPrompt();
};
