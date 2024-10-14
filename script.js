let bcurrentIndex = 0;
const mainContainer = document.querySelector('.main-container');

function changeBackgroundImage() {
    bcurrentIndex = (bcurrentIndex +1) % 9;  
    mainContainer.style.backgroundImage = `url(../banner/banner${bcurrentIndex}.jpg)`;
   
}

setInterval(changeBackgroundImage, 3000);



let currentIndex = 0;
const imagesPerSlide = 8; // Number of images displayed per slide

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length / imagesPerSlide; // Total slide groups (e.g., 24 images / 6 images per slide = 4 slide groups)

    currentIndex += direction;

    // Wrap around logic
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Wrap to the last slide
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Wrap to the first slide
    }

    // Move the slides by the width of one slide group (6 images)
    slides.style.transform = `translateX(-${currentIndex * 20}%)`;
}

let currentGadIndex = 0; // Current slide index for gadgets
const gadgetsImagesPerSlide = 8; // Number of images displayed per slide

function moveGadSlide(direction) {
    const gadSlides = document.querySelector('.gad-slides');
    const totalGadSlides = gadSlides.children.length / gadgetsImagesPerSlide; // Total slide groups (e.g., 24 images / 6 images per slide)

    currentGadIndex += direction;

    // Wrap around logic
    if (currentGadIndex < 0) {
        currentGadIndex = totalGadSlides - 1; // Wrap to the last slide
    } else if (currentGadIndex >= totalGadSlides) {
        currentGadIndex = 0; // Wrap to the first slide
    }

    // Move the slides by the width of one slide group (6 images)
    gadSlides.style.transform = `translateX(-${currentGadIndex * 35}%)`;
}

let currentBlockexchangeGadIndex = 0; // Current slide index for gadgets
const blockexchangeGadgetsImagesPerSlide = 8; // Number of images displayed per slide

function moveBlockexchangeGadSlide(direction) {
    const blockexchangeGadSlides = document.querySelector('.blockexchange-gad-slides');
    const totalBlockexchangeGadSlides = blockexchangeGadSlides.children.length / blockexchangeGadgetsImagesPerSlide; // Total slide groups

    currentBlockexchangeGadIndex += direction;

    // Wrap around logic
    if (currentBlockexchangeGadIndex < 0) {
        currentBlockexchangeGadIndex = totalBlockexchangeGadSlides - 1; // Wrap to the last slide
    } else if (currentBlockexchangeGadIndex >= totalBlockexchangeGadSlides) {
        currentBlockexchangeGadIndex = 0; // Wrap to the first slide
    }

    // Move the slides by the width of one slide group
    blockexchangeGadSlides.style.transform = `translateX(-${currentBlockexchangeGadIndex * 35}%)`;
}

let currentClothsIndex = 0; // Current slide index for cloths
const clothsImagesPerSlide = 8; // Number of images displayed per slide

function moveClothsSlide(direction) {
    const clothsSlides = document.querySelector('.cloths-slides');
    const totalClothsSlides = clothsSlides.children.length / clothsImagesPerSlide; // Total slide groups

    currentClothsIndex += direction;

    // Wrap around logic
    if (currentClothsIndex < 0) {
        currentClothsIndex = totalClothsSlides - 1; // Wrap to the last slide
    } else if (currentClothsIndex >= totalClothsSlides) {
        currentClothsIndex = 0; // Wrap to the first slide
    }

    // Move the slides by the width of one slide group
    clothsSlides.style.transform = `translateX(-${currentClothsIndex * 68}%)`;
}
