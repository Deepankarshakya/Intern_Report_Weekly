const number = [2, 4, 6, 8, 10];

// every - All the array element must pass and it will show true else false
const evenornot = number.every(n => n%2 === 0); //All passed so true
const biggerormot = number.every( n=> n > 5); // All Didnt pass so false
console.log(evenornot);
console.log(biggerormot);

//some - In all the element in the array at least one must pass, if even just 1 pass then true or else false

const isthere2 = number.some(n => n === 2);
const isthere9 = number.some(n => n === 9);
const isnumberlessthanzero = number.some(n => n < 0);
console.log(isthere2);
console.log(isthere9);
console.log(isnumberlessthanzero);