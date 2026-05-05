function submit() {
  console.log("Submit button clicked");
  const fn = document.getElementById("fullName").value;
  console.log(fn);
  document.getElementById("myData").innerText = fn;
  document.getElementById("fullName").value = "";
  document.getElementById("dataCard").classList.add
}
