//create an array for the alphabet.
//use 'onkeyup' to trigger a for loop to loop through the alphabet array.
//find out how to remove letter from the array when it is guessed
//find out how to apply that letter to the word when it is guessed correctly

//Theme will be Nintendo
//create three things to guess:  The Legend of Zelda,  Metroid, Mario Bros
//find sound bites for guesses and wins & loses



// // array containing all of the letters of the alphabed
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


// // a for loop to cycle through the alphabet array (works in consol!)
for ( var i = 0; i < alphabet.length; i++ ){
    console.log(alphabet[i]);
}


// function to convert the users letter to uppercase
// and an if else to check to see if the answer is "P" (works in console!)
function guessP(x){
    var x = x.toUpperCase();
    if (x == "P"){
        console.log("works");
    }else{
        console.log("doesn't work");
    }
}

// function to convert the users letter to uppercase
// and an if else to check to see if the answer is "C" (works in console!)
function guessC(x){
    var x = x.toUpperCase();
    if (x == "C"){
        console.log("works");
    }else{
        console.log("doesn't work");
    }
}

// function to convert the users letter to uppercase
// and an if else to check to see if the answer is "S" (works in console!)
function guessS(x){
    var x = x.toUpperCase();
    if (x == "S"){
        console.log("works");
    }else{
        console.log("doesn't work");
    }
}

// write a function to keep track or letters guessed
// write a function to keep track of number of guesses remaining
// write a function that tracks wins (if letter is guessed increase the value of var score by 1)
// write a function that tracks losses
// create a variable called 'score' that increases with each win.
// create a variable called 'losses' that increases with each lose.





guessP("p");