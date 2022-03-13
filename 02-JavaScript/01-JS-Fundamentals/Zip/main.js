var keys = ["spanish", "english", "french"];
var values = ["hola", "hi", "salut"];
var values2 = ["hola"];

function zipObject(keys, values) {
    var obj = {};
    keys.forEach((key, i) => {
        obj[key] = values[i];
    });
    return obj;
}

function zipObjectChallenge(keys, values) {
    var obj = {};
    values.forEach((value, i) => {
        obj[keys[i]] = values;
    });
    return obj;
}

console.log(zipObject(keys, values));
console.log(zipObjectChallenge(keys, values2));

