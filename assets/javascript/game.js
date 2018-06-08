//create an array for the alphabet.
//use 'onkeyup' to trigger a for loop to loop through the alphabet array.
//find out how to remove letter from the array when it is guessed
//find out how to apply that letter to the word when it is guessed correctly

//Theme will be Nintendo
//create three things to guess:  The Legend of Zelda,  Metroid, Mario Bros
//find sound bites for guesses and wins & loses

// LOOK AT WEEK 4 DAY 3 ACTIVITY 4 TO DO THIS ASSIGNMENT


// // array containing all of the letters of the alphabed
var alphabet = ["S","C","O","T","C","H","A"];

var wins = 0;
var losses = 0;
var numGuessLeft = 9;
var guesses = "i";


function playGame(event){
    var computerOptionIndex = Math.floor(Math.random())*alphabet.length;

    var computerLetter = alphabet[computerOptionIndex];
    var userChoice = event.key;

    document.querySelector("#psychicLetter").innerText = computerLetter;
    document.querySelector("#lettersGuessed").innerText = userChoice;
}
    document.onkeyup = playGame;



