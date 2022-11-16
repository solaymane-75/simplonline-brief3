var imageSlides = document.getElementsByClassName('imageSlides');
var circles = document.getElementsByClassName('circle');
var counter = 0

function hideImages() {
    for (var i = 0; i < imageSlides.length; i++) {
        imageSlides[i].classList.remove('visible');
    }
}  

function removeDots() {
    for (var i = 0; i < imageSlides.length; i++) {
        circles[i].classList.remove('dot');
    }
}

function imageLoop() {
    var currentImage = imageSlides[counter];
    var currentDot = circles[counter];
    currentImage.classList.add('visible');
    removeDots();
    currentDot.classList.add('dot');
    counter++;
}

function slideshow() {
    if (counter < imageSlides.length) {
        imageLoop();
    } else {
        counter = 0;
        hideImages();
        imageLoop();
    }
}

setTimeout(slideshow, 1000);
var imageSlideshowInterval = setInterval(slideshow, 10000);
$(window).scroll(function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        changeOn = 50,
        nav = $('nav'),
        logo = $('#logo');
  
    if (distanceY > changeOn) {
        logo.addClass("logo-scroll");
        nav.addClass("nav-scroll");        
    } else {
        if (logo.hasClass("logo-scroll")) {
            logo.removeClass("logo-scroll");
            nav.removeClass("nav-scroll");
        }
    }
});



