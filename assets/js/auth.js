let login = document.querySelector("[name=login]");
let password = document.querySelector("[name=password]");
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    if (!login.value) {
        event.preventDefault();
        console.log('show error login');
    } else if (!password.value) {
        event.preventDefault();
        console.log('show error password');

    } else {
        localStorage.setItem("login", login.value);
        console.log('succed');
    }
});
