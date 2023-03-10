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
const deleteButton = document.querySelector(".delete");
// Element creation
// let deleteButtons;
// Global Variables
const editImage = "resources/images/pencil.png";
const deleteImage = "resources/images/erase.png";
let formActive = false;
let book = {};
let myLibrary = [];
let read = "";
let currentDiv = "";

// Constructors
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}


// Fucntions
function vallueReset() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInputNo.checked = false;
  readInputYes.checked = false;
}

function checkRead() {
  if (readInputNo.checked) {
    read = String("No");
  } else if (readInputYes.checked) {
    read = String("Yes");
  }
  return read;
}

function creatBookSections(el, content, className) {
  const element = document.createElement(el);
  element.textContent = content;
  element.setAttribute("class", className);
  return element;
}
function createImage(image) {
  const buttonImage = document.createElement("img");
  buttonImage.setAttribute("src", image);
  buttonImage.setAttribute("class", "block-img");
  return buttonImage;
}

function createButtonSection(el, content, className, index) {
  const creatButton = document.createElement(el);
  creatButton.appendChild(content);
  creatButton.setAttribute("class", className);
  index = index;

  return creatButton;
}

function createBook(book, index) {
  const createDiv = document.createElement("div");
  const createDivChild = document.createElement("div");
  const createDivButton = document.createElement("div");
  bookParent.appendChild(createDiv);
  createDiv.setAttribute("id", index);
  createDiv.setAttribute("key", index);
  createDiv.classList.add("book-block");
  createDiv.appendChild(createDivChild);
  createDivChild.setAttribute("id", index);
  createDivChild.setAttribute("key", index);
  createDivChild.classList.add("card-body");
  createDivChild.appendChild(
    creatBookSections("h3", `Title:${book.title}`, "book-title")
  );
  createDivChild.appendChild(
    creatBookSections("p", `Author:${book.author}`, "book-author")
  );
  createDivChild.appendChild(
    creatBookSections("p", `Pages:${book.pages}`, "book-pages")
  );
  createDivChild.appendChild(
    creatBookSections("p", `Read:${book.read}`, "book-read")
  );
  createDiv.appendChild(createDivButton);
  createDivButton.setAttribute("id", index);
  createDivButton.setAttribute("key", index);
  createDivButton.classList.add("card-buttons");
  createDivButton.appendChild(
    createButtonSection("button", createImage(editImage), "edit")
  );
  createDivButton.querySelector(".edit").addEventListener("click", () => {
    if (myLibrary[index].read === "Yes") {
      myLibrary[index].read = "No";
    } else if (myLibrary[index].read === "No") {
      myLibrary[index].read = "Yes";
    }
    bookRender();
  });

  createDivButton.appendChild(
    createButtonSection("button", createImage(deleteImage), "delete", index)
  );
  createDivButton.querySelector(".delete").addEventListener("click", () => {
    myLibrary.splice(index, 1);
    bookRender();
  });
}

function bookRender() {
  bookParent.textContent = "";
  myLibrary.map((book, index) => {
    createBook(book, index);
  });
}

bookAddBtn.addEventListener("click", () => {
  if (!formActive) {
    formContainer.style.display = "grid";
    formActive = true;
  } else if (formActive) {
    formContainer.style.display = "none";
    formActive = false;
  }
});

submitBtn.addEventListener("click", () => {
  checkRead();
  book = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    String(read)
  );
  myLibrary.push(book);
  // bookRender();
  // addBook();
  vallueReset();
  formContainer.style.display = "none";
  event.preventDefault();
  bookRender();
});
bookRender();
