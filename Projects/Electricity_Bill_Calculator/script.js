function calculate() {
  const unit = Number(document.getElementById("units").value);
  

  let bill = 0;
  if (unit <= 50) {
    bill = unit * 0.5;
  } else if (unit <= 200) {
    bill = 50 * 0.5 + (unit - 50) * 0.75;
  } else if (unit <= 450) {
    bill = 50 * 0.5 + 150 * 0.75 + (unit - 200) * 1.2;
  } else {
    bill = 50 * 0.5 + 150 * 0.75 + 250 * 1.2 + (unit - 450) * 1.5;
  }
  const surcharge = bill * 0.2;
  const total = bill + surcharge;
  document.getElementById("myBill").innerText = total;
  document.getElementById("result").classList.remove("total");
}
function clearData() {
  document.getElementById("units").value = "";
  document.getElementById("slab1").innerText = "";
  document.getElementById("subtotal").innerText = "";
  document.getElementById("surcharge").innerText = "";
  document.getElementById("result").classList.add("total");
  
}