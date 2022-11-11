const word = "Mayraaaa";

function isAShortWordOrNot(word) {
  const wordArray = word.split();
  let shortWord = false;
  console.log(wordArray);

  if (wordArray.length < 6) {
    shortWord = true;
    return shortWord;
  } else {
    return shortWord;
  }
}

console.log("Is it a short word? True o false: " + isAShortWordOrNot(word));