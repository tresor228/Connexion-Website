document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        //direction vers le dashboard
        window.location.href = "../page/dashboard.html";
    });
});