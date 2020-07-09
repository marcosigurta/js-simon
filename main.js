var numAlert = [];
var arrayNumutente = [];
var numeriesatti = [];
randomAlert();
setTimeout(userNum, 1000);

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}

function randomAlert() {
    for (var i = 0; i < 5; i++) {
        var randNum = getRandom(1, 100);
        numAlert.push(randNum);
    }
    alert(numAlert)
    console.log("numerialert: " + numAlert);
}

function userNum() {
    for (var i = 0; i < 5; i++) {
        var inputNum = parseInt(prompt('Numero'));
        arrayNumutente.push(inputNum);
    }
    console.log("Numeri scelti dall'utente: " + arrayNumutente);
    for (var i = 0; i < numAlert.length; i++) {
        for (var j = 0; j < arrayNumutente.length; j++) {
            if (numAlert[i] == arrayNumutente[j]) {
                numeriesatti.push(numAlert[i]);
            }
        }
    }
    console.log("I numeri che hai indovinato sono: " + numeriesatti.length + ";" + " I numeri sono i seguenti: " + numeriesatti + ";");
}


