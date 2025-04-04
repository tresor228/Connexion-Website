function verifierReponse(reponse) {

    if (reponse === "Oui") {
        window.location.href = "../src/page/Connexion.html";
    } 
    else {
        window.location.href = "../src/page/inscription.html";
    }
}