function centuryFromYear(year){
    if(year>=1 && year <=2005){
        return "working";
    }else{
        return "You have to introduce a number between 1 and 2005";
    }
}

console.log(centuryFromYear(3));
console.log(centuryFromYear("dos"));


// year= 1905, output= 20
// year= 1700, output= 17.
//1-100-> siglo I
//101-200->siglo II
//year = 1-year-2005