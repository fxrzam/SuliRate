let currentIndex = 0;

function showNextImage() {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    
    currentIndex = (currentIndex + 1) % totalItems;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextImage, 3000);