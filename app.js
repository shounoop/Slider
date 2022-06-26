const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const numOfSlides = slides.length;
let currentSlide = 0;

// click the next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  currentSlide++;
  if (currentSlide > numOfSlides - 1) currentSlide = 0;
  slides[currentSlide].classList.add("active");
  slideIcons[currentSlide].classList.add("active");
});

// click the previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  currentSlide--;
  if (currentSlide < 0) currentSlide = numOfSlides - 1;
  slides[currentSlide].classList.add("active");
  slideIcons[currentSlide].classList.add("active");
});

// image slider autoplay
const autoNextSlide = () => {
  nextSlideInterval = setInterval(() => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    currentSlide++;
    if (currentSlide > numOfSlides - 1) currentSlide = 0;
    slides[currentSlide].classList.add("active");
    slideIcons[currentSlide].classList.add("active");
  }, 3000);
};
autoNextSlide();

// click on any slide icon
slideIcons.forEach((slideIcon, index) => {
  slideIcon.addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    slideIcons[currentSlide].classList.remove("active");

    currentSlide = index;
    slides[currentSlide].classList.add("active");
    slideIcons[currentSlide].classList.add("active");
  });
});

// stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(nextSlideInterval);
});

// start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  autoNextSlide();
});
