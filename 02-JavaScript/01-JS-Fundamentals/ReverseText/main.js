var phrase = "One two three";

function reverseText(phrase) {
    return phrase.split(" ").reverse().join(" ");
}

console.log(reverseText(phrase));