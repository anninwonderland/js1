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
    phone.focus();
} else {
    login.focus();
}

// login = login.replace(/[^a-zA-Z0-9_]/g, "", '');
// phone = phone.replace(/[^0-9]/g, "", '');

form.addEventListener("submit", function (event) {

    hideErrors();

    if (!login.value) {
        event.preventDefault();
        showError(login, loginError);

        console.log('empty login');

    } else if (!phone.value) {
        event.preventDefault();
        showError(phone, phoneError);

        console.log('empty phone');

    } else if (!password.value) {
        event.preventDefault();
        showError(password,passwordError);

        console.log('empty password');

    } else {
        localStorage.setItem("login", login.value);

        console.log('succed');
        alert("Succed!");
    }
});

function hideErrors() {
    loginError.classList.add("hidden");
    login.classList.remove("is-danger");
    loginError.classList.remove("is-danger");

    phoneError.classList.add("hidden");
    phoneError.classList.remove("is-danger");
    phone.classList.remove("is-danger");

    passwordError.classList.add("hidden");
    passwordError.classList.remove("is-danger");
    password.classList.remove("is-danger");
}

function showError(field, error) {
    field.classList.add("is-danger");
    error.classList.add("is-danger");
    error.classList.remove("hidden");
}