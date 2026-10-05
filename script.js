"use strict";

// Constructor for book object
function Book(idBook, title, author, pageNumber, haveRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.idBook = idBook;
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.haveRead = haveRead;

    this.info = function() {
        const readPhrase = haveRead ? "already read" : "not read yet"
        return `ID: ${idBook} - ${this.title} by ${this.author}, ${this.pageNumber} pages, ${readPhrase}`;
    }
}

// Function to create and add a book
function addBookToLibrary(title, author, pageNumber, haveRead) {
    const newBook = new Book(crypto.randomUUID, title, author, pageNumber, haveRead);
    myCollection.push(newBook);
}

// Array to hold book objects
let myCollection= [];

addBookToLibrary("test1", "Myself", "12", false);
addBookToLibrary("test2 with some additions", "Myself", "120", true);
addBookToLibrary("test3 and way more stuff on here and there", "Myself", "1100", false);


const bookshelf = document.querySelector(".bookshelf");

// Insert all books from myCollection into HTML
// for (let book of myCollection) {
//     const bookTitle = document.createElement("h3");
//     bookTitle.textContent = book.title;
//     bookshelf.appendChild(bookTitle);
// }

const bookCard = document.createElement("div");
bookCard.classList.add("book-card")
bookshelf.appendChild(bookCard);

const bookLabel = document.createElement("div");
bookLabel.classList.add("book-label")
bookCard.appendChild(bookLabel);

const bookTitle = document.createElement("h3");
bookTitle.textContent = myCollection[1].title;
bookLabel.appendChild(bookTitle);

const bookAuthor = document.createElement("p");
bookAuthor.textContent = myCollection[1].author;
bookLabel.appendChild(bookAuthor);

const bookTags = document.createElement("div");
bookTags.classList.add("book-tags")
bookCard.appendChild(bookTags);

const bookPageNumber = document.createElement("span");
bookPageNumber.classList.add("tag");
bookPageNumber.textContent = myCollection[1].pageNumber + " pages";
bookTags.appendChild(bookPageNumber);

const bookHaveRead = document.createElement("span");
bookHaveRead.classList.add("tag");
bookHaveRead.textContent = myCollection[1].haveRead ? "already read" : "not read yet";
bookTags.appendChild(bookHaveRead);