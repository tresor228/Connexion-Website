function telephone(){
    var countrySelect = document.getElementById("country");
    var telPhone = document.getElementById("tel");

    let selection  = countrySelect.value;

    if (selection){
        telPhone.value = selection + ' ';
    }else{
        telPhone.value = ' ';
    }
}
