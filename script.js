// Formule mathématique de conversion : Temp(Fahrenheit) = [Temp(Degrees)*9/5] + 32
// Définissez la propriété innerHTML de l’élément « fahrenheit » dans index.html sur la valeur renvoyée
function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}

// Formule mathématique de conversion : Weight(Pounds) = Weight(Kgs) * 2.2
// Définissez la propriété innerHTML de l’élément « pounds » dans index.html sur la valeur renvoyée
function weight(){
    //To convert KGs to Pounds
    // KG * 2.2
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("pounds").value = p
}

// Formule mathématique de conversion : Distance(Miles) = Distance(Kms) * 0.62137
// Définissez la propriété innerHTML de l’élément « miles » dans index.html sur la valeur renvoyée
function distance(){
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m
}