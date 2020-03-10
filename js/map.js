var linkMap = document.querySelector(".contact-map");
var popupMap = document.querySelector(".popup-map");
var closePopupMap = popupMap.querySelector(".close-popup");

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