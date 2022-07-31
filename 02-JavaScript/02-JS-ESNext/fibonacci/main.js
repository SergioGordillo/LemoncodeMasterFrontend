//Function which returns as many numbers of the Fibonacci sequence as you indicate the function through the parameter num

function fib(num) {
    const fib = [0, 1];

    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

fib(5);