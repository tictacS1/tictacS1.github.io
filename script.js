const gifs = document.querySelectorAll('.gif');
const title = document.querySelector('.title');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showGif(index) {
    gifs.forEach(gif => gif.style.display = 'none');
    gifs[index].style.display = 'block';
    title.textContent = gifs[index].getAttribute('alt');
    currentIndex = index;
}

function prevGif() {
    currentIndex = (currentIndex === 0) ? gifs.length - 1 : currentIndex - 1;
    showGif(currentIndex);
}

function nextGif() {
    currentIndex = (currentIndex === gifs.length - 1) ? 0 : currentIndex + 1;
    showGif(currentIndex);
}

prevBtn.addEventListener('click', prevGif);
nextBtn.addEventListener('click', nextGif);

showGif(currentIndex);