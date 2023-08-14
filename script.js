let myLibrary = [];

for (let i = 0; i < myLibrary.length; i++) {
  myLibrary[i].index = i;
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//dispalying form when add button is clicked
document.getElementById("addbook").addEventListener("click", () => {
  var form = document.getElementById("bookform");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

//console.log("hello");

//creating book objects when a form is filled
document.getElementById("submit").addEventListener("click", () => {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = parseInt(document.getElementById("pages").value);
  let read = document.getElementById("read").value;

  let newBook = new Book(title, author, pages, read);
  //console.log(newBook);
  myLibrary.push(newBook);

  displayLibrary();
  displayBooks();
});

//displaying library array in console
function displayLibrary() {
  console.log("Library contents:");
  myLibrary.forEach((book) => {
    console.log(book);
  });
}

//display books in the webpage
const displayarea = document.getElementById("display-area");
function displayBooks() {
  displayarea.innerHTML = "";
  let index = 0;

  myLibrary.forEach((book) => {
    const bookcard = document.createElement("div");
    bookcard.classList.add("book-card");

    bookcard.setAttribute("data-index", index++);
    const currentindex = bookcard.getAttribute("data-index");
    console.log(currentindex);

    const titlearea = document.createElement("p");
    titlearea.textContent = `Title: ${book.title}`;
    const authorarea = document.createElement("p");
    authorarea.textContent = `Author: ${book.author}`;
    const pagesarea = document.createElement("p");
    pagesarea.textContent = `Pages: ${book.pages}`;
    const readarea = document.createElement("p");
    readarea.textContent = `read: ${book.read}`;

    const removebutton = document.createElement("button");
    removebutton.textContent = "remove";

    removebutton.addEventListener("click", () =>{
        removebook(index)}
        );

    bookcard.appendChild(titlearea);
    bookcard.appendChild(authorarea);
    bookcard.appendChild(pagesarea);
    bookcard.appendChild(readarea);
    bookcard.appendChild(removebutton);

    displayarea.appendChild(bookcard);
  });
}

//function to remove a book
function removebook(index) {
  myLibrary.slice(index, 1);
  displayLibrary();
}
