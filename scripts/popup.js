'use strict';

const btnDismiss = document.querySelector(".btn--dismiss");
const btnSubscribe = document.querySelector(".btn--subscribe")
const inputEmail = document.querySelector(".input-email");
const errMessage = document.querySelector(".error-message")
const newsletterBox = document.querySelector("main")
const popup = document.querySelector(".popup")
const userEmailEl = document.querySelector(".user-email")
const attribution = document.querySelector(".attribution")

btnDismiss.addEventListener('click', function () {
    btnDismiss.parentElement.classList.add("hidden")

    setTimeout(() => location.reload(), 1000
    )
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
        userEmailEl.textContent = inputEmail.value;
        attribution.classList.add("hidden")
    };

})