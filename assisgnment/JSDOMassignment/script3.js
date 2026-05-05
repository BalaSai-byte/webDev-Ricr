// Assignment 3
document.getElementById("form3").addEventListener("submit", function(e) {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    let fullName = firstName + " " + lastName;

    let result = document.getElementById("result3");

    result.style.display = "block";
    result.innerHTML = "Full Name: " + fullName;
});