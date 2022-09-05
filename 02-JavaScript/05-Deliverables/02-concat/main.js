// APARTADO A

a = ["Pedro", "Juan", "Diego", "Helena"];
b = ["Raúl", "Fernando"]

function concat(a, b) {
    return [...arguments]
}

console.log("Concat result: " + concat(a, b));


// APARTADO B

const arr1 = ["Beach", "Mountain"];
const arr2 = ["Pizza", "Paella"];
const arr3 = ["Rock", "Rap"];
const arr4 = ["Cinema", "Theatre"];

console.log("Concat result: " + concat(arr1, arr2, arr3, arr4));

