class slotMachine {

    constructor(coins) {
        this.coins = coins;
    }

    play() {

        this.coins = this.coins + 1;

        let random_boolean1 = Math.random() < 0.5;
        let random_boolean2 = Math.random() < 0.5;
        let random_boolean3 = Math.random() < 0.5;

        console.log("this.coins", this.coins);

        if (random_boolean1 && random_boolean2 && random_boolean3) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log("Good luck next time!!");
        }

    }
}

const machine1 = new slotMachine(1);
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();