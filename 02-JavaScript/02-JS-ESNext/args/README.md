<!-- 

Dada la siguiente función

function f(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);

  f("JS rocks!", { b: "b" }); ¿Qué mostrará por consola esta llamada?
  f({ b: "b" }); ¿Y ésta?
  f("JS sucks!", null, 13); ¿Y ahora?
} -->