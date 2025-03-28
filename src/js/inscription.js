document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Redirection after form submission
        window.location.href = "../page/dashboard.html";
    });
});