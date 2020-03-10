var sliderLeft = document.querySelector(".slider-left");
var sliderRight = document.querySelector(".slider-right");
var dotsFirst = document.querySelector(".dots-first");
var dotsSecond = document.querySelector(".dots-second");
var sliderFirst = document.querySelector(".slider-first");
var sliderSecond = document.querySelector(".slider-second");

sliderLeft.addEventListener("click", function (evt) {
    evt.preventDefault();
    
    sliderFirst.classList.add("slider-show");
    sliderSecond.classList.remove("slider-show");

    dotsFirst.classList.add("dots-current");
    dotsSecond.classList.remove("dots-current");
});

sliderRight.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderFirst.classList.remove("slider-show");
    sliderSecond.classList.add("slider-show");

    dotsFirst.classList.remove("dots-current");
    dotsSecond.classList.add("dots-current");
});

dotsFirst.addEventListener("click", function (evt) {
    evt.preventDefault();
    
    sliderFirst.classList.add("slider-show");
    sliderSecond.classList.remove("slider-show");

    dotsFirst.classList.add("dots-current");
    dotsSecond.classList.remove("dots-current");
});

dotsSecond.addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderFirst.classList.remove("slider-show");
    sliderSecond.classList.add("slider-show");

    dotsFirst.classList.remove("dots-current");
    dotsSecond.classList.add("dots-current");
});