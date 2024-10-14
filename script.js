let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  currentIndex += direction;

  // Wrap around logic
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Move the slide
  slides.style.transform = `translateX(-${currentIndex * 50}%)`;
}
let bcurrentIndex = 0;

function bmoveSlide(direction) {
  const slides = document.querySelector('.bslides');
  const totalSlides = slides.children.length;

  bcurrentIndex += direction;

  // Wrap around logic
  if (bcurrentIndex < 0) {
    bcurrentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    bcurrentIndex = 0;
  }

  // Move the slide
  slides.style.transform = `translateX(-${bcurrentIndex * 50}%)`;
}

