const left = document.querySelector(".left-arrow-img");
const right = document.querySelector(".right-arrow-img");
const slider = document.querySelector(".img-slider");
const images = document.querySelectorAll(".Image");

//One Method of writing code
//let slideNumber = 1;
// right.addEventListener("click", () => {
//   if (slideNumber < images.length) {
//     slider.style.transform = `translateX(-${slideNumber * 100}%)`;
//     slideNumber++;
//   } else {
//     slider.style.transform = `translateX(0px)`;
//     slideNumber = 1;
//   }
// });

//Another Way

let slideNumber = 1;
const imageLength = images.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 100}%)`;
  slideNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber-2) * 100}%)`;
  slideNumber--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(imageLength-1)*100}%)`;
  slideNumber = imageLength;
};

right.addEventListener("click", () => {
  slideNumber < imageLength ? nextSlide() : getFirstSlide();
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
});
