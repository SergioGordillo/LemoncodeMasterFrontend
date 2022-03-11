var dice1 = null;
var dice2 = null;
var min = 1;
var max = 7;

//HELPERS

function resetDice1(dice1) {
    dice1 = null;
    return dice1;
}

function resetDice2(dice2) {
    dice2 = null;
    return dice2;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function rollDice1() {
    dice1 = getRandomInt(min, max);
    console.log("The result of dice 1 is ", dice1);
    return dice1;
}

function rollDice2() {
    dice2 = getRandomInt(min, max);
    console.log("The result of dice 2 is ", dice2);
    return dice2;
}

// CODE OF THE APP

rollDice1();
rollDice2();

if (dice1 === 6 && dice2 === 6) {
    console.log("You have a prize");
}





// - Hacer reset, poner a `undefined` o `null` ambos resultados.
// - Tirar los dados. **TIP**: Usa `Math.random()` para tiradas aleatorias.
// - Imprimir el resultado por consola. Ten en cuenta lo siguiente:
//   - Informa al usuario que debe tirar primero cuando corresponda.
//   - Si saca doble 6, ¡dale un premio!