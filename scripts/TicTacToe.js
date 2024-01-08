// Contains the Game Logic

gameContainer = document.getElementById("game-container");
start = document.getElementById("start-game");
gameResult = document.getElementById("game-result");
output = document.querySelector("#game-result h2");
playerTurnName = document.getElementById("player-turn");

// 1 = player 1, 2 = player 2
let turn;
let lastPlayer; // holds the value of the last player (restart)
let boxSelected = 0;

// Box Variables
let boxOne = document.getElementById("row-one-one");
let boxTwo = document.getElementById("row-one-two");
let boxThree = document.getElementById("row-one-three");
let boxFour = document.getElementById("row-two-one");
let boxFive = document.getElementById("row-two-two");
let boxSix = document.getElementById("row-two-three");
let boxSeven = document.getElementById("row-three-one");
let boxEight = document.getElementById("row-three-two");
let boxNine = document.getElementById("row-three-three");

let allBoxes = document.getElementsByClassName("box");

// Checks Adjacency (2D Array)
let rows = [
  [null, null, null], // Row 1
  [null, null, null], // Row 2
  [null, null, null], // Row 3
];

// Shows the row and column of the boxed pressed for adjacency
let boxes = [
  { row: 0, col: 0 }, // Box 1
  { row: 0, col: 1 }, // Box 2
  { row: 0, col: 2 }, // Box 3
  { row: 1, col: 0 }, // Box 4
  { row: 1, col: 1 }, // Box 5
  { row: 1, col: 2 }, // Box 6
  { row: 2, col: 0 }, // Box 7
  { row: 2, col: 1 }, // Box 8
  { row: 2, col: 2 }, // Box 9
];

// Starts the Game
start.addEventListener("click", () => {
  turn = 1;
  lastPlayer = turn;
  gameContainer.style.display = "block";
  gameResult.style.display = "none";
  boxSelected = 0;

  // Sets all row values to random numbers greater than 2
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      rows[i][j] = Math.random() * 8 + 3;
    }
  }

  // Removes the selected class name from all the boxes
  for (let i = 0; i < 9; i++) {
    allBoxes[i].classList.remove("selected");
    allBoxes[i].children[0].textContent = "";
  }
});

// Checks if there is a winner
function checkAdjacency() {
  if (
    (rows[0][0] === rows[1][0] && rows[1][0] === rows[2][0]) ||
    (rows[0][1] === rows[1][1] && rows[1][1] === rows[2][1]) ||
    (rows[0][2] === rows[1][2] && rows[1][2] === rows[2][2])
  ) {
    return true;
  }
  // Checks the rows
  else if (
    (rows[0][0] === rows[0][1] && rows[0][1] === rows[0][2]) ||
    (rows[1][0] === rows[1][1] && rows[1][1] === rows[2][1]) ||
    (rows[2][0] === rows[2][1] && rows[2][1] === rows[2][2])
  ) {
    return true;
  }
  // Checks the diagonals
  else if (
    (rows[0][0] === rows[1][1] && rows[1][1] === rows[2][2]) ||
    (rows[2][0] === rows[1][1] && rows[1][1] === rows[0][2])
  ) {
    return true;
  } else {
    return false;
  }
}

function gameLogic(row, col, player) {
  lastPlayer = turn;
  rows[row][col] = player; // Tells what boxes selected by the player.

  // If there is a winner
  if (checkAdjacency() === true) {
    gameResult.style.display = "block";

    if (player === 1) {
      output.textContent = playerOne.textContent + " Wins";
    } else {
      output.textContent = playerTwo.textContent + " Wins";
    }
  }
  // If the game is not finished, and all boxes are not yet selected
  else if (boxSelected != 9) {
    // Changes the turn into the current player's name
    if (turn === 1) {
      playerTurnName.textContent = playerOne.textContent;
    } else {
      playerTurnName.textContent = playerTwo.textContent;
    }
  }
  // If the game is draw
  else {
    output.textContent = "Draw!";
    gameResult.style.display = "block";
  }
}

