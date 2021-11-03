$(document).ready(function () {
  //Button to top smooth
  const btn = document.querySelector(".top");
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  //Hide class top
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  //Responsive menu
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  // // Skills Bars
  // $(".skill-percent").each(function () {
  //   $(this).animate(
  //     {
  //       width: $(this).attr("data-percent"),
  //     },
  //     "fast"
  //   );
  // });

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
});
