// Assignment 1
document.getElementById("form1").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;

    const result = document.getElementById("result1");

    result.style.display = "block";
    result.innerHTML = "Name: " + name + "<br>City: " + city;
});


