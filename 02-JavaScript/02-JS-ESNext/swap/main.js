let a = "A";
let b = "B";

[a, b] = [b, a];
console.log("a", a);
console.log("b", b);

console.log(a === "B" && b === "A" ? "You did it!" : "Keep trying!");