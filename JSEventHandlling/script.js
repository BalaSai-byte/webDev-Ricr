function Bulb1ON() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function Bulb1OFF() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}
function Bulb1RED() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}
function Bulb1BLUE() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}
function Bulb1GREEN() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}

document.getElementById("bulb1Colour").addEventListener("change", colourChange);

function colourChange() {
  const color = document.getElementById("bulb1Colour").value;
  document.getElementById("bulb1").style.backgroundColor = color;
}

document.getElementById("backgroundColor").addEventListener("change", colourChange1);

function colourChange1() {
  const color = document.getElementById("backgroundColor").value;
  document.getElementById("text").style.backgroundColor = color;
}

document.getElementById("headingColour").addEventListener("change", colourChange2);

function colourChange2() {
  const color = document.getElementById("headingColour").value;
  document.getElementById("h2").style.color = color;
}

document.getElementById("paragraphColor").addEventListener("change", colourChange3);

function colourChange3() {
  const color = document.getElementById("paragraphColor").value;
  document.getElementById("para").style.color = color;
}

function reset(){
    window.location.reload();
}
