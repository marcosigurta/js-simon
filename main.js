// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno.
// Usate inizialmente prompt e  console.log() , tanti console.log(), se volete aggiungere effetti particolari al DOM fatelo solo in un secondo momento e in cartella bonus :wink:

//funzione numeri casuali
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
  }

//creare funzione che crea 5 numeri random
var numAlert = [];
function randomAlert() {
for (var i = 0; i < 5; i++) {
    var randNum = getRandom(1,100);
    numAlert.push(randNum);
    }
    alert(numAlert)
    console.log("numerialert: "+ numAlert);
}
 randomAlert();

//creo funzione che dopo 30 secondi dalla scomparsa dell'alert faccia comparire 4 prompt
var arrayNumutente = [];
function userNum() {
    for (var i = 0; i < 5; i++) {
        var inputNum = parseInt(prompt('Numero'));
        arrayNumutente.push(inputNum);
    }
    console.log(arrayNumutente);
}
//inserire funzione in un timingEvent 
setTimeout(userNum, 1000);





//inserire funzione in un timingEvent 

