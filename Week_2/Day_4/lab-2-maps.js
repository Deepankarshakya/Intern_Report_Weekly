const map = new Map();

map.set("name", "John");
map.set("age", 25);
map.set("city", "Kathmandu");

console.log(map.get("name"));
console.log(map.has("age"));
console.log(map.size);
map.delete("city");
console.log([...map.keys()]);
console.log([...map.values()]);
console.log([...map.entries()]);

for(const [key, value] of map){
    console.log(`${key}: ${value}`);
}