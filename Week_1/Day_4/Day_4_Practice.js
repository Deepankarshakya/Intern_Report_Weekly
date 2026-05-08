function decider(grade){
    if(grade >= 90) return "A";
    if(grade <= 89 && grade >= 80) return "B";
    if(grade <= 79 && grade >= 70 ) return "c";
    if(grade <= 69 && grade >= 60) return "D";
    else
        return "Fail";
}
console.log(decider(40));