// Box functionalities
boxOne.addEventListener("click", (event) => {
  event.target.classList.add("selected");
  boxSelected++;
  // Changes the turn player and add symbols to the boxes
  if (turn === 1) {
    event.target.children[0].textContent = "X";
    turn = 2;
  } else {
    event.target.children[0].textContent = "O";
    turn = 1;
  }
  gameLogic(boxes[0].row, boxes[0].col, lastPlayer);
});

boxTwo.addEventListener("click", (event) => {
  event.target.classList.add("selected");
  boxSelected++;
  // Changes the turn player and add symbols to the boxes
  if (turn === 1) {
    event.target.children[0].textContent = "X";
    turn = 2;
  } else {
    event.target.children[0].textContent = "O";
    turn = 1;
  }
  gameLogic(boxes[1].row, boxes[1].col, lastPlayer);
});

boxThree.addEventListener("click", (event) => {
  event.target.classList.add("selected");
  boxSelected++;
  // Changes the turn player and add symbols to the boxes
  if (turn === 1) {
    event.target.children[0].textContent = "X";
    turn = 2;
  } else {
    event.target.children[0].textContent = "O";
    turn = 1;
  }
  gameLogic(boxes[2].row, boxes[2].col, lastPlayer);
});

boxFour.addEventListener("click", (event) => {
  event.target.classList.add("selected");
  boxSelected++;
  // Changes the turn player and add symbols to the boxes
  if (turn === 1) {
    event.target.children[0].textContent = "X";
    turn = 2;
  } else {
    event.target.children[0].textContent = "O";
    turn = 1;
  }
  gameLogic(boxes[3].row, boxes[3].col, lastPlayer);
});

boxFive.addEventListener("click", (event) => {
  event.target.classList.add("selected");
  boxSelected++;
  // Changes the turn player and add symbols to the boxes
  if (turn === 1) {
    event.target.children[0].textContent = "X";
    turn = 2;
  } else {
    event.target.children[0].textContent = "O";
    turn = 1;
  }
  gameLogic(boxes[4].row, boxes[4].col, lastPlayer);
});

boxSix.addEventListener("click", (event) => {
  event.target.classList.add("selected");
  boxSelected++;
  // Changes the turn player and add symbols to the boxes
  if (turn === 1) {
    event.target.children[0].textContent = "X";
    turn = 2;
  } else {
    event.target.children[0].textContent = "O";
    turn = 1;
  }
  gameLogic(boxes[5].row, boxes[5].col, lastPlayer);
});

boxSeven.addEventListener("click", (event) => {
  event.target.classList.add("selected");
  boxSelected++;
  // Changes the turn player and add symbols to the boxes
  if (turn === 1) {
    event.target.children[0].textContent = "X";
    turn = 2;
  } else {
    event.target.children[0].textContent = "O";
    turn = 1;
  }
  gameLogic(boxes[6].row, boxes[6].col, lastPlayer);
});

boxEight.addEventListener("click", (event) => {
  event.target.classList.add("selected");
  boxSelected++;
  // Changes the turn player and add symbols to the boxes
  if (turn === 1) {
    event.target.children[0].textContent = "X";
    turn = 2;
  } else {
    event.target.children[0].textContent = "O";
    turn = 1;
  }
  gameLogic(boxes[7].row, boxes[7].col, lastPlayer);
});

boxNine.addEventListener("click", (event) => {
  event.target.classList.add("selected");
  boxSelected++;
  // Changes the turn player and add symbols to the boxes
  if (turn === 1) {
    event.target.children[0].textContent = "X";
    turn = 2;
  } else {
    event.target.children[0].textContent = "O";
    turn = 1;
  }
  gameLogic(boxes[8].row, boxes[8].col, lastPlayer);
});
