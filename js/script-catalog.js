var buy = document.querySelectorAll(".buy");
var popupBasket = document.querySelector(".popup-basket");
var placeOrder = popupBasket.querySelector(".place-order");
var continuePurchase = popupBasket.querySelector(".continue-purchase");
var closePopupBasket = popupBasket.querySelector(".close-popup");

//Попап добавление в корзину

for (buyElem of buy) {
    buyElem.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupBasket.classList.add("popup-show");
    });
};

closePopupBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("popup-show"); 
 });

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
    if (popupBasket.classList.contains("popup-show")) {
        evt.preventDefault();
        popupBasket.classList.remove("popup-show");
        } 
    }
});

continuePurchase.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("popup-show");
});

