//Crear función que reciba una lista de estudiantes, reciben nombre y una lista de notas
//Return lista con nombre nota más alta y media de las mismas
//Crear dos entidades, una para los datos de entrada y otra para los datos de salida
//Puedes usar la función Number.prototype.toPrecision(3) para reducir el número de decimales de la media de calificaciones a tres números.

interface Students {
    name: string,
    califications: number[]
}

interface NameStudent {
    name: string
}

interface HighestMark {
    highestMark: number,
}

interface AverageMark {
    highestMark: number,
}

interface StudentsStatistics {
    name: string,
    highestMark: number,
    averageMark: number
}

const students : Students[] = [
    { name: "Juan", califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
    { name: "Álvaro", califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
    { name: "María", califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3] },
    { name: "Jorge", califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
    { name: "Mónica", califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] },
  ];

  function getNames(students:Students[]):NameStudent[] {
    const names : any[] = [];
    students.forEach(student => {
        const name = student.name;
        names.push(name);
    });
    return names;
  }

  function getAverageMark(students:Students[]):AverageMark {
    const averageMark : any[] = [];
    students.forEach(student => {
        const totalMarks = student.califications.reduce((total, actual) => {
            return total + actual;
        }, 0);
        const numberOfMarks = student.califications.length;
        const averageMark = totalMarks/numberOfMarks;
        return averageMark;
    });
    return 
  }

  console.log("nombres", getNames(students));
  
 
    // Tengo que sacar el name por un lado (que sería un bucle) y luego hacer otro por las califications para ir haciendo los cálculos

  
//   console.log(summarizeClassRoom(students));
  // [
  //   { name: 'Juan', highestCalification: 9.71, averageCalifications: '5.37' },
  //   { name: 'Álvaro', highestCalification: 8.3, averageCalifications: '5.58' },
  //   { name: 'María', highestCalification: 9.3, averageCalifications: '3.92' },
  //   { name: 'Jorge', highestCalification: 9.07, averageCalifications: '5.38' },
  //   { name: 'Mónica', highestCalification: 9.72, averageCalifications: '4.42' }
  // ] -->