const slides = document.querySelectorAll(".item");
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");

// add event listener and lower & upper bound
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// keep track of default positioning
let counter = 0;
let nextBtnLimit = 5;
let carouselLimit = 3;
let slideSize = 20;

//=========================================================

// functions
function nextSlide() {
  if (counter < slides.length - nextBtnLimit) {
    counter++;
    carousel();
  }
}

function prevSlide() {
  if (counter > 0) {
    counter--;
    carousel();
  }
}

function carousel() {
  // move slides when button is pressed
  if (counter < slides.length - carouselLimit) {
    slider.style.transform = `translateX(-${counter * slideSize}%)`;
  }
}

//=========================================================
// create media query conditions that target viewport's size with adjusted slide size respectivly

const smallDevice = window.matchMedia("(max-width: 800px)");
const tabletVertical = window.matchMedia("(max-width: 1000px)");
const tabletHorizontal = window.matchMedia("(max-width: 1200px)");

// listen for changes if media query is true
function handleWindowChange() {
  if (smallDevice.matches) {
    nextBtnLimit = 1;
    carouselLimit = 0;
    slideSize = 100;
  } else if (tabletVertical.matches) {
    nextBtnLimit = 3;
    carouselLimit = 1;
    slideSize = 33.33;
  } else if (tabletHorizontal.matches) {
    nextBtnLimit = 4;
    carouselLimit = 2;
    slideSize = 25;
  } else {
    nextBtnLimit = 5;
    carouselLimit = 3;
    slideSize = 20;
  }
}

// register event listener
tabletHorizontal.addEventListener("change", handleWindowChange);
tabletVertical.addEventListener("change", handleWindowChange);
smallDevice.addEventListener("change", handleWindowChange);

// initial check
handleWindowChange();
