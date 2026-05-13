function myMap(arr, fn){
    const result = [];
    for(let i=0; i<arr.length; i++){
        result.push(fn(arr[i], i, arr));
    }
    return result;
}
function myFilter(arr, fn){
    const result = [];
    for(let i = 0; i<arr.length; i++){
        if(fn(arr[i], i, arr)){
        result.push(arr[i]);
        }
    }
    return result;
}
function myReduce(arr, fn, initial) {
    let result = initial;
    for (let i = 0; i < arr.length; i++) {
        result = fn(result, arr[i], i, arr);
    }
    return result;
}
function myFind(arr, fn){
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i, arr)){
            return arr[i];
        }
    }
    return undefined;
}




const test = [1, 2, 3];
console.assert(JSON.stringify(myMap(test, x => x * 2)) === JSON.stringify(test.map(x => x * 2)));
console.assert(JSON.stringify(myFilter(test, x => x % 2 === 0)) === JSON.stringify(test.filter(x => x % 2 === 0)));
console.assert(myFind(test, x => x > 1) === test.find(x => x > 1));
console.assert(myReduce(test, (acc, curr) => acc + curr, 0) === test.reduce((acc, curr) => acc + curr, 0));