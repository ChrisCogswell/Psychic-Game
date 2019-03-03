    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    
    var comChoiceText = document.getElementById("comchoice-text");
    var userGuessText = document.getElementById("guessSoFar-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("guesses-left");

    
    document.onkeyup = function(event) {

    var guess = event.key;    

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

   
 
        if (computerGuess === guess){
            wins++;
            guessesLeft = 9;
        }else {
            guessesLeft--;
        }

        if (guessesLeft === 0){
            losses++;
            guessesLeft = 9;
        }
       
   


        comChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        userGuessText.textContent = "Guesses so far: " + guess;
        guessesText.textContent = "Guesses left: " + guessesLeft;
    }
    
