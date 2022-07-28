
// APARTADO A

const goalkeepers20222023 = ["Ramsdale", "Leno", "Rúnarsson", "Turner"];
const head = goalkeepers20222023 => goalkeepers20222023[0];
console.log(head(goalkeepers20222023));

// APARTADO B
const transfers20222023 = ["Gabriel Jesús", "Zinchenko", "Fabio Vieira", "Turner", "Marquinhos"];
const tail = (transfers20222023) => {
    const [, ...arsenalTransfers] = transfers20222023;
    return arsenalTransfers;
};
console.log(tail(transfers20222023));

// APARTADO C
countries = ["Spain", "France", "Portugal", "Germany", "Italy"]
const init = countries => countries;