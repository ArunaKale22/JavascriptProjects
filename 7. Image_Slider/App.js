const left = document.querySelector(".left-arrow-img");
const right = document.querySelector(".right-arrow-img");
const slider = document.querySelector(".img-slider");
const images = document.querySelectorAll(".Image");

//One Method of writing code
//let slideNumber = 1;
// right.addEventListener("click", () => {
//   if (slideNumber < images.length) {
//     slider.style.transform = `translateX(-${slideNumber * 520}px)`;
//     slideNumber++;
//   } else {
//     slider.style.transform = `translateX(0px)`;
//     slideNumber = 1;
//   }
// });

//Another Way

let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 520}px)`;
  slideNumber++;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
});
