function checkPalindrome(inputWord) {
    let reverseWord = inputWord.split("").reverse().join("");
    return inputWord === reverseWord;
}

console.log(checkPalindrome("a"));
console.log(checkPalindrome("aba"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("pedro"));

// aabaa = true
// abac = false
// a = true