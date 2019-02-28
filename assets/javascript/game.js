

var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var comChoice = [computerChoices.length];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessChoice =[];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userGuess = document.getElementById("letters-guessed");
var guessesLeft = document.getElementById("guesses-left");

document.onkeyup = function(event) {
    var userChoice = event.key;

    var comSelect = comChoice[Math.floor(Math.random() * comChoice)];

    if ((userChoice === comSelect)) {
        wins++;

    } else {
        losses++;
    }


    userGuess.textContent = "You Guessed " + userChoice; 
}

