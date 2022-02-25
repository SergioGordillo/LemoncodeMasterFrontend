// BASIC EXERCISE

const footballTeam = {
    id: 1,
    clubName: "Arsenal",
    division: "Premier League"
}

function showValues(footballTeam) {
    console.log(Object.values(footballTeam));
}

showValues(footballTeam);

// CHALLENGE EXERCISE

function Person(name, age) {
    this.name = name;
    this.age = age;
}

class Walker {
    constructor() { }
    walk() {
        console.log("I am walking");
    }
}


// Person.prototype.walk = function () {
//     console.log("I'm walking");
// };

Person.prototype.walk = Walker.prototype.walk;

const ricardo = new Person("Ricardo", 24);
showValues(ricardo);


