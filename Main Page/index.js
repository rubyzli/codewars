const buttonWordCalc = document.querySelector(".word-calc");
buttonWordCalc.addEventListener("click", function () {
  window.location.href = "../Kata-word-calc/kata-word-calc.html";
});
const buttonBMI = document.querySelector(".bmi");
buttonBMI.addEventListener("click", function () {
  window.location.href = "../Kata-bmi/kata-bmi.html";
});
const buttonRemove = document.querySelector(".remove");
buttonRemove.addEventListener("click", function () {
  window.location.href = "../Kata-remove-letters/kata-remove-letters.html";
});

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
