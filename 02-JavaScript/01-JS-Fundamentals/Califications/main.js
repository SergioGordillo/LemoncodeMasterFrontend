const eso2 = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

function showValues(eso2) {
    console.log(Object.values(eso2));
}

function calculateAverageMark(eso2) {
    const studentsNumber = eso2.length;
    const marks = Object.values(eso2);
    const totalMarks = 0;

    for (let i = 0; i < eso2.length; i++) {
        totalMarks += eso2[i];
        console.log(totalMarks);
    }

    console.log(totalMarks);



}

showValues(eso2);
calculateAverageMark(eso2);