document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); 

    document.body.classList.add("fade-out");

   
    setTimeout(function () {
        window.location.href = "../page/passe_2.html";
    }, 1000);
});