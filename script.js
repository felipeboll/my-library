const myLibrary = [];

function Book(title, author, numberOfPages, review, cover, readingStatus){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.review = review;
    this.cover = cover;
    this.readingStatus = readingStatus;
}

const sapiens1 = new Book('Sapiens: Uma Breve História da Humanidade', 'Yuval Noah Harari', 250, 4, './img/sapiens-cover.png', 'pending');
const sapiens2 = new Book('Sapiens: Uma Breve História da Humanidade', 'Yuval Noah Harari', 250, 3, './img/sapiens-cover.png', 'reading');
const sapiens3 = new Book('Sapiens: Uma Breve História da Humanidade', 'Yuval Noah Harari', 250, 2, './img/sapiens-cover.png', 'read');

myLibrary.push(sapiens1);
myLibrary.push(sapiens2);
myLibrary.push(sapiens3);

function displayBooks(book){

    const li = document.createElement('li');
    li.classList.add('book-card');


}

