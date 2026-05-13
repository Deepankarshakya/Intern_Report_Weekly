const a = {x: 1};
const b = {y: 2};

const merged = Object.assign({}, a, b);
console.log(merged);

const combine = {...a, ...b, z:3};
console.log(combine);

const original = {x: 1, nested: {y:2}};
const copy = {...original};
copy.nested.y = 99;
console.log(original.nested.y);

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.nested.y = 99;
console.log(original.nested.y);