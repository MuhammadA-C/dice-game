/*



*/

const winnerAnnouncement = document.querySelector(
  ".annoucement > :first-child"
);
const btn = document.querySelector(".button > :first-child");
const playerOneDice = document.querySelector(".dice > :first-child");
const playerTwoDice = document.querySelector(".dice > :last-child");
const diceSize = 6;
let wasTriggered = false;

btn.addEventListener("click", () => {
  const delayInMiliSeconds = 100;

  //Checks if the event listner was triggered before it was supposed to
  if (wasTriggered) {
    return;
  }

  wasTriggered = true;

  btnHoverEffectOff();
  setTimeout(btnHoverEffectOff, delayInMiliSeconds);
  setTimeout(playGame, delayInMiliSeconds);
  //Need to reset the boolean so this event listner can be triggered again
  setTimeout(resetWasTriggered, delayInMiliSeconds);
});

function btnHoverEffectOff() {
  btn.classList.toggle("hover-effect");
}

function resetWasTriggered() {
  wasTriggered = false;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * diceSize) + 1;
}

function setDiceImage(playersDice, number) {
  switch (number) {
    case 1:
      playersDice.src = "./images/1 sides.png";
      break;
    case 2:
      playersDice.src = "./images/2 sides.png";
      break;
    case 3:
      playersDice.src = "./images/3 sides.png";
      break;
    case 4:
      playersDice.src = "./images/4 sides.png";
      break;
    case 5:
      playersDice.src = "./images/5 sides.png";
      break;
    case 6:
      playersDice.src = "./images/6 sides.png";
      break;
    default:
      console.log("Error setting dice image");
  }
}

function announceWinner(player1, player2) {
  if (player1 > player2) {
    winnerAnnouncement.textContent = "Player1 Wins!";
    console.log("Player1 Wins!");
  } else if (player1 < player2) {
    winnerAnnouncement.textContent = "Player2 Wins!";
    console.log("Player2 Wins!");
  } else {
    winnerAnnouncement.textContent = "You Tied";
    console.log("You Tied");
  }
}

function areNumbersInRange(number1, number2) {
  if (
    number1 > diceSize ||
    number1 <= 0 ||
    number2 > diceSize ||
    number2 <= 0
  ) {
    return false;
  }
  return true;
}

function playGame() {
  let player1 = generateRandomNumber();
  let player2 = generateRandomNumber();

  //Checks to ensure the randomly generated numbers are within range of the dice size
  if (!areNumbersInRange(player1, player2)) {
    console.log(
      `Error: number1 = ${player1}, number2 = ${player2}. Numbers must fall within the range of 1-${diceSize}`
    );
    return;
  }

  setDiceImage(playerOneDice, player1);
  setDiceImage(playerTwoDice, player2);
  announceWinner(player1, player2);
}
