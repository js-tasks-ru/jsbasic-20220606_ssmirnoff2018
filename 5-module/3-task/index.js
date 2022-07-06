function initCarousel() {
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
   
  let carousel = document.querySelector('.carousel__inner');
  let carouselOffsetWidth = carousel.offsetWidth;

  let currentSlide = 1;

  buttonLeft.style.display = 'none';

  

  buttonRight.addEventListener('click', () => {
    carousel.style.transform = `translateX(-${carouselOffsetWidth * currentSlide}px)`;
    currentSlide++;
    showButton ();
  });

  buttonLeft.addEventListener('click', () => {
    carousel.style.transform = `translateX(-${carouselOffsetWidth * (currentSlide - 2)}px)`;
    currentSlide--;
    showButton ();
  });

  function showButton () {
    if (currentSlide === 4) {
      buttonRight.style.display = 'none';
    } else if (currentSlide === 1) {
      buttonLeft.style.display = 'none';
    } else {
      buttonRight.style.display = '';
      buttonLeft.style.display = '';
    }

    
  }
}
