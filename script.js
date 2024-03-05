const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
let currentIndex = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider-2');
  const slides = document.querySelectorAll('.slide');

  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + '%';
  slider.style.transform = `translateX(${translateValue})`;
}

function changeSlide(direction) {
  currentIndex += direction;
  showSlide(currentIndex);
}

// Auto-slide functionality (optional)
setInterval(() => {
  changeSlide(1);
}, 3000); // Change slide every 3 seconds
