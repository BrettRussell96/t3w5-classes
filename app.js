// import library class, book class, Audiobook class, games class, movies class, music class

const { Media } = require("./media")
const { Book } = require("./book")
const { Library } = require("./library")

// create instances of classes

// let lotr = new Media("fellowship of the ring");
let lotr = new Book("fellowship of the ring");
let lotr2 = new Book("The two towers", "fancy");
// console.log(lotr);
// console.log(lotr.name);
// console.log(lotr.edition);

// Lord of the rings as an instance of book class

// Do things with those instances

// create an instance of a library
// add media instances in to the library instance

let libraryInstance = new Library()
libraryInstance.books.push(lotr);
libraryInstance.books.push(lotr2);

// log the data in the library
console.log(libraryInstance);

console.log(libraryInstance.books[0].name);


console.log(libraryInstance.books.length);
console.log(Book.count);
lotr2 = null;
Book.removeBook();
console.log(Book.count);

console.log(libraryInstance.books[0].getBookName());