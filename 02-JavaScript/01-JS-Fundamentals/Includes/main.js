var array = [0, 1, 2, 3, 4];
var value = 2;
var valueIsInArray = false;

function includes(array, value) {
    array.forEach(element => {
        if (element === value) {
            valueIsInArray = true;
        }
    });
    return valueIsInArray;
}

function cleanIncludes(array, value) {
    return array.indexOf(value) !== -1;
}

console.log(includes(array, value));