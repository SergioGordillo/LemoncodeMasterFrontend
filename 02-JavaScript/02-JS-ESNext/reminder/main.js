class Reminder {
    constructor(text) {
        this.text = text;
    }

    remindMe(delay) {
        setTimeout(() => {
            console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
        }, delay * 1000);
    }
}

const example = new Reminder("Hello world");
console.log(example);
example.remindMe(3);

