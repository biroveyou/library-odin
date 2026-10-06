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
}

Book.prototype.readPhrase = function() {
    return this.haveRead ? "already read" : "not read yet"
}
Book.prototype.info = function() {
    return `ID: ${this.idBook} - ${this.title} by ${this.author}, ${this.pageNumber} pages, ${this.readPhrase()}`;
}
Book.prototype.toggleHaveRead = function() {
    this.haveRead = !this.haveRead;
    return this.readPhrase();
}

// Function to create and add a book
function addBookToLibrary(title, author, pageNumber, haveRead) {
    const newBook = new Book(crypto.randomUUID(), title, author, pageNumber, haveRead);
    myCollection.push(newBook);
}

function getIndex(id) {
    return myCollection.findIndex((item) => {
        return item.idBook === id;
    });
}

// Insert all books from myCollection into HTML
function displayBook(book) {
    const bookshelf = document.querySelector(".bookshelf");

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-id", `${book.idBook}`);
    bookshelf.appendChild(bookCard);

    const bookLabel = document.createElement("div");
    bookLabel.classList.add("book-label");
    bookCard.appendChild(bookLabel);

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;
    bookLabel.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;
    bookLabel.appendChild(bookAuthor);

    const bookTags = document.createElement("div");
    bookTags.classList.add("book-tags");
    bookCard.appendChild(bookTags);

    const bookPageNumber = document.createElement("span");
    bookPageNumber.classList.add("tag");
    bookPageNumber.textContent = book.pageNumber + " pages";
    bookTags.appendChild(bookPageNumber);

    const bookHaveRead = document.createElement("span");
    bookHaveRead.classList.add("tag");
    bookHaveRead.textContent = book.readPhrase();
    book.haveRead && bookHaveRead.classList.add("already-read");
    bookTags.appendChild(bookHaveRead);

    const bookAction = document.createElement("div");
    bookAction.classList.add("book-action");
    bookCard.appendChild(bookAction);

    const removeBookBtn = document.createElement("button");
    removeBookBtn.classList.add("remove-book-btn");
    bookAction.appendChild(removeBookBtn);
    removeBookBtn.addEventListener("click", (item) => {
        myCollection.splice(getIndex(item.idBook), 1);
        bookCard.remove();
    });

    const readStatusBtn = document.createElement("button");
    readStatusBtn.classList.add("read-status-btn");
    bookAction.appendChild(readStatusBtn);
    readStatusBtn.addEventListener("click", (item) => {
        bookHaveRead.textContent = book.toggleHaveRead();
        bookHaveRead.classList.toggle("already-read");
    });
}

function refreshDisplay() {
    for (let book of myCollection) {
        displayBook(book);
    }
}

// Array to hold book objects
let myCollection= [];

addBookToLibrary("The Fellowship of the Ring", "J. R. R. Tolkien", "479", false);
addBookToLibrary("The Two Towers", "J. R. R. Tolkien", "415", true);
addBookToLibrary("The Return of the King", "J. R. R. Tolkien", "496", false);

refreshDisplay();

const newBookDialog = document.querySelector("dialog");
const newBookForm = document.querySelector(".dialog-form")
const newBookBtn = document.querySelector("#new-book-btn");
const cancelBookBtn = document.querySelector("#cancel-book-btn");
const addBookBtn = document.querySelector("#add-book-btn");

newBookBtn.addEventListener("click", () => {
    newBookDialog.showModal();
});

cancelBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    newBookForm.reset();
    newBookDialog.close();
})

addBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (newBookForm.checkValidity()) {
        const formControls = newBookForm.elements;
        addBookToLibrary(formControls[0].value, formControls[1].value, formControls[2].value, formControls[4].checked);
        displayBook(myCollection[myCollection.length - 1]);
        newBookForm.reset();
        newBookDialog.close();
    } else {
        newBookForm.reportValidity();   
    }
});