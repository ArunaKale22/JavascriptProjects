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

// Start for dots

const bottom = document.querySelector(".bottom");

for (let i = 0; i < imageLength; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
    button.addEventListener("mouseover", stopSlideShow);
    button.addEventListener("mouseout", startSlideShow);
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 100}%)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "white";
  });
});

const changeColorOfTheBottomButtons = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
};

// End of dots

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 100}%)`;
  slideNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 100}%)`;
  slideNumber--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(imageLength - 1) * 100}%)`;
  slideNumber = imageLength;
};

right.addEventListener("click", () => {
  slideNumber < imageLength ? nextSlide() : getFirstSlide();
  changeColorOfTheBottomButtons();
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColorOfTheBottomButtons();
});

//Start Auto Slider

let slideInterval;

const startSlideShow = () => {
  slideInterval = setInterval(() => {
    slideNumber < imageLength ? nextSlide() : getFirstSlide();
    changeColorOfTheBottomButtons();
  }, 3000);
};

const stopSlideShow = () => {
  clearInterval(slideInterval);
};

startSlideShow();

slider.addEventListener("mouseover", stopSlideShow);
slider.addEventListener("mouseout", startSlideShow);
right.addEventListener("mouseover", stopSlideShow);
right.addEventListener("mouseout", startSlideShow);
left.addEventListener("mouseover", stopSlideShow);
left.addEventListener("mouseout", startSlideShow);
