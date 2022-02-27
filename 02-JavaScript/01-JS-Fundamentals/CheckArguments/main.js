
// Not so clean fuction
function f(input) {
    var result;
    if (input === undefined) {
        result = "Unknown";
    } else if (input === null) {
        result = "";
    } else {
        result = input;
    }
    return result;
}


// Cleaner function
function fclean(input) {
    let result;

    input ? null || undefined
        ? "Unknown"
        : ""
        : result
}

//   Piensa en el operador ternario y también en el operador OR.
// **TIP**: Puedes suponer que input es siempre de tipo string, incluyendo `null` o `undefined`. Es decir, no vas a recibir números, objetos, etc.