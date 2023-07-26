/*



*/

const btn = document.querySelector(".button > :first-child");
const playerOneDice = document.querySelector(".dice > :first-child");
const playerTwoDice = document.querySelector(".dice > :last-child");

let wasTriggered = false;

btn.addEventListener("click", () => {
  //Checks if the event listner was triggered before it was supposed to
  if (wasTriggered) {
    return;
  }

  const delayInMiliSeconds = 100;
  wasTriggered = true;

  btnHoverEffectOff();
  setTimeout(btnHoverEffectOff, delayInMiliSeconds);
  setTimeout(playGame, delayInMiliSeconds);
  //Need to reset the boolean so this event listner can be triggered
  setTimeout(resetWasTriggered, delayInMiliSeconds);
});

function btnHoverEffectOff() {
  btn.classList.toggle("hover-effect");
}

function resetWasTriggered() {
  wasTriggered = false;
}

function randomNumberGenerator() {
  const diceSize = 6;
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
      console.log(
        `Error: number = ${number}. Numbers can only be between 1 - 6`
      );
  }
}

function whoWon(player1, player2) {
  if (player1 > player2) {
    console.log("Player1 Wins!");
  } else if (player1 < player2) {
    console.log("Player2 Wins!");
  } else if (player1 === player2) {
    console.log("You Tied");
  } else {
    console.log("Error");
  }
}

function playGame() {
  let player1 = randomNumberGenerator();
  let player2 = randomNumberGenerator();

  setDiceImage(playerOneDice, player1);
  setDiceImage(playerTwoDice, player2);
  whoWon(player1, player2);
}
