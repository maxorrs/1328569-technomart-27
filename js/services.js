var servicesDeliveryLink = document.querySelector(".item-delivery");
var servicesGuranteeLink = document.querySelector(".item-gurantee");
var servicesCreditLink = document.querySelector(".item-credit");
var servicesDelivery = document.querySelector(".services-delivery");
var servicesGurantee = document.querySelector(".services-gurantee");
var servicesCredit = document.querySelector(".services-credit");

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