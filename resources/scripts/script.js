"use strict";

let bookLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {
  let bookName = String(prompt("What is the book name?"));
  let bookAuthor = prompt("Who is the Author?");
  let bookPages = prompt("How many pages?");
  let bookRead = prompt("Did you read it? True or false");
  console.log(bookName, bookAuthor, bookPages, bookRead);
}
addBookToLibrary();
