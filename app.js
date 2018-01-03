//packages
var inquirer = require('inquirer');
var Word = require("./word.js");

//get new word

var newWord = new Word();

//array to store all guesses and seperate one to store correct
var correctGuesses = [];

var allGuesses = [];

//fxn to print correct letter to terminal if correct and underscore/placeholder if incorrect
function printToPage(randomWord) {
    myWord = randomWord.word;
    // concatenate array to Str for printing on one line
    var myStr = '';
    console.log(myWord);
    for (var i = 0; i < myWord.length; i++){
        if (correctGuesses.includes(myWord[i])) {
            myStr += (" " + myWord[i] + " ");
        }
        else {
            myStr += (" _ ");
        }
    };
    console.log('\n' + myStr + '\n');
    if (correctGuesses.length == myWord.length) {
        console.log("GG bro");
    }
    else {
        promptUser();
    };
    
};
printToPage(newWord);

function promptUser() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Guess a letter: ",
            name: "userGuess",
        }
    ])
    .then(function (inquirerResponse) {
        console.log(inquirerResponse.userGuess);
        if (newWord.word.includes(inquirerResponse.userGuess)) {
            correctGuesses.push(inquirerResponse.userGuess);
            allGuesses.push(inquirerResponse.userGuess);
            printToPage(newWord);
        }
        else {
            allGuesses.push(inquirerResponse.userGuess);
            printToPage(newWord);
        }
    });
};




