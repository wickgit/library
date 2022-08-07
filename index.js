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
        console.log(i, 'book', myLibrary[i]);
    }
}

function AddBookToDisplay() {
    let card = document.createElement('div');
    card.classList.add('card');
    main.insertBefore(card, addBookButton);
    let lastBookIndex = myLibrary.length - 1;
    for (let key in myLibrary[lastBookIndex]) {
        let p = document.createElement('p');
        card.appendChild(p);
        if (key === 'name') {
            p.classList.add('book-name');
            p.textContent = `${myLibrary[lastBookIndex].name}`;
        } else if (key === 'isRead') {
            p.textContent = `Status: ${myLibrary[lastBookIndex].isRead ? 'Read' : 'Not read'}`;
        } else {
            p.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${myLibrary[lastBookIndex][key]}`;
        }
    }
    let button = document.createElement('button');
    card.appendChild(button);
    button.classList.add('remove-button');
    button.textContent = 'Remove';
}

function setAttributes(el, attrs) {
    Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
}

function makeFormField(elem) {
    const keys = ['name', 'author', 'pages', 'isRead'];
    keys.forEach(key => {
            let div = document.createElement('div');
            div.classList.add('input-cell');
            elem.appendChild(div);
            let input = document.createElement('input');
            if (key == 'isRead'){
                setAttributes(input, {name: key, type: 'checkbox', id: key});
            } else {
                setAttributes(input, {name: key, type: 'text', id: key});
            }
            let label = document.createElement('label');
            setAttributes(label, {for: key});
            label.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}:`;

            div.appendChild(label);
            div.appendChild(input);
        });
    let button = document.createElement('button');
    button.classList.add('submit-button');
    elem.appendChild(button);
    button.setAttribute('type', 'submit');
    button.textContent = 'Add';
}


// Event listeners

main.addEventListener('submit', e => {
    e.preventDefault();
    let form = document.querySelector('form');
    // getting data from a form
    const data = Object.fromEntries(new FormData(form).entries());
    main.removeChild(form.parentNode);
    addBookButton.style.display = 'block';
    addBookButton.textContent = 'Add book';
    addBookToLibrary(data.name, data.author, data.pages, data.isRead);
    AddBookToDisplay();
});

addBookButton.addEventListener('click', e => {
    e.target.textContent = '';
    addBookButton.style.display = 'none';
    let card = document.createElement('div');   
    card.classList.add('card');
    main.insertBefore(card, addBookButton);
    card.classList.add('form-wrapper');
    let form = document.createElement('form');
    card.appendChild(form);
    form.classList.add('input-form');
    makeFormField(form);
});

main.addEventListener('click', e => {
    const hasClass = e.target.classList.contains('remove-button')
    if (hasClass) {
        const card = e.target.parentNode;
        const index = Array.from(main.children).indexOf(card);
        myLibrary.splice(index, 1);
        main.removeChild(card);
    }
})