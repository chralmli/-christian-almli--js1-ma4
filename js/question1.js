const firstName = document.querySelector("#firstName");

firstName.addEventListener("keyup", logLength);

function logLength(event) {
    const inputValue = event.target.value;
    const valueLength = inputValue.length;
    console.log(valueLength);
}

function validateForm(event) {
event.preventDefault();
console.log("The form was submitted");
}

function checkInputLength(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 2) {
        return true;
    } else {
        return false;
    }
}

const firstNameError = document.querySelector("firstNameError");

if (checkInputLength(firstNameValue) === true) {
    firstNameError.style.display = "none";
} else {
    firstNameError.style.display = "block";
}

logLength();

validateForm();

checkInputLength();