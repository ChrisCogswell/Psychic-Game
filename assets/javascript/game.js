    // Game Variables

    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    
    var comChoiceText = document.getElementById("comchoice-text");
    var userGuessText = document.getElementById("guessSoFar-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("guesses-left");
    var starterText = document.getElementById("game-start");
    
    // This function describes the game loop parameters

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    document.onkeyup = function(event) {

    var guess = event.key;    


   
 
        if (computerGuess === guess){
            wins++;
            guessesLeft = 9;
            starterText.textContent = "You Won";
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }else {
            guessesLeft--;
            starterText.textContent = "Try Again";
        }

        if (guessesLeft === 0){
            losses++;
            guessesLeft = 9;
            starterText.textContent = "You Lost";
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
       

        
        comChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        userGuessText.textContent = "Guesses so far: " + guess;
        guessesText.textContent = "Guesses left: " + guessesLeft;
    }

