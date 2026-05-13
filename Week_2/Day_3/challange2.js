class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getInfo(){
        return `${this.title} by ${this.author} in ${this.year}`;
    }
}
class Library{
    constructor(){
        this.books = [];
    }

    addBook(bookObject){
        this.books.push(bookObject);
    }
    removeBook(title){
        this.books = this.books.filter(n => n.title !== title);
    }
    findByAuthor(authorname){
        return this.books.filter(n => n.author === authorname);
    }
    findByYear(year){
        return this.books.filter(n => n.year === year);
    }
    getBookCount(){
        return this.books.length;
    }
}

const lib = new Library();
lib.addBook(new Book("1984", "Orwell", 1949));
lib.addBook(new Book("Animal Farm", "Orwell", 1945));
console.log("=============Book by Orwell===============");
console.log(lib.findByAuthor("Orwell"));
console.log(lib.getBookCount());