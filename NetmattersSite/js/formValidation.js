const nameInput = document.getElementById("fname-input");
const emailInput = document.getElementById("email-input");
const checkbox = document.getElementById("marketing-checkbox");
const submitButton = document.getElementById("submit-btn");

const errorMessageContainer = document.getElementById("form-error-message-container");

const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailRegex = /^\S+@\S+\.\S+$/;

const ogBorderColour = nameInput.style.borderColor;
console.log(ogBorderColour);
const borderErrorColor = "red";
const errorMessage = "Please fix required fields."

let validName;
let validEmail;
let enabledMarketing;

function ValidateForm(event){
    validName = nameRegex.test(nameInput.value);
    validEmail = emailRegex.test(emailInput.value);
    enabledMarketing = checkbox.value;

    if(validName && validEmail && enabledMarketing){
        SetInputsValid();
    }
    else{
        event.preventDefault();

        SetInputsValid();
        SetInputsInvalid();
    }
}



function SetInputsInvalid(){
    if(!validName){
        // add error message to error message container inner html
        CreateError("The name field is required.");
    }
    if(!validEmail){
        // add error message to error message container inner html
        CreateError("The email field is required.");
    }
    if(!enabledMarketing){
        // add error message to error message container inner html
        CreateError("The marketing preference field is required.");
    }
}

function CreateError(message){
    errorMessageContainer.innerHTML += '<div class="error-message"><p>';
    errorMessageContainer.innerHTML += message;
    errorMessageContainer.innerHTML += '<span class="close-error-btn"><!-- Add cross button to close error --></span></div>';
}

function SetInputsValid(){
    errorMessageContainer.innerHTML = "";
}

submitButton.addEventListener("click", ValidateForm);