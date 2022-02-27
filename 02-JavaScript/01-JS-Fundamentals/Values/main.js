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

function Ricardo() {
    Person.call("Ricardo", "30");
    this.country = "Spain";
}

// Ricardo.prototype = Object.create(Person.prototype);
// Ricardo.prototype.constructor = Ricardo;

Ricardo.prototype.__proto__ = Person.prototype;

var ricardo = new Ricardo();

console.log(ricardo);
// console.log(ricardo.name);
// console.log(ricardo.age);


