"use strict";

// HTML Refrences
const bookAddBtn = document.querySelector(".add-book");
const formContainer = document.querySelector(".book-form-container");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInputYes = document.getElementById("yes");
const readInputNo = document.getElementById("no");
const submitBtn = document.querySelector(".submit-btn");
const bookParent = document.getElementById("book-main");
// Element creation
const createDiv = document.createElement("div");

// Global Variables
let formActive = false;
let myLibrary = [
  {
    title: "Doom",
    author: "Paul",
    pages: 300,
    read: true,
  },
];

// Constructors
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
// Fucntions

function createBook(book, index) {
  createDiv;
}

function bookRender() {
  myLibrary.map((book, index) => {
    createBook(book, index);
  });
}
bookRender();
