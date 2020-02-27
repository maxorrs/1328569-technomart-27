var popupFeedback = document.querySelector(".popup-feedback");
var closePopup = document.querySelector(".close-popup");
var linkFeedback = document.querySelector(".button-map");
var buy = document.querySelector(".buy");
var popupAddBasket = document.querySelector(".add-basket");
var linkMap = document.querySelector(".contact-map");
var popupMap = document.querySelector(".popup-map");

var servicesDeliveryLink = document.querySelector(".item-delivery");
var servicesGuranteeLink = document.querySelector(".item-gurantee");
var servicesCreditLink = document.querySelector(".item-credit");
var servicesDelivery = document.querySelector(".services-delivery");
var servicesGurantee = document.querySelector(".services-gurantee");
var servicesCredit = document.querySelector(".services-credit");

var sliderLeft = document.querySelector(".slider-left");
var sliderRight = document.querySelector(".slider-right");
var dotsFirst = document.querySelector(".dots-first");
var dotsSecond = document.querySelector(".dots-second");
var sliderFirst = document.querySelector(".slider-first");
var sliderSecond = document.querySelector(".slider-second");
var services = document.querySelector(".services-info");



linkFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("popup-show");
});

closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("popup-show");
});

linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("popup-show");
});



servicesDeliveryLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesDeliveryLink.classList.add("current");
    servicesGuranteeLink.classList.remove("current");
    servicesCreditLink.classList.remove("current");
    servicesDelivery.classList.add("services-show");
    servicesGurantee.classList.remove("services-show");
    servicesCredit.classList.remove("services-show");
});

servicesGuranteeLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesDeliveryLink.classList.remove("current");
    servicesGuranteeLink.classList.add("current");
    servicesCreditLink.classList.remove("current");
    servicesDelivery.classList.remove("services-show");
    servicesGurantee.classList.add("services-show");
    servicesCredit.classList.remove("services-show");
});

servicesCreditLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesDeliveryLink.classList.remove("current");
    servicesGuranteeLink.classList.remove("current");
    servicesCreditLink.classList.add("current");
    servicesDelivery.classList.remove("services-show");
    servicesGurantee.classList.remove("services-show");
    servicesCredit.classList.add("services-show");
});

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
