// Fichier: inscription.js
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission du formulaire par défaut
        
        // Récupérer les valeurs des champs
        const nom = document.getElementById('nom').value.trim();
        const prenom = document.getElementById('prenom').value.trim();
        const country = document.getElementById('country').value;
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        
        // Validation des champs
        if (!validateForm(nom, prenom, country, email, password)) {
            return;
        }
        
        // Simulation d'une inscription (à remplacer par une vraie logique d'inscription)
        try {
            console.log('Tentative d\'inscription');
            
            // Ici, vous feriez normalement un appel AJAX pour enregistrer l'utilisateur
            // Par exemple :
            // fetch('/api/register', {
            //     method: 'POST',
            //     body: JSON.stringify({ nom, prenom, country, email, password }),
            //     headers: { 'Content-Type': 'application/json' }
            // })
            
            // Redirection après inscription
            window.location.href = '../page/dashboard.html';
        } catch (error) {
            console.error('Erreur d\'inscription:', error);
            alert('Une erreur est survenue lors de l\'inscription');
        }
    });
    
    // Fonction de validation du formulaire
    function validateForm(nom, prenom, country, email, password) {
        // Validation du nom et prénom
        if (nom.length < 2) {
            alert('Veuillez saisir un nom valide');
            return false;
        }
        
        if (prenom.length < 2) {
            alert('Veuillez saisir un prénom valide');
            return false;
        }
        
        // Validation du pays
        if (country === '') {
            alert('Veuillez sélectionner un pays');
            return false;
        }
        
        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez saisir une adresse email valide');
            return false;
        }
        
        // Validation du mot de passe
        if (password.length < 8) {
            alert('Le mot de passe doit contenir au moins 8 caractères');
            return false;
        }
        
        return true;
    }
});