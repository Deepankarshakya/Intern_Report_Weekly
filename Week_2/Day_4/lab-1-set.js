const set = new Set ([ 1,2,3,4]);
console.log([...set]);

set.add(5);
set.delete(1);
set.has(2);
set.size;

console.log(set);
const numbers = [1,2,2,3,3,3,3,4,4,4,4];
console.log(...new Set(numbers));