document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const totalSlides = slides.length;
    let slideInterval;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        indicators[i].classList.toggle('active', i === index);
      });
      currentIndex = index;
    }
  
    function nextSlide() {
      let index = (currentIndex + 1) % totalSlides;
      showSlide(index);
    }
  
    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, 5000); 
    }
  
    function stopAutoSlide() {
      clearInterval(slideInterval);
    }
  
    indicators.forEach(indicator => {
      indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-slide'));
        showSlide(index);
        stopAutoSlide();
        startAutoSlide(); 
      });
    });
  
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
  
    showSlide(currentIndex);
    startAutoSlide();
  });
  