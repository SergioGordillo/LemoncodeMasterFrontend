var word = "message";

function subsets(word) {
    var subsets = [];
    for (var i = 0; i < word.length - 1; i++) {
        subsets.push(word.substr(i + 1));
    }
    return subsets;
}

console.log(subsets(word));

