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
                p.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${myLibrary[i][key]}`;
            }
        }
    }
}

function setAttributes(el, attrs) {
    Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
}

function makeFormField(elem) {
    const keys = ['name', 'author', 'pages', 'isread'];
    keys.forEach(key => {
            let div = document.createElement('div');
            div.classList.add('input-cell');
            elem.appendChild(div);
            let input = document.createElement('input');
            setAttributes(input, {name: key, type: 'text', id: key});
            let label = document.createElement('label');
            setAttributes(label, {for: key});
            label.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}:`;

            div.appendChild(label);
            div.appendChild(input);
        });
    let button = document.createElement('button');
    button.classList.add('submit-button');
    elem.appendChild(button);
    button.textContent = 'Add';
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
// addBookToLibrary('2', 'You', '123', false);
// addBookToLibrary('3', 'They', '987', false);
// addBookToLibrary('4', 'He', '789', true);
// addBookToLibrary('5', 'She', '654', true);
// addBookToLibrary('6', 'Us', '321', false);

showBooks();
displayBooks();