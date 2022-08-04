const main = document.querySelector('.main');

const myLibrary = [];

function Book(name, author, numberOfPages, isRead) {
    this.name = name;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = Boolean(isRead);
}

function addBookToLibrary(name, author, numberOfPages, isRead) {
    let newBook = new Book(name, author, numberOfPages, isRead);
    myLibrary.push(newBook);
}

function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}

function createButton() {
    addBookButton = document.createElement('button')
    addBookButton.classList.add('add-book');
    main.appendChild(addBookButton);
    addBookButton.textContent = 'Add Book';
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        let bookName = document.createElement('p');
        main.appendChild(card);
        card.appendChild(bookName);
        bookName.classList.add('book-name');
        bookName.textContent = `${myLibrary[i].name}`;
        let bookAuthor = document.createElement('p');
        card.appendChild(bookAuthor);
        bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        let bookPages = document.createElement('p');
        card.appendChild(bookPages);
        bookPages.textContent = `Pages: ${myLibrary[i].numberOfPages}`;
        let bookStatus = document.createElement('p');
        card.appendChild(bookStatus);
        bookStatus.textContent = `Status: ${myLibrary[i].isRead ? 'Read' : 'Not read'}`;
    }
    createButton();
}


addBookToLibrary('1', 'Me', '456', true);
addBookToLibrary('2', 'You', '123', false);
addBookToLibrary('3', 'They', '987', false);
addBookToLibrary('4', 'He', '789', true);
addBookToLibrary('5', 'She', '654', true);
addBookToLibrary('6', 'Us', '321', false);

showBooks();
displayBooks();