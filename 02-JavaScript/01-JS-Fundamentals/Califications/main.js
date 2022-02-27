// DATA

const eso2 = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

// HELPERS

function getLengthOfObject(eso2) { //Function that returns the length of a given object
    let lengthOfObject = Object.keys(eso2).length;
    return lengthOfObject; // 6 
}

function calculateTotalStudentMarks(eso2) { //Function that returns the total of the marks of the students
    const totalStudentMarks = Object.values(eso2).reduce((total, actual) => {
        return total + actual;
    }, 0);
    return totalStudentMarks;
}

function calculateAverageMark(totalStudentMarks, studentsNumber) { //Function that calculates the average Mark of all the class
    const averageMark = totalStudentMarks / studentsNumber;
    return averageMark;
}

function calculateSpanishClassAverageMark(averageMark) {
    console.log("me muestra mi nota media", averageMark);
    var markText = " ";

    switch (averageMark) {
        case 10:
            markText = "Esta clase ha obtenido una matrícula de honor"
            break;
        case averageMark >= 9 && averageMark < 10:
            markText = "Esta clase ha obtenido un sobresaliente"
            break;
        case averageMark >= 7 && averageMark < 9:
            markText = "Esta clase ha obtenido un notable"
            break;
        case averageMark >= 6 && averageMark < 7:
            markText = "Esta clase ha obtenido un bien"
            break;
        case averageMark >= 5 && averageMark < 6:
            markText = "Esta clase ha obtenido un suficiente"
            break;
        case averageMark >= 4 && averageMark < 5:
            markText = "Esta clase ha obtenido un insuficiente"
            break;
        case averageMark < 4:
            markText = "Esta clase ha obtenido un muy deficiente"
            break;
        default:
            break;
    }

    return console.log("Marktext", markText);
}

// MAIN CODE OF THE PROGRAM

const studentsNumber = getLengthOfObject(eso2);
console.log("studentsNumber", studentsNumber); //OK
const totalStudentMarks = calculateTotalStudentMarks(eso2);
console.log("totalStudentMarks", totalStudentMarks); //OK
const averageMark = calculateAverageMark(totalStudentMarks, studentsNumber);
console.log("averageMark", averageMark);
calculateSpanishClassAverageMark(averageMark);