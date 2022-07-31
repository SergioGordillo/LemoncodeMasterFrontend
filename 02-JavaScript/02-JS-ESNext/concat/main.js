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

const concatMulti = (...args) => {
    const result = [].concat(...args)
    console.log(result);
    return result;
};

concatMulti(arr1, arr2, arr3, arr4);