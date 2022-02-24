
var phrase = "This is wonderful abcdefghi";

function biggestWord(phrase) {

    words = phrase.split(" ");

    thisIsTheBiggestWord = new Array;
    thisIsTheBiggestWord.push(" ");

    for (let i = 0; i < words.length; i++) {

        if (words[i].length > thisIsTheBiggestWord[0].length) {
            thisIsTheBiggestWord.shift();
            thisIsTheBiggestWord.push(words[i]);
        }
    }
    console.log("Phrase: ", phrase);
    console.log("This is the biggest word: ", thisIsTheBiggestWord);

}

biggestWord(phrase);


