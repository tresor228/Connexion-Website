document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Récupérer les valeurs des champs
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (email && password) {
            try {
                console.log('Tentative de connexion');
                
                // Redirection après connexion
                window.location.href = '../page/dashboard.html';
            } catch (error) {
                console.error('Erreur de connexion:', error);
            }
        } else {
            alert('Veuillez saisir votre email et mot de passe');
        }
    });
});