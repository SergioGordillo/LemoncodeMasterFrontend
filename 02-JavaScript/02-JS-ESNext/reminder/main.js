class Reminder {
    constructor(text) {
        this.text = text;
    }

    remindMe(delay) {
        setTimeout(function () {
            console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
        }, delay * 1000);
    }
}

const example = new Reminder("Hello world");
console.log(example);
console.log(example.remindMe(3));
