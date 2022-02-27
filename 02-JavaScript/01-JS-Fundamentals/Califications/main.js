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
    var markText = " ";

    if (averageMark === 10) {
        markText = "Esta clase ha obtenido una matrícula de honor";
    } else if (averageMark >= 9 && averageMark < 10) {
        markText = "Esta clase ha obtenido un sobresaliente";
    } else if (averageMark >= 7 && averageMark < 9) {
        markText = "Esta clase ha obtenido un notable";
    } else if (averageMark >= 6 && averageMark < 7) {
        markText = "Esta clase ha obtenido un bien";
    } else if (averageMark >= 5 && averageMark < 6) {
        markText = "Esta clase ha obtenido un suficiente";
    } else if (averageMark >= 4 && averageMark < 5) {
        markText = "Esta clase ha obtenido un insuficiente";
    } else if (averageMark < 4) {
        markText = "Esta clase ha obtenido un muy deficiente";
    } else if (averageMark == null || averageMark == undefined) {
        markText = "No se ha recibido valor para poder calcular la nota media";
    } else {
        markText = "No hemos podido calcular la nota media, inténtelo más tarde.;";
    }

    return console.log(markText);
}

// MAIN CODE OF THE PROGRAM

const studentsNumber = getLengthOfObject(eso2);
const totalStudentMarks = calculateTotalStudentMarks(eso2);
const averageMark = calculateAverageMark(totalStudentMarks, studentsNumber);
calculateSpanishClassAverageMark(averageMark);