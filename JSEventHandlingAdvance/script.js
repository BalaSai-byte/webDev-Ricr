document.getElementById("redbox").addEventListener("mouseover", redColour);
document.getElementById("redbox").addEventListener("mouseout", fillBaseColour);

document.getElementById("greenbox").addEventListener("mouseover", greenColour);
document
  .getElementById("greenbox")
  .addEventListener("mouseout", fillBaseColour);

document.getElementById("bluebox").addEventListener("mouseover", blueColour);
document.getElementById("bluebox").addEventListener("mouseout", fillBaseColour);

function redColour() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}
function greenColour() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}
function blueColour() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}
function fillBaseColour() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}
