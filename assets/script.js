
//toggle
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
});

//************** */


const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlideIndex = 0;

function goToSlide(index) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  currentSlideIndex = index;
}

prevButton.addEventListener('click', () => {
  if (currentSlideIndex > 0) {
    goToSlide(currentSlideIndex - 1);
  } else {
    // Revenir à la dernière diapositive si vous êtes sur la première
    goToSlide(slides.length - 1);
  }
});

nextButton.addEventListener('click', () => {
  if (currentSlideIndex < slides.length - 1) {
    goToSlide(currentSlideIndex + 1);
  } else {
    // Revenir à la première diapositive si vous êtes sur la dernière
    goToSlide(0);
  }
});

// Démarrez avec la première diapositive affichée
goToSlide(0);


//Short
const sliderShort = document.querySelector('.sliderShort');
const prevBtnShort = document.querySelector('.prevBtnShort');
const nextBtnShort = document.querySelector('.nextBtnShort');
let currentIndex = 0;

nextBtnShort.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderShort.children.length;
    updateSlider();
});

prevBtnShort.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderShort.children.length) % sliderShort.children.length;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * 340; // 500px + 50px de gap
    sliderShort.style.transform = `translateX(${offset}px)`;
}


