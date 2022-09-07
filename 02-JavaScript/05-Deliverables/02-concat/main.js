// APARTADO A

a = ["Pedro", "Juan", "Diego", "Helena"];
b = ["Raúl", "Fernando"]

function concat(a, b) {
    return [...a, ...b]
}

console.log("Concat result: ", concat(a, b));


// APARTADO B

const arr1 = ["Beach", "Mountain"];
const arr2 = ["Pizza", "Paella"];
const arr3 = ["Rock", "Rap"];
const arr4 = ["Cinema", "Theatre"];

const concatMultiple = (...arrays) => {
    let aux = [];

    for (let array of arrays) {
        aux = concat(aux, array)
    }

    return aux;
}

console.log("Concat result: ", concatMultiple(arr1, arr2, arr3, arr4));

