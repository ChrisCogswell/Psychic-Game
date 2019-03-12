    // Game Variables

    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var lettersGuessed = [];
    
    // These variables tell where things will output in the HTML

    var userGuessText = document.getElementById("guessSoFar-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("guesses-left");
    var starterText = document.getElementById("game-start");

    // This variable gives me a random starting number 

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log("Computer choice: " + computerGuess);

    // This function describes the game loop parameters


    document.onkeyup = function(event) {

    var guess = event.key;  

 
        if (computerGuess === guess){
            wins++;
            guessesLeft = 9;
            lettersGuessed = [];
            starterText.textContent = "You Won!...Press any key to start over";
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }else {
            guessesLeft--;
            starterText.textContent = "~~~~~~~~~~~~~~~~~~~~~~~~";
            lettersGuessed.push(guess);
        }

        if (guessesLeft === 0){
            losses++;
            guessesLeft = 9;
            lettersGuessed = [];
            starterText.textContent = "You Lost...Press any key to try your luck again";
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
       
        console.log("Computers new choice: " + computerGuess);

        // This code, along with lines 35, 39 and 47, describes what will be displayed in the HTML 

        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        userGuessText.textContent = "Guesses so far: " + lettersGuessed;
        guessesText.textContent = "Guesses left: " + guessesLeft;
    }

