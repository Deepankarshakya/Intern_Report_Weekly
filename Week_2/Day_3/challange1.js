class BankAccount {
    constructor(owner, initialBalance = 0){
        this.owner = owner;
        this.balance = initialBalance;
        this.transaction = [];
    }
    deposit(amount){
        this.balance = this.balance +  amount;
        this.transaction.push(`Deposite: +${amount}`);
        return this.balance;
    }
    withdraw(amount){
        this.balance = this.balance - amount;
        this.transaction.push(`Withdrawl: -${amount}`);
        return this.transaction;
    }
    getBalance(){
        return this.balance;
    }
    getTransactionHistory(){
        return this.transaction + ` Total = ${this.balance}`;
    }
}
const account = new BankAccount("John", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());
console.log(account.getTransactionHistory());