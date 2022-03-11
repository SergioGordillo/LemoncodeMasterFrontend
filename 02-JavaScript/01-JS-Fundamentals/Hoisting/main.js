// FIRST EXERCISE

// function f() {
//     console.log(a); // undefined
//     console.log(g()); //undefined
//     var a = "good job!";
//     function g() {
//         return a;
//     }
//     console.log(a); //goodjob
// }
// f();

// SECOND EXERCISE

// var a = 1;
// (function () {
//     console.log(a); //undefined
//     var a = 2;
//     b = 4;
//     var c = 3;
// })();
// console.log(a); //1
// console.log(b); //4
// console.log(c); //error is not defined

// THIRD EXERCISE
f();
var a = 1;
function f() {
    console.log(a); //undefined
    b = 4;
    var c = 3;
}
console.log(a); //1
console.log(b); //4
console.log(c); //error is not defined