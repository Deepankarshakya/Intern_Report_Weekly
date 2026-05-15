class Product {
    constructor(name, price, quantity) {
        this.id = Math.floor(Math.random() * 1000);
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.createdAt = new Date().toLocaleString();
    }
}

class Inventory {
    constructor() {
        this.products = [];
    }
    
    addProduct(product) {
        this.products.push(product);
    }
    
    updateQuantity(id, quantity) {
        this.products.push(id,quantity);
    }
    
    getProduct(id) {
        return this.products.filter(n => n.id === id);
    }
    
    getLowStock(threshold = 10) {
        return this.products.filter(n => n.quantity < 10);
    }
    
    getTotalValue() {
        return this.products.reduce((acc, add) => acc + (add.price * add.quantity), 0);
    }
    
    removeOutOfStock() {
        return this.products.filter(n => n.quantity >  0);
    }
}

const myShop = new Inventory();

const apple = new Product("Apple", 1.5, 15);
const mango = new Product("Mango", 2.0, 5);
const orange = new Product("Orange", 5.5, 0);

myShop.addProduct(apple);
myShop.addProduct(mango);

console.log("Total Value before clean:", myShop.getTotalValue());

myShop.removeOutOfStock();

console.log("Products remaining:", myShop.products.length);
console.log("Low Stock Items:", myShop.getLowStock(10));