
// APARTADO A

const goalkeepers20222023 = ["Ramsdale", "Leno", "Rúnarsson", "Turner"];

//Without destructuring
// const head = goalkeepers20222023 => goalkeepers20222023[0];
// console.log("Apartado A: " + (head(goalkeepers20222023)));

//With destructuring
const head = (goalkeepers20222023) => {
    const [firstGoalkeeper] = goalkeepers20222023;
    return firstGoalkeeper;
}
console.log("Apartado A: " + head(goalkeepers20222023));

// APARTADO B
const transfers20222023 = ["Gabriel Jesús", "Zinchenko", "Fabio Vieira", "Turner", "Marquinhos"];
const tail = (transfers20222023) => {
    const [, ...arsenalTransfers] = transfers20222023;
    return arsenalTransfers;
};
console.log("Apartado B: " + tail(transfers20222023));

// APARTADO C 
const countries = ["Spain", "France", "Portugal", "Germany", "Italy"];
// With function which is mutable
// const init = (countries) => {
//     const removedCountry = countries.pop();
//     return countries;
// }
// With function which is not mutable
const init = (countries) => {
    const countriesWithoutTheLastOne = countries.slice(0, -1);
    return countriesWithoutTheLastOne;
}
console.log("Apartado C: " + init(countries));

// APARTADO D
const series = ["Black Mirror", "The Expanse", "How I Met Your Mother", "Mr. Robot", "The Billion Dollar Code", "Big Bang Theory", "Friends", "The Lord of the Rings: Rings of Power"];
//With function which is mutable
// const last = (series) => {
//     const lastSerie = series.pop();
//     return lastSerie;
// };
//With function which is not mutable
const last = (series) => {
    const lastIndex = series.length - 1;
    const lastSerie = series[lastIndex];
    return lastSerie;
};
console.log("Apartado D: " + last(series));