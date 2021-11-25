document.addEventListener("DOMContentLoaded", function() {

    //Loader
    document.querySelector('.loader-wrapper').style.display = 'block'
    document.querySelector('.container').style.display = 'none'

    window.addEventListener("load", function() {
        document.querySelector('.loader-wrapper').classList.add('fade-out');
        document.querySelector('.container').style.display = 'block'
    })



    //Button to top smooth
    const btnToTop = document.querySelector(".top");
    btnToTop.addEventListener("click", () => {
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



    //Scrool par page
    // var numDiv = 0; //numéro de la div
    //let sections = document.querySelectorAll('section')
    // var sections = [document.getElementById("homes"), document.getElementById("abouts"),
    //     document.getElementById("skillss"), document.getElementById("educations"),
    //     document.getElementById("portfolios"), document.getElementById("contacts")
    // ];

    //console.log(sections.length)

    // var dy = [];
    // dy[0] = 0;

    // for (var i = 2; i <= sections.length; i++)
    //     dy[i] = sections[i - 1].offsetTop - sections[0].offsetTop;

    // window.addEventListener("wheel", mouseWheelHandler);

    // function mouseWheelHandler(e) {
    //     //e.preventDefault();
    //     var delta = e.deltaY;
    //     var doc = document.body; // Safari, Edge
    //     var html = document.documentElement; // Chrome, Firefox, IE and Opera
    //     if (delta > 0) numDiv++;
    //     else numDiv--;
    //     if (numDiv < 1) numDiv = 1;
    //     if (numDiv > sections.length) numDiv = sections.length;

    //     for (var j = 1; j <= sections.length; j++)
    //         if (numDiv == j) html.scrollTop = doc.scrollTop = dy[j];
    // }

});


//FONCTIONS
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