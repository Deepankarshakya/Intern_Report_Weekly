function operator(a,b, callback){
    return callback(a,b);
}

const add = (a, b) => a +b;
const multiply = (a, b) => a * b;
const power = (a, b) =>Math.pow(a,b);

console.log(operator(8,3,add));
console.log(operator(5,3,multiply));
console.log(operator(2,44,power));

function processArray(arr, callback){
    return arr.map(callback);
}
const number = [1, 2, 3, 4, 5];
console.log(processArray(number, x => x * 2));
console.log(processArray(number, x => x ** 2));