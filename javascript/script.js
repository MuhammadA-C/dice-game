const btn = document.querySelector("#btn");
let wasTriggered = false;

btn.addEventListener("click", () => {
  //Checks if the event listner was triggered before it was supposed to
  if (wasTriggered) {
    return;
  }

  const delayInMiliSeconds = 100;
  wasTriggered = true;

  console.log("Button pressed");

  btnHoverEffectOff();
  setTimeout(btnHoverEffectOff, delayInMiliSeconds);
  //Need to reset the boolean so this event listner can be triggered
  setTimeout(resetWasTriggered, delayInMiliSeconds);
});

function btnHoverEffectOff() {
  btn.classList.toggle("hover-effect");
}

function resetWasTriggered() {
  wasTriggered = false;
}

/* Note: Will need to add the code that runs the game into a function,
  then pass that function as a parameter into the setTimeout() funciton
  to time the delay of another game playing with when the button toggle 
  effect is added back
*/
