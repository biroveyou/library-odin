"use strict";

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

function addBookToLibrary(title, author, pageNumber, haveRead) {
    const newBook = new Book(crypto.randomUUID, title, author, pageNumber, haveRead);
    bookCollection.push(newBook);
}

myLibrary = [];