let login = document.querySelector("[name=login]");
let phone = document.querySelector("[name=phone]");
let password = document.querySelector("[name=password]");
let form = document.querySelector("form");

let loginError = document.querySelector("#login-error");
let phoneError = document.querySelector("#phone-error");
let passwordError = document.querySelector("#password-error");
let storage = localStorage.getItem("login");

if (storage) {
    login.value = storage;
    password.focus();
} else {
    login.focus();
}

form.addEventListener("submit", function (event) {
    if (!login.value) {
        event.preventDefault();
        console.log('empty login');

        loginError.classList.remove("hidden");
        login.classList.add("is-danger");
        loginError.classList.add("is-danger");
    } else if (!phone.value) {
        event.preventDefault();
        console.log('empty phone');

        loginError.classList.add("hidden");
        login.classList.remove("is-danger");
        loginError.classList.remove("is-danger");

        phoneError.classList.remove("hidden");
        phoneError.classList.add("is-danger");
        phone.classList.add("is-danger");
    } else if (!password.value) {
        event.preventDefault();
        console.log('empty password');

        phoneError.classList.add("hidden");
        phoneError.classList.remove("is-danger");
        phone.classList.remove("is-danger");

        passwordError.classList.remove("hidden");
        password.classList.add("is-danger");
        passwordError.classList.add("is-danger");
    } else {
        localStorage.setItem("login", login.value);
        console.log('succed');
    }
});
