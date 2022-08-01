const beginningOrder = ["Ana", "Juan", "Pablo", "Lucia"];
const players = beginningOrder.length;

const getRemainder = (turns, players) => {
    return turns % players;
}
//1, 5, 9, 13, 17

const getPlayersOrder = (turns, players, beginningOrder) => {
    // ["Ana", "Juan", "Pablo", "Lucia"] 0 turn
    // ["Juan", "Pablo", "Lucia", "Ana"] 1 turn
    // ["Pablo", "Lucia", "Ana", "Juan"] 2 turn
    // ["Lucia", "Ana", "Juan", "Pablo"] 3 turn
    // ["Ana", "Juan", "Pablo", "Lucia"] 4 turn

    console.log("BeginningOrderFunction", beginningOrder);

    if (turns = 0) {
        return beginningOrder;
    } else if (getRemainder(1, 4) == 1) {
        const firstPlayer = beginningOrder.shift();
        const newOrder = beginningOrder.push(firstPlayer);
        console.log(newOrder);
    }
};

getPlayersOrder(1, 4, beginningOrder);