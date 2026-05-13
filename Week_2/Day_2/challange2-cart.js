const cart = [
    { item: "Apple", price: 1, quantity: 5 },
    { item: "Bread", price: 3, quantity: 2 },
    { item: "Milk", price: 4, quantity: 1 }
];

function getSubTotal(a) {
    let sub = 0;
    for (let i = 0; i < cart.length; i++) {
        sub = (a[i].price * a[i].quantity) + sub;
    }
    return sub;
    // const sub = cart.map(n => n.price * n.quantity + n);
    // console.log(sub);
    // for(let i = 0; i<cart.length; i++){

    // }
    // const carttotal = cart.map(n => {
    //     const amt = n.price * n.quantity;
    //     console.log(`total item ${n.item} : ${amt}`);
    // });
}
function getTax(a, b) {
    let sub = 0;
    for (let i = 0; i < cart.length; i++) {
        sub = (a[i].price * a[i].quantity) + sub;
    }
    let tax = sub * b;
    return tax;
}
function getTotal(a, b) {
    let sub = 0;
    for (let i = 0; i < cart.length; i++) {
        sub = (a[i].price * a[i].quantity) + sub;
    }
    let tax = sub * b;
    return tax + sub;
}
console.log(getSubTotal(cart));
console.log(getTax(cart, 0.1));
console.log(getTotal(cart, 0.1));

function findCheapest(a) {
    let sub = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i].price < sub.price) {
            sub = a[i];
        }
    }
    console.log("========Cheapaest Item=========");
    return {
        name: sub.item,
        price: sub.price
    }
}
function findExpensive(a) {
    let sub = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i].price > sub.price) {
            sub = a[i];
        }
    }
    console.log("========Expensive Item=========");
    return {
        name: sub.item,
        price: sub.price
    }
}

function getItemCount(a){
    let sum = 0;
    for(let i = 0; i<a.length; i++){
        sum = a[i].quantity + sum
    }
    console.log("Total Items:");
    return sum;
}

console.log(findCheapest(cart));
console.log(findExpensive(cart));
console.log(getItemCount(cart));