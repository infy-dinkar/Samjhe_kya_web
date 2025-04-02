document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.carousel-card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    const cardCount = cards.length;
    
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : cardCount - 1;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < cardCount - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
    
    // Auto-rotate carousel (optional)
    setInterval(function() {
        currentIndex = (currentIndex < cardCount - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 5000);
});