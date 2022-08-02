const beginningOrder = ["Ana", "Juan", "Pablo", "Lucia"];

const getPlayersOrder = (beginningOrder, turns) => {

    if (turns === 0) {
        return beginningOrder;
    }

    for (let i = 0; i < turns; i++) {
        const firstPlayer = beginningOrder.shift();
        beginningOrder.push(firstPlayer);
        return beginningOrder;
    }
}

console.log("0:", getPlayersOrder(beginningOrder, 0));
console.log("1:", getPlayersOrder(beginningOrder, 1));
console.log("2:", getPlayersOrder(beginningOrder, 2));
console.log("3:", getPlayersOrder(beginningOrder, 3));
console.log("4:", getPlayersOrder(beginningOrder, 4));
console.log("5:", getPlayersOrder(beginningOrder, 5));
console.log("6:", getPlayersOrder(beginningOrder, 6));
console.log("7:", getPlayersOrder(beginningOrder, 7));
console.log("8:", getPlayersOrder(beginningOrder, 8));