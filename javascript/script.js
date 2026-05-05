document.getElementById("fanForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stops page from refreshing

    let name = document.getElementById("name").value;

    let message = "Welcome to Eagles Nation, " + name + "! 🦅";

    document.getElementById("greeting").textContent = message;
});