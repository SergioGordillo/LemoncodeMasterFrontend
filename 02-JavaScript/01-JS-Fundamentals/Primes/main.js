
// AUX FUNCTION
function isPrime(num) { //It gives you the information about a number being a prime one or not
    if (num <= 1) return false;

    for (var i = 2, prime = true; i < num && prime; i++) {
        prime = num % i !== 0;
    }
    return prime;
}

// MAIN FUNCTION
function showPrimeNumbers(from, to) { //It loops over the interval of numbers
    for (var i = from; i <= to; i++) {
        console.log(i.toString() + (isPrime(i) ? " is a prime number!" : " is not a prime number"));
    }
}

showPrimeNumbers(1, 10);

