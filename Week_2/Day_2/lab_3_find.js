const people = [
    {name : "John", age : 25},
    {name : "Jane", age : 30},
    {name : "Bob", age : 25}
];
// find() is used for finding a single value according to the condition
console.log(people.find(p => p.age === 25));

// findIndex() is used to find how many are there according to the conditon
console.log(people.findIndex(n => n.age === 30));

// findlast (newer JS)
const lastEven = [1, 2, 3, 4, 5].findLast(n => n%2 === 0);
console.log(lastEven);