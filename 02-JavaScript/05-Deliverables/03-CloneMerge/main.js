// EXERCISE A

// DONE WITHOUT SPREAD OPERATOR

let friend = { name: "Jorge", surname: "Gómez", country: "SPA" };

//HELPERS
// function cloneObjects(friend) {
//     let clonedFriend = Object.assign({}, friend);
//     return clonedFriend;
// }

//MAIN CODE

// clonedFriend = cloneObjects(friend);
// console.log(clonedFriend);
// console.log(clonedFriend === friend); //It is false, then the clone function has worked properly, I have two objects, with the same information but pointing to different memory spaces

// DONE WITH SPREAD OPERATOR

function clone(friend) {
    const clonedObject = { ...friend };
    console.log("clonedObject", clonedObject);
    console.log("are the objects equals?", clonedObject === friend);
    return clonedObject;
}

clone(friend);


//EXERCISE B

//DONE WITHOUT MERGE FUNCTION

// let a = { name: "Maria", surname: "Ibañez", country: "SPA" };
// let b = { name: "Luisa", age: 31, married: true };

// clonedA = cloneObjects(a);
// clonedB = cloneObjects(b);
// console.log(clonedA);
// console.log(clonedB);
// clonedAB = Object.assign({}, clonedA, clonedB);
// console.log(clonedAB);

//DONE WITH MERGE FUNCTION

let a = { name: "Maria", surname: "Ibañez", country: "SPA" };
let b = { name: "Luisa", age: 31, married: true };

function merge(a, b) {
    const clonedA = clone(a);
    const clonedB = clone(b);
    const result = { ...clonedA, ...clonedB }
    console.log("Este es el resultado de merge: ", result);
    return result;
}

merge(a, b);
