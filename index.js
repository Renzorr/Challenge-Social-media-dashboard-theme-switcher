const body = document.querySelector(".body");
const backgroundRec = document.querySelector(".bg-rec");
const title = document.querySelectorAll(".l-mode");
const subTitle = document.querySelectorAll(".l-mode-top");
const socialCard = document.querySelectorAll(".data-card");
const overviewCard = document.querySelectorAll(".ovw-card");
const input = document.querySelector(".input-slider");
const modeText = document.querySelector(".mode");

input.addEventListener("click", () => {
  input.classList.toggle("dark-slider");

  body.classList.toggle("dark-body");

  backgroundRec.classList.toggle("dark-bg");

  title.forEach((element) => {
    element.classList.toggle("n-mode");
  });

  subTitle.forEach((element) => {
    element.classList.toggle("n-mode-top");
  });

  socialCard.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  overviewCard.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  if (input.classList.contains("dark-slider")) {
    modeText.innerHTML = "Dark mode";
  } else {
    modeText.innerHTML = "Light mode";
  }
});
