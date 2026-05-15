class Phonebook{
    constructor(){
        this.contacts = new Map();
    }
    add(name, phone, email){
        this.contacts.set(name, {phone, email});
    }
    remove(name){
        return this.contacts.delete(name);
    }
    find(name){
        return this.contacts.get(name);
    }
    findByPhone(phone){
        for(let [name, data] of this.contacts){
            if(data.phone === phone){
                return {name, ...data};
            }
        }
        return null;
    }
    getAll(){
        const allContacts = [];
                for (let [name, data] of this.contacts) {
            allContacts.push({
                name,
                phone: data.phone,
                email: data.email
            });
        }
        
        return allContacts;
    }
}

const pb = new Phonebook();

pb.add("Deepankar", 9840032508, "deepankar@gmail.com");
pb.add("Aayush", 9811111111, "aayush@gmail.com");
pb.add("Nirajan", 9800000000, "nirajan@gmail.com");
console.log(pb.find("Deepankar"));

console.log(pb.findByPhone(9811111111));

console.log(pb.getAll());

pb.remove("Aayush");

console.log(pb.getAll());