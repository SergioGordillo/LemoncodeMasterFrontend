// APARTADO A

a = ["Pedro", "Juan", "Diego", "Helena"];
b = ["Raúl", "Fernando"]

const concat = (a, b) => result = [...a, ...b];

console.log("Concat result: " + concat(a, b));

// APARTADO B

const arr1 = ["Beach", "Mountain"];
const arr2 = ["Pizza", "Paella"];
const arr3 = ["Rock", "Rap"];
const arr4 = ["Cinema", "Theatre"];

function concatMulti(arr1, arr2, arr3, arr4) {
    numArgs = arguments.length;
    result = [];

    for (let i = 0; i < numArgs; i++) {
        const element = [arguments[i]];
        result.push(arguments[i]);
    }

    // const initialResult = [];

    // const result = initialResult.reduce((acc, curr) => {
    //     [...acc, ...curr], initialResult
    // })

    return result;
};

console.log(concatMulti(arr1, arr2, arr3, arr4));