const person = {
    name: "Deepankar",
    age: 24,
    city: "Kathmandu",
    greet(){
        return `hi I'm ${this.name}`;
    },
    ["_" + "name"]: "John"
};
console.log(person.name);
console.log(person["age"]);
console.log(person.greet());

// Object Keys, Values, Entries
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));