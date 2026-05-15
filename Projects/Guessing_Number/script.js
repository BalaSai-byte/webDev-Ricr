const number = Math.floor(Math.random() * 10) + 1;

function alert() {
  const guessNum = parseInt(document.getElementById("guess").value, 10);
  value.preventDefault();

  if (guessNum > number) {
    document.getElementById("msg").innerText =
      "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
  } else if (guessNum < number) {
    document.getElementById("msg").innerText =
      "OOPS! SORRY!!! TRY A LARGER NUMBER.";
  }
    else if (guessNum === number) {
      document.getElementById("msg").innerText = "Congratulations! You guessed it right!";
    } 
  else {
    document.getElementById("msg").innerText = "Please enter a valid number.";
  }
}