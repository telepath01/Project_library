"use strict";

let bookLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {}

function bookInput(bookTitle) {
  let i = 0;
  bookTitle = "";
  let bookAuthor = "";
  let bookPages = "";
  let bookRead = "";
  for (i = 0; i >= bookTitle.length; i = 0) {
    bookTitle = prompt("Book Title");
  }
  return bookTitle;
  console.log(bookTitle);
}
bookInput();
