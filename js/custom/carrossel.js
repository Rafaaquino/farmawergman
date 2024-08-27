let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
let autoSlideInterval;

function showSlide(index) {
    const carouselSlide = document.querySelector('.carousel-slide');
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    carouselSlide.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
    resetAutoSlide();
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(slideIndex + 1);
    }, 2000); // Avança o slide a cada 3 segundos
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide(); // Reinicia o temporizador de slides automáticos
}

// Inicializa o carrossel
showSlide(slideIndex);
autoSlide();