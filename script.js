const ulBookList = document.querySelector('.book-list');
const newBookBtn = document.querySelector('.add-new-book');
const newBookForm = document.querySelector('#new-book-form form');
const newBookFormModal = document.getElementById('new-book-form');
const closeNewBookForm = document.querySelector('.close-new-book-form');
const removeBookBtn = document.querySelector('.remove-book-btn');

const myLibrary = [];

function Book(title, author, numberOfPages, rate, cover, readingStatus){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.rate= rate;
    this.cover = cover;
    this.readingStatus = readingStatus;
}

const sapiens1 = new Book('Sapiens: Uma Breve História da Humanidade', 'Yuval Noah Harari', 250, 4, './img/sapiens-cover.png', 'pending');
const sapiens2 = new Book('Sapiens: Uma Breve História da Humanidade', 'Yuval Noah Harari', 250, 3, './img/sapiens-cover.png', 'reading');
const sapiens3 = new Book('Sapiens: Uma Breve História da Humanidade', 'Yuval Noah Harari', 250, 2, './img/sapiens-cover.png', 'read');

myLibrary.push(sapiens1);
myLibrary.push(sapiens2);
myLibrary.push(sapiens3);

myLibrary.forEach(displayBooks);

function displayBooks(Book){

    const li = document.createElement('li');
    li.classList.add('book-card');
    li.setAttribute('data-index', myLibrary.indexOf(Book));
    
    const removeBook = document.createElement('img');
    removeBook.setAttribute('src', './img/removebook.svg');
    removeBook.classList.add('remove-book-btn');

    const img = document.createElement('img');
    img.classList.add('book-card-cover');
    img.setAttribute('src', Book.cover);

    const bookRate = document.createElement('p');
    bookRate.classList.add('book-card-rate');
    bookRate.innerHTML = `Nota ${Book.rate}`;

    const bookTitle = document.createElement('h3');
    bookTitle.classList.add('book-card-title');
    bookTitle.textContent = Book.title;

    const div = document.createElement('div');
    div.classList.add('book-card_information');

    const author = document.createElement('p');
    author.textContent = Book.author;

    const pages = document.createElement('p');
    pages.textContent = Book.numberOfPages;


    div.append(author);
    div.append(pages);

    const select = document.createElement('select');
    select.classList.add('book-card-reading-status');

    const optionReading = document.createElement('option');
    optionReading.value = 'reading';
    optionReading.textContent = 'Reading';

    const optionRead = document.createElement('option');
    optionRead.value = 'read';
    optionRead.textContent = 'Read';

    const optionPending = document.createElement('option');
    optionPending.value = 'pending';
    optionPending.textContent = 'Pending';

    select.append(optionPending);
    select.append(optionReading);
    select.append(optionRead);

    select.addEventListener('change', () => {
        Book.readingStatus = select.value; // Atualiza o status do livro com o valor selecionado
        console.log(`Novo status de leitura: ${Book.readingStatus}`);
    });

    li.append(removeBook);
    li.append(img);
    li.append(bookRate);
    li.append(bookTitle);
    li.append(div);
    li.append(select);

    select.value = Book.readingStatus;

    ulBookList.append(li);

}

newBookBtn.addEventListener('click', ()=>{
    newBookFormModal.showModal();
});

closeNewBookForm.addEventListener('click', ()=>{
    newBookFormModal.close();
});

newBookForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    formData = new FormData(newBookForm);

    const book = new Book();

    book.cover = URL.createObjectURL(formData.get("cover"));
    book.title = formData.get("title");
    book.author = formData.get("author");
    book.readingStatus = formData.get("readingStatus");
    book.rate = formData.get("rating");
    book.numberOfPages = formData.get("pages");
    
    console.log(book.cover);

    myLibrary.push(book);
    displayBooks(book);

    newBookForm.reset();
    newBookFormModal.close();

});

ulBookList.addEventListener('click', (event)=>{
    if(event.target.closest('.remove-book-btn')){
        const index = event.target.closest('.book-card').getAttribute('data-index');
        myLibrary.splice(index, 1);
        ulBookList.innerHTML = ''; // Limpando a lista para re-renderizar
        myLibrary.forEach(displayBooks); // Re-exibindo todos os livros atualizados
    }
})
