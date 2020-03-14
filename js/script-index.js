var sliderLeft = document.querySelector(".slider-left");
var sliderRight = document.querySelector(".slider-right");
var dotsFirst = document.querySelector(".dots-first");
var dotsSecond = document.querySelector(".dots-second");
var sliderFirst = document.querySelector(".slider-first");
var sliderSecond = document.querySelector(".slider-second");

var servicesDeliveryLink = document.querySelector(".item-delivery");
var servicesGuranteeLink = document.querySelector(".item-gurantee");
var servicesCreditLink = document.querySelector(".item-credit");
var servicesDelivery = document.querySelector(".services-delivery");
var servicesGurantee = document.querySelector(".services-gurantee");
var servicesCredit = document.querySelector(".services-credit");

var linkMap = document.querySelector(".contact-map");
var popupMap = document.querySelector(".popup-map");
var closePopupMap = popupMap.querySelector(".close-popup");
var popupFeedback = document.querySelector(".popup-feedback");
var closePopupFeedback = popupFeedback.querySelector(".close-popup");
var linkFeedback = document.querySelector(".button-map");
var form = popupFeedback.querySelector("form");
var firstName = popupFeedback.querySelector("[name=first-name]");
var email = popupFeedback.querySelector("[name=email]");
var textEmail = popupFeedback.querySelector("[name=text-email]");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";


// Анимация слайдера

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

// Сервисы

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

//Карта

linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("popup-show");
});

closePopupMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popupMap.classList.contains("popup-show")) {
            evt.preventDefault();
            popupMap.classList.remove("popup-show");
         } 
     }
 });

//Обратная связь

try {
    storageName = localStorage.getItem("firstName");
    storageEmail= localStorage.getItem("email");
    } catch (err) {
    isStorageSupport = false;
};

  linkFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("popup-show");
    if (storageName && storageEmail) {
        firstName.value = storageName;
        email.value = storageEmail;
        textEmail.focus();
    } else if (storageName) {
        firstName.value = storageName;
        email.focus();
    } else {
        firstName.focus();
    }
});

form.addEventListener("submit", function (evt) {
    if (!firstName.value || !email.value || !textEmail.value) {
       evt.preventDefault();
       popupFeedback.classList.remove("popup-error");
       popupFeedback.offsetWidth = popupFeedback.offsetWidth;
       popupFeedback.classList.add("popup-error");
    } else {
       if (isStorageSupport) {
           localStorage.setItem("firstName", firstName.value);
           localStorage.setItem("email", email.value);         
       } 
    }
});

closePopupFeedback.addEventListener("click", function (evt) {
   evt.preventDefault();
   popupFeedback.classList.remove("popup-show"); 
   popupFeedback.classList.remove("popup-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popupFeedback.classList.contains("popup-show")) {
            evt.preventDefault();
            popupFeedback.classList.remove("popup-show");
            popupFeedback.classList.remove("popup-error");
         } 
     }
 });

 
