"use strict";

function Book(idBook, title, author, pageNumber) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.idBook = idBook;

    this.info = function() {
        return `ID: ${idBook} - ${this.title} by ${this.author}, ${this.pageNumber} pages`;
    }
}

function addBookToLibrary(title, author, pageNumber) {
    const newBook = new Book(crypto.randomUUID, title, author, pageNumber);
    bookCollection.push(newBook);
}

myLibrary = [];