// Formule mathématique de conversion : Temp(Fahrenheit) = [Temp(Degrees)*9/5] + 32
// Définissez la propriété innerHTML de l’élément « fahrenheit » dans index.html sur la valeur renvoyée
function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}
