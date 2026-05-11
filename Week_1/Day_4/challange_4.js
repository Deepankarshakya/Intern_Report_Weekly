// This a question to print different grade of student according to marks
// Which is:
// 100 - 95 = A+
// 94 - 90 = A
// 89 - 85 = A-
// 84 - 80 = B+
// 79 - 75 = B
// 74 - 70 = B-
// 69 - 65 = C+
// 64 - 60 = C
// 59 - 55 = C-
// 54 - 50 = D
// 49 - 45 = D-
// below 45 = Fail

function Calculator(Grade){
    if(Grade>=95 && Grade <= 100) return "Grade : A+";
    if( Grade >= 90) return "Grade : A";
    if(Grade >= 85) return "Grade : A-";
    if(Grade >= 80) return "Grade : B+";
    if(Grade >= 75) return "Grade : B";
    if(Grade >= 70) return "Grade : B-";
    if(Grade >= 65) return "Grade : C+";
    if(Grade >= 60) return "Grade : C";
    if(Grade >= 55) return "Grade : C-";
    if(Grade >= 50) return "Grade : D";
    if(Grade > 45 ) return "Grade : D-";
    else return "Fail";
}
console.log(Calculator(88));