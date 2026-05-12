const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const add = (a,b) => a + b;
const subtraction = (a,b) => a - b;
const Multipacation = (a,b) => a * b;
const Divide = (a,b) => a / b;
const power = (a,b) => Math.pow(a + b);
const square = (a,b) => Math.sqrt(a + b);
function menu(){
    console.log("1.ADD \n2.Subtract \n3.Multiply \n4.Divide \n5.Power \n6.Square \n7.Exit");
    readline.question("\nChoose : ", (choice) => {
        if (choice === '7'){
            console.log("Goodbye!");
            readline.close();
            return;
        }
        handleOperation(choice);
    });
}
function handleOperation(choice){
    if(choice === '1')
    {
        readline.question("Enter number : ", (num1) => {
            readline.question("Enter number : ", (num2) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let result;
                console.log(`Result: ${add(a,b)}\n`);
                menu();
            })
        });
    };
    if(choice === '2')
    {
        readline.question("Enter number : ", (num1) => {
            readline.question("Enter number : ", (num2) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let result;
                console.log(`Result: ${subtraction(a,b)}\n`);
                menu();
            })
        });
    };
    if(choice === '3')
    {
        readline.question("Enter number : ", (num1) => {
            readline.question("Enter number : ", (num2) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let result;
                console.log(`Result: ${Multipacation(a,b)}\n`);
                menu();
            })
        });
    };
    if(choice === '4')
    {
        readline.question("Enter number : ", (num1) => {
            readline.question("Enter number : ", (num2) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let result;
                console.log(`Result: ${Divide(a,b)}\n`);
                menu();
            })
        });
    };
    if(choice === '5')
    {
        readline.question("Enter number : ", (num1) => {
            readline.question("Enter number : ", (num2) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let result;
                console.log(`Result: ${power(a,b)}\n`);
                menu();
            })
        });
    };
    if(choice === '6')
    {
        readline.question("Enter number : ", (num1) => {
            readline.question("Enter number : ", (num2) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let result;
                console.log(`Result: ${square(a,b)}\n`);
                menu();
            })
        });
    };
}
menu();