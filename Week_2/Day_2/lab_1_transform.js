const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map transform's each number from the array or object
const double = number.map(n => n * 2);
console.log(double);

// Filter will only change the number which has only pass the test.
const event = number.filter(n => n%2===0);
console.log(event);

//reduce - combines all into one single value
const evens = number.reduce((acc, n) => acc + n, 0);
console.log(evens);

// Changing!
const sumOfSquares = number.filter(n => n > 3).map(n => n * n).reduce((acc, n) => acc + n,0);
console.log(sumOfSquares);