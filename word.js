//packages
var generateRandomWord = require("random-words");
//  constructor for random word
function Word(){
    this.word = generateRandomWord();
    this.wordLength = this.word.length;
};
// export word constructor
module.exports = Word;