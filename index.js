const main = document.querySelector('.main');
const addBookButton = document.querySelector('.add-book');

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

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        for (let key in myLibrary[i]) {
            let p = document.createElement('p');
            main.insertBefore(card, addBookButton);
            card.appendChild(p);
            if (key == 'name') {
                p.classList.add('book-name');
                p.textContent = `${myLibrary[i].name}`;
            } else if (key == 'isRead') {
                p.textContent = `Status: ${myLibrary[i].isRead ? 'Read' : 'Not read'}`;
            } else {
                p.textContent = `${key}: ${myLibrary[i][key]}`;
            }

        }
        
        
        
        // let bookName = document.createElement('p');
        // main.insertBefore(card, addBookButton);
        // card.appendChild(bookName);
        // bookName.classList.add('book-name');
        // bookName.textContent = `${myLibrary[i].name}`;
        // let bookAuthor = document.createElement('p');
        // card.appendChild(bookAuthor);
        // bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        // let bookPages = document.createElement('p');
        // card.appendChild(bookPages);
        // bookPages.textContent = `Pages: ${myLibrary[i].numberOfPages}`;
        // let bookStatus = document.createElement('p');
        // card.appendChild(bookStatus);
        // bookStatus.textContent = `Status: ${myLibrary[i].isRead ? 'Read' : 'Not read'}`;
    }
}

function setAttributes(el, attrs) {
    Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
}

function makeFormField(elem) {
    for (let i = 0; i < 4; i++) {
        let div = document.createElement('div');
        div.classList.add('input-cell');
        elem.appendChild(div);
        switch (i) {
            case 0:
                let input_name = document.createElement('input');
                setAttributes(input_name, {name: 'name', type: 'text', id: 'name'});
                let label_name = document.createElement('label');
                setAttributes(label_name, {for: 'name'});
                label_name.textContent = 'Name:';

                div.appendChild(label_name);
                div.appendChild(input_name);
                break;
            case 1:
                let input_author = document.createElement('input');
                setAttributes(input_author, {name: 'author', type: 'text', id: 'author'});
                let label_author = document.createElement('label');
                setAttributes(label_author, {for: 'author'});
                label.textContent = 'Author:';

                div.appendChild(label_author);
                div.appendChild(input_author);
                break;
            case 2:
                let input_pages = document.createElement('input');
                setAttributes(input_pages, {name: 'pages', type: 'text', id: 'pages'});
                let label_pages = document.createElement('label');
                setAttributes(label_pages, {for: 'pages'});
                label_pages.textContent = 'Pages:';

                div.appendChild(label_pages);
                div.appendChild(input_pages);
                break;
        }
    }
}

addBookButton.addEventListener('click', e => {
    e.target.textContent = '';
    addBookButton.style.display = 'none';
    let card = document.createElement('div');
    card.classList.add('card');
    main.insertBefore(card, addBookButton);
    card.classList.add('input-form');
    makeFormField(card);
});


addBookToLibrary('1', 'Me', '456', true);
addBookToLibrary('2', 'You', '123', false);
addBookToLibrary('3', 'They', '987', false);
addBookToLibrary('4', 'He', '789', true);
addBookToLibrary('5', 'She', '654', true);
addBookToLibrary('6', 'Us', '321', false);

showBooks();
displayBooks();