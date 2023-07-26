const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  console.log("Button pressed");
  btnHoverEffectOff();

  const delayInMiliSeconds = 100;
  btnHoverEffectOn(delayInMiliSeconds);
});

function btnHoverEffectOff() {
  btn.classList.toggle("hover-effect");
}

function btnHoverEffectOn(delayInMiliSeconds) {
  setTimeout(btnHoverEffectOff, delayInMiliSeconds);
}
