// EXERCISE A

let friend = { name: "Jorge", surname: "Gómez", country: "SPA" };

//HELPERS
function cloneObjects(friend) {
    let clonedFriend = Object.assign({}, friend);
    return clonedFriend;
}

//MAIN CODE

clonedFriend = cloneObjects(friend);
console.log(clonedFriend);
console.log(clonedFriend === friend); //It is false, then the clone function has worked properly, I have two objects, with the same information but pointing to different memory spaces

//EXERCISE B

let a = { name: "Maria", surname: "Ibañez", country: "SPA" };
let b = { name: "Luisa", age: 31, married: true };

clonedA = cloneObjects(a);
clonedB = cloneObjects(b);
console.log(clonedA);
console.log(clonedB);
clonedAB = Object.assign({}, clonedA, clonedB);
console.log(clonedAB);