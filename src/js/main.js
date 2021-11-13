document.addEventListener("DOMContentLoaded", function () {
  //Button to top smooth
  const btn = document.querySelector(".top");
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  //Skills
  skillBoxs = document.querySelectorAll(".skillBox");
  skillBars = document.querySelectorAll(".skillBar");

  skillBars.forEach((skillBar) => {
    let percentage = skillBar.dataset.percentage;
    skillBar.style.background =
      "linear-gradient(90deg, rgb(245 223 77) 0%, rgb(245 223 77) " +
      percentage +
      "%, rgb(35 38 38) " +
      percentage +
      "%, rgb(35 38 38) 100%)";
  });


  //Responsive menu
  let menu = document.querySelector("#menu");
  let header = document.querySelector("header");

  menu.addEventListener("click", function () {
    header.classList.toggle("toggle");
  });


});
