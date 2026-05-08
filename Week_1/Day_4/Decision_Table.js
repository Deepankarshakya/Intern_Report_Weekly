// Checking Age if the person is adult or not?
function Descision(age){
    if(age >= 18 ) return "Adult";
    else 
        return "Minor";
}
console.log(Descision(18));

// If / Else for multiple condition for Grade sheet whhich has marks and atttendence
function Multipleconditon(Grade, attendance){
    if(Grade <= 100  && Grade >= 90 || attendance >= 90) return "Grade A";
    if(Grade <= 89 && Grade >= 80 || attendance >= 80) return "Grade B";
    if(Grade <= 79 && Grade >= 70 || attendance >= 70) return "Grade C";
    if(Grade <= 69 && Grade >= 60 || attendance >= 60) return "Grade D";
    if(Grade <= 59 && Grade >= 50 || attendance >= 80) return "Grade B";
    else "Bettter Trying";
}
console.log(Multipleconditon(90, 90));