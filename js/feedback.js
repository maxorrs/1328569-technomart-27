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

 
