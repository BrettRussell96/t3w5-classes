// import library class, book class, Audiobook class, games class, movies class, music class

const { Media } = require("./media");
const { Book } = require("./book");
const { Library } = require("./library");

// create instances of classes

// let lotr = new Media("fellowship of the ring");
let lotr = new Book("fellowship of the ring");

console.log(lotr);
console.log(lotr.name);
console.log(lotr.edition);

// Lord of the rings as an instance of book class
// Class is blueprint
// instance is thing we build on the blueprint
// verb is instantiate

// Do things with those instances

// create an instance of a library
// add media instances in to the library instance

let libraryInstance = new Library();
libraryInstance.books.push(lotr);


// log the data in the library
// console.log(libraryInstance);

console.log(libraryInstance.books[0].name);
console.log(libraryInstance.books.length);

let lotr2 = new Book("The two towers", "fancy");
libraryInstance.books.push(lotr2);
console.log(libraryInstance.books[1].name);

console.log(Book.count);
console.log(libraryInstance);

lotr2 = null;
Book.removeBook();

console.log(Book.count);
console.log(libraryInstance.books[0].getBookName());