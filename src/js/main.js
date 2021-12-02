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
    let lienMenu = document.querySelectorAll("li");

    menu.addEventListener("click", function() {
        header.classList.toggle("toggle");
    });

    lienMenu.forEach(element => {
        element.addEventListener("click", function() {
            header.classList.toggle("toggle");
        })
    });


    //Portfolio image 
    hoverEffect("box1", "title1", "description1", "img1");
    hoverEffect("box2", "title2", "description2", "img2");
    hoverEffect("box3", "title3", "description3", "img3");
    hoverEffect("box4", "title4", "description4", "img4");





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


    //on est pas des bg nous

    const music = new Audio("src/others/sound.mp3")
    const kya = ['k', 'y', 'a'];
    var textType = []
    let verif = true

    document.addEventListener("keydown", function(event) {
        //console.log(textType)
        if (event.key != 'k' && event.key != 'y' && event.key != 'a') {
            textType = []
            verif = false
        }

        if (event.key == 'k') {
            textType[0] = 'k'
        }

        if (event.key == 'y' && textType[0] == 'k') {
            textType[1] = 'y'
        }

        if (event.key == 'a' && textType[1] == 'y') {
            textType[2] = 'a'
            if (verif && textType.length == 3) {
                let pp = document.getElementById("profilpicture")
                pp.src = "src/img/Sylchien.jpg"

                music.play();
                music.loop = true;
                music.volume = 0.1
            }
        }
    })

    //Animations

    const scrollElements = document.querySelectorAll(".js-scroll");

    handleScrollAnimation = () => {
        scrollElements.forEach((element) => {
            if (elementInView(element, 1.25)) {
                displayScrollElement(element);
            }
        })
    }

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

});


//FONCTIONS

//HOVER
function hoverEffect(element1, element2, element3, element4) {
    let box = document.getElementById(element1);
    let title = document.getElementById(element2);
    let description = document.getElementById(element3);
    let img = document.getElementById(element4)

    box.addEventListener("mouseenter", function(event) {
        title.style.display = "block"
        description.style.display = "block"

        img.style.transform = "scale(1.1)"
        img.style.filter = "blur(2px)"
        img.style.filter = "grayscale(100%)"
    });

    box.addEventListener("mouseleave", function(event) {
        title.style.display = "none"
        description.style.display = "none"

        img.style.transform = "scale(1)"
        img.style.filter = "blur(0px)"
        img.style.filter = "grayscale(0%)"
    });
}

//ANIMATION
elementInView = (element, dividend = 1) => {
    const elementTop = element.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

displayScrollElement = (element) => {
    element.classList.add("scrolled");
};