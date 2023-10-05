let currentSlide = 0; 
const slides = document.querySelectorAll('.paper');

function showSlide(slideIndex) {
if (slideIndex < 0) {
         currentSlide = slides.length - 1;
    }   else if (slideIndex >= slides.length) {
        currentSlide = 0;
    }
slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[currentSlide].style.display = 'block';
}
function nextSlide() {
    currentSlide++;
showSlide(currentSlide);
}
function previousSlide() {
    currentSlide--;
showSlide(currentSlide);
}

showSlide(currentSlide); 
function fetchBooksAndCreateList() {
 const booksList = document.getElementById('books-list');
const image = 'images/ic1';
     const api = 'https://siri-1245.github.io/ai_midterm/ai_mt.json'; 
 const bookname = 'booktitle';
    const imagePathPrefix = 'images/book.jpeg/'; 

    fetch(api)
        .then((response) => response.json())
        .then((data) => {
    const books = data.books.filter((book) => book.published);
    books.forEach((book) => {
         const bookElement = document.createElement('div');
 bookElement.classList.add('book');
     const pic = document.createElement('img');
 pic.src = 'images/book.jpeg'; 
 bookElement.appendChild(pic);
 const booktitle = document.createElement('div');
    booktitle.classList.add(bookname);
    booktitle.textContent = book.title;
 bookElement.appendChild(booktitle);
     booksList.appendChild(bookElement);
            });
        })
        .catch((error) => console.error(error));
}

fetchBooksAndCreateList();
