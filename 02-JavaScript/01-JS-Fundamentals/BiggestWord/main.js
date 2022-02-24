
var phrase = "This is wonderful abcdefghi";

function biggestWord(phrase) {

    words = phrase.split(" ");
    wordsLength = new Array;

    thisIsTheBiggestWord = new Array;
    thisIsTheBiggestWord.push(" ");

    for (let i = 0; i < words.length; i++) {
        const element = words[i].length;
        wordsLength.push(element);

        if (element > thisIsTheBiggestWord[0].length) {
            thisIsTheBiggestWord.shift();
            thisIsTheBiggestWord.push(words[i]);
        }
    }
    console.log("Phrase: ", phrase);
    console.log("This is the biggest word: ", thisIsTheBiggestWord);

}

biggestWord(phrase);


