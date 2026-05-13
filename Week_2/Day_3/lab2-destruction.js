const user = {
    name: "John Cena",
    address: {
        city: "KTM",
        zip: "10001"
    },
    age: 24
};
//Basic
const {name, address} = user;
console.log(name, address);
//nested
const {address: {city, zip}} = user;
console.log(city, zip);
//default
const { country = "USA"} = user;
console.log(country);
//rename
const { name: fullname} = user;
console.log(fullname);