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