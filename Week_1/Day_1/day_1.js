const mySelf = [
    {name: "Deepankar", age: 24, place: "Thapahity, Lalitpur-6"},
    {name: "Deep", age: 24, place: "Thapahity, Lalitpur-4"},
    {name: "Deepak", age: 24, place: "Thapahity, Lalitpur-2"},
    {name: "Deepa", age: 24, place: "Thapahity, Lalitpur-1"}
];
function me(){
    let Deepankar = "";
    for(let i = 0; i < mySelf.length; i++){
       Deepankar += "My name is " + mySelf[i].name + ". " + "I am " + mySelf[i].age + " years old. " + "I live in " + mySelf[i].place + ".\n";
    }
    return Deepankar;
}
console.log(me());

// First Task
console.log("Hello, JavaScript.");
console.log("My name is Deepankar Shakya.");
console.log("I'm learning JavaScript.");

//Second Task 
const name = "Deepankar Shakya";
const age = 24;
const address = "Lalitpur-6, Thapahity.";
function details(){
    let full = `Name: ${name}, age: ${age}, address: ${address}`;
    return full;
}
console.log(details());

