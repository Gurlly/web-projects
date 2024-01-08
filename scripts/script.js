// Contains the page's JavaScript

let playerOne = document.getElementById("player-one");
let playerTwo = document.getElementById("player-two");
let playerOneName = document.getElementById("change-name-one");
let playerTwoName = document.getElementById("change-name-two");

let nameInput = document.getElementById("player-name"); // Name input field
let nameContainer = document.getElementById("input-name");

let cancelButton = document.getElementById("cancel");
let submitButton = document.getElementById("submit");

let error = document.getElementById("error-message");

// Tells who's player is changing their name.
let currentPlayer;

// Specify that player one's name will be changed.
playerOneName.addEventListener("click", () => {
  currentPlayer = 1;
  nameContainer.style.display = "block";
});
// Specify that player two's name will be changed.
playerTwoName.addEventListener("click", () => {
  currentPlayer = 2;
  nameContainer.style.display = "block";
});
// Cancelling change name
cancelButton.addEventListener("click", () => {
  nameContainer.style.display = "none";
  error.style.display = "none";
});

// Changes the player's name and checks if the name is valid (Working).
submitButton.addEventListener("click", () => {

    let name = nameInput.value;

    if (name.trim() == "") {
        error.style.display = "block";
    } 
    
    else {
        if (currentPlayer == 1) {
            playerOne.textContent = name;
            nameInput.value = "";
            nameContainer.style.display = "none";
        } else {
            playerTwo.textContent = name;
            nameInput.value = "";
            nameContainer.style.display = "none";
        }
    }

});
