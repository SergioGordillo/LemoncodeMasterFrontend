// EXERCISE A

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };
console.log(user === clonedUser); // false

function isEqual(user, clonedUser) {
    var samePropertiesOrNot = Object.keys(user).every(p => clonedUser.hasOwnProperty(p));
    return samePropertiesOrNot;
}

console.log(isEqual(user, clonedUser)); // true

// EXERCISE B

var friend = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};
var clonedFriend = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};

function isDeepEqual(a, b) {

}
console.log(isDeepEqual(user, clonedUser)); // true