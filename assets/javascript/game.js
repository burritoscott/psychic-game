//create an array for the alphabet.
//use 'onkeyup' to trigger a for loop to loop through the alphabet array.
//find out how to remove letter from the array when it is guessed
//find out how to apply that letter to the word when it is guessed correctly

//Theme will be Nintendo
//create three things to guess:  The Legend of Zelda,  Metroid, Mario Bros
//find sound bites for guesses and wins & loses

// // array containing all of the letters of the alphabed
var alphabet = ["s","c","o","t","h","a"];

var wins = 0;
var losses = 0;
var numGuessLeft = 9;
var guesses = [];

function playGame(event){
    var computerOptionIndex = Math.floor(Math.random()*alphabet.length);

    var computerLetter = alphabet[computerOptionIndex];
    var userChoice = event.key;
    var guess = "";
    document.querySelector("#psychicLetter").innerText = computerLetter;
    document.querySelector("#lettersGuessed").innerText = userChoice;

    if (userChoice == computerLetter){
        wins++;
        document.querySelector("#wins").innerText = wins;
        numGuessLeft = 9;
        document.querySelector("#numGuess").innerText = numGuessLeft;
        document.querySelector("#lettersGuessed").innerText = guesses;
    }else{
        numGuessLeft--;
        document.querySelector("#numGuess").innerText = numGuessLeft;
            if (numGuessLeft == 0){
            losses++;
            document.querySelector("#loses").innerText = losses;
            numGuessLeft = 9;
            document.querySelector("#numGuess").innerText = numGuessLeft;
            }
    } 
}
document.onkeyup = playGame;



