document.addEventListener("DOMContentLoaded", function() {
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

    menu.addEventListener("click", function() {
        header.classList.toggle("toggle");
    });


    //Portfolio image 
    hoverEffect("box1", "title1", "description1");
    hoverEffect("box2", "title2", "description2");
    hoverEffect("box3", "title3", "description3");
    hoverEffect("box4", "title4", "description4");
});

function hoverEffect(element1, element2, element3) {
    let box = document.getElementById(element1);
    let title = document.getElementById(element2);
    let description = document.getElementById(element3);

    box.addEventListener("mouseenter", function(event) {
        title.style.display = "block"
        description.style.display = "block"
    });

    box.addEventListener("mouseleave", function(event) {
        title.style.display = "none"
        description.style.display = "none"
    });
}