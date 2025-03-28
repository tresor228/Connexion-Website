function Mailretrun(){
    var mail = document.getElementById('mail').value;

    if (mail.trim() == ""){
        alert("Veuillez saisir votre adresse mail");
        return false;
    }
    else{
        return true;
    }
}

var connexion = document.getElementById('form').value;

var reponse = "Inscription";

if (connexion == reponse){
    window.location.href = "../page/dashboard.html"
}
