'use strict';

const btnDismiss = document.querySelector(".btn--dismiss");
const btnSubscribe = document.querySelector(".btn--subscribe")
const inputEmail = document.querySelector(".input-email");
const errMessage = document.querySelector(".error-message")
const newsletterBox = document.querySelector("main")
const popup = document.querySelector(".popup")

btnDismiss.addEventListener('click', function () {
    btnDismiss.parentElement.classList.add("hidden")
    setTimeout
})

btnSubscribe.addEventListener('click', function (e) {
    e.preventDefault();
    if (inputEmail.value === "" || !inputEmail) {
        inputEmail.classList.add("invalid")
        errMessage.classList.remove('hidden')
    }
    else {
        newsletterBox.classList.add('hidden')
        popup.classList.remove('hidden')
    };

})