// 1. SET
// Set stores unique values only.
// Example

const set = new Set([1, 2, 3, 3, 4]);
console.log(set);
// Set will only shows unique values it will remove same values.

// Why use Set?
// Lets say you have users name:
const users = ["Sheepard", "Sheepard", "Deepankar", "Deepankar", "Loner", "Sheep"];
// And you want only unique name only 
// So without Set it will be diffcult to do it!
// So with set
const uniqueNames = [...new Set(users)];
console.log(uniqueNames); // Output will be all unique

// Important Set Methods
// 1) add()
const set_1 = new Set();

set_1.add(1);
set_1.add(2);
set_1.add(3);

console.log(set_1); // Output wil be 1,2,3 because we added 1,2,3 with add()

// 2) delete()
set_1.delete(1);
console.log(set_1); // So delete will remove the data that is given to it to delete it.

// 3) has()
console.log(set_1.has(2)); //So has checks wheather the value are there or not in the data and if it is there then true or else false.

// 4) size 
console.log(set_1.size); // So this only checks the size of the value like how many data are there.

// MOST IMPORTANT SET USE CASE
const numbers = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
const unique = [...new Set(numbers)];
console.log(unique);



// 2. Map
// map stores
// key => value

//Example
{
    name: "Deepankar"
}

// Map is more powerfull
// Creating Map
const map = new Map();

// 1)set() set is used in map to store data in it.
map.set("name", "Deepankar");
map.set("age", 23);
console.log(map); // Map is like an array but more powerfull and set helps to store values

// 2) get() is like a search which search the value of the topic.
console.log(map.get("name"));

// 3) has() just checks wheather the value is there or not!
console.log(map.has("age")); // Answer will be true or false.

// 4) delete() is a deleting a map value inside it
map.delete("age");
console.log(map.size);

// 5) keys() it shows the content of the map
console.log([...map.keys()]);

// 6) values() it shows the values of the content.
console.log([...map.values()]);

// 7) entries() shows the content and value in a array
console.log([...map.entries()]);

// Loop through Map
for (const [key, value] of map) {
    console.log(key, value);
}


// =========== Challange 1 - Word Count ========

function countWords() {
    const words = text.split(" ");
    const maps = new Map();
    for (const word of words) {
        if (maps.has(word)) {
            maps.set(word, maps.get(word) + 1);
        } else {
            maps.set(word, 1);
        }
    }
    return maps;
}
const text = "the quick brown fox jumps over a lazy dog";
console.log(countWords(text));


// Queue // Queue works like first in first out (FIFO);

// enquenue()
// queue.push(task);

// dequeue()
// queue.shift();

class TaskQueue{
    constructor(){
        this.tasks = [];
    }

    enqueue(task){
        this.tasks.push(task);
    }

    dequeue(){
        return this.tasks.shift();
    }
}

const q = new TaskQueue();
q.enqueue("Learn JS");
q.enqueue("Learn React");
console.log(q.dequeue());