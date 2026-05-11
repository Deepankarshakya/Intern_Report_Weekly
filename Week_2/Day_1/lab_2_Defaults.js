function createUser(name, age = 18, city = "unKnown"){
    return (name, age, city);
}
console.log(createUser("John"));
console.log(createUser("Jane", 25)); 
console.log(createUser("Bob", 30, "Patan")); 

function calculator(a, b = 1, operator = "add"){
    if (operator === "add") return console.log( a + b);
    if (operator === "subtraction") return console.log(a - b);
    if (operator === "multiply") return console.log(a * b);
    if (operator === "divode") return console.log(a / b);
}
calculator(1,2,"add");

