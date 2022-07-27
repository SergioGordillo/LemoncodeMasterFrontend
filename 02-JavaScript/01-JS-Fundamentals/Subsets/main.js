var word = "message";

function subsets(word) {
    var subsets = [];
    for (var i = 0; i < word.length - 1; i++) {
        subsets.push(word.substr(i + 1));
    }
    return subsets;
}

console.log(subsets(word));

// CHALLENGE

var challenge_word = "challenge";

function subsetsChallenge(challenge_word) {
    return Array.prototype.map((challenge_word) => {
        console.log("challenge_word", challenge_word)
    })
}

subsetsChallenge(challenge_word);

