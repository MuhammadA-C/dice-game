const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  console.log("Button pressed");
  btnHoverEffectOff();

  const delayInMiliSeconds = 100;
  setTimeout(btnHoverEffectOff, delayInMiliSeconds);
});

function btnHoverEffectOff() {
  btn.classList.toggle("hover-effect");
}
