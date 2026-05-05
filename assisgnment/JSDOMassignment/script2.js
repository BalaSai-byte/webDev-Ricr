// Assignment 2
document.getElementById("form2").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let result = document.getElementById("result2");

    result.style.display = "block";
    result.innerHTML = "Email: " + email + "<br>Password: " + password;
});