let login = document.querySelector("[name=login]");
let phone = document.querySelector("[name=phone]");
let password = document.querySelector("[name=password]");

let loginError = document.querySelector("#login-error");
let phoneError = document.querySelector("#phone-error");
let passwordError = document.querySelector("#password-error");

let form = document.querySelector("form");
let storage = localStorage.getItem("login");

class Field {
    constructor(input, error, type) {
        this.input = input;
        this.caption = error;
        this.type = type;
    }

    showError(withMessage) {
        this.caption.innerHTML = withMessage;
        this.input.classList.add("is-danger");
        this.caption.classList.add("is-danger");
        this.caption.classList.remove("hidden");
    }

    hideError() {
        this.input.classList.remove("is-danger");
        this.caption.classList.remove("is-danger");
        this.caption.classList.add("hidden");
    }

    isEmpty() {
        if (!this.input.value) {
            this.showError("Заполните поле");
            return true
        } else {
            return false
        }
    }

    isFormatted() {
        let rawLength = this.input.value.length;
        let formattedLength = (this.type === "tel") ?
            this.input.value.replace(/[^0-9]/g, "").length :
            this.input.value.replace(/[^a-zA-Z0-9_]/g, "").length;

        if (formattedLength !== rawLength) {
            this.showError("Неверный формат");
            return false
        }

        if (this.type === "tel" && formattedLength !== 11) {
            this.showError("Номер состоит из 11 цифр");
            return false
        }

        if (this.type !== "tel" && (formattedLength < 6)) {
            this.showError("Введите более 6 символов");
            return false
        }

        return true

    }

    isValidated() {
        return !this.isEmpty() && this.isFormatted()
    }

}

let loginField = new Field(login, loginError, "text");
let phoneField = new Field(phone, phoneError, "tel");
let passwordField = new Field(password, passwordError, "password");

let fields = [loginField, phoneField, passwordField];

if (storage) {
    login.value = storage;
    phone.focus();
} else {
    login.focus();
}

form.addEventListener("submit", function (event) {
    let validated = 1;

    for (let field of fields) {
        field.hideError();

        if (field.isEmpty() || !field.isFormatted()) {
            event.preventDefault();
        }

        //turning on live validation
        field.input.addEventListener("keyup", function (ent) {

            if (!field.isEmpty() && field.isFormatted()) {
                field.hideError();
            }
        });

        if (field.isValidated()) {
            validated *= 1
        } else {
            validated *= 0
        }
    }

    //check if all the fields filled correctly
    if (validated) {
        alert("Succeed!");
        localStorage.setItem("login", login.value);
    }
});
