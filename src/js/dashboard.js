document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    registrationForm.addEventListener('submit', function(event) {
        // Verification des champs requis
        if (password.value !== confirmPassword.value) {

            event.preventDefault();
            
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            
            alert('Les mots de passe ne correspondent pas. Veuillez réessayer.');
            
            //Reunitialiser du formulaire
            password.value = '';
            confirmPassword.value = '';
            
            password.focus();
        } else {
            event.preventDefault();
            window.location.href = "../page/dashboard.html";
        }
    });

    //Validation des mots de passe
    confirmPassword.addEventListener('input', function() {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Les mots de passe ne correspondent pas');
        } else {
            confirmPassword.setCustomValidity('');
        }
    });
});