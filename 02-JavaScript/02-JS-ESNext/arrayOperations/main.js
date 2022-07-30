
// APARTADO A

const goalkeepers20222023 = ["Ramsdale", "Leno", "Rúnarsson", "Turner"];
const head = goalkeepers20222023 => goalkeepers20222023[0];
console.log("Apartado A: " + (head(goalkeepers20222023)));

// APARTADO B
const transfers20222023 = ["Gabriel Jesús", "Zinchenko", "Fabio Vieira", "Turner", "Marquinhos"];
const tail = (transfers20222023) => {
    const [, ...arsenalTransfers] = transfers20222023;
    return arsenalTransfers;
};
console.log("Apartado B: " + tail(transfers20222023));

// APARTADO C
const countries = ["Spain", "France", "Portugal", "Germany", "Italy"];
const init = (countries) => {
    const removedCountry = countries.pop();
    return countries;
}

console.log("Apartado C: " + init(countries));

// APARTADO D
const series = ["Black Mirror", "The Expanse", "How I Met Your Mother", "Mr. Robot", "The Billion Dollar Code"];
const last = (series) => {
    const lastSerie = series.pop();
    return lastSerie;
};
console.log("Apartado D: " + last(series));