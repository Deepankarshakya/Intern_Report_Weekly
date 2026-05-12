// Data
const student = [
    { name: "Alice", scores: [85, 90, 92] },
    { name: "Bob", scores: [60, 75, 72] },
    { name: "Charlie", scores: [95, 98, 100] }    
];
// Average Score
const averagee =student.map(n => {
    const total = n.scores.reduce((num, add)=> num + add, 0);
    const average = total / n.scores.length
    const high = Math.max(...n.scores);
    const low = Math.min(...n.scores);
    function pass(){
        if(average>=70) return "Pass";
        else
            return "Fail";
    }
    return {
        name: n.name,
        average: average,
        HighSchore : high,
        LowScore : low,
        passed: pass()
    }
});
console.log(averagee);

const honourole = averagee.filter(n => n.average >= 90);
const passing = averagee.filter(n => n.average >= 70);
const failing = averagee.filter(n => n.average < 70);
console.log("=======Honor Role =======");
console.log(honourole);
console.log("======= Passing =======");
console.log(passing);
console.log("======= Failed =======");
console.log(failing);
