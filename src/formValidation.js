const fnameInput = document.getElementById("fname-input");
const lnameInput = document.getElementById("lname-input");
const emailInput = document.getElementById("email-input");
const subjectInput = document.getElementById("subject-input");
const messageInput = document.getElementById("message-input");
const submitButton = document.getElementById("submit-btn");
const errorMessageContainer = document.getElementById("form-error-message");
const emailRegex = /^\S+@\S+\.\S+$/;

let validFname;
let validLname;
let validEmail;
let validSubject;
let validMessage;

function ValidateForm(event){
    validFname = fnameInput.value.length > 0 && fnameInput.value != " ";
    validLname = lnameInput.value.length > 0  && lnameInput.value != " ";
    validEmail = emailRegex.test(emailInput.value);
    validMessage = messageInput.value.length > 0;

    if(validFname && validLname && validEmail && validMessage){
        SetInputsValid();

    }
    else{
        event.preventDefault();

        SetInputsValid();
        SetInputsInvalid();
    }
}



function SetInputsInvalid(){
    if(!validFname){
        fnameInput.style.borderColor = borderErrorColor;
        errorMessageContainer.innerText += "Please enter your first name\n";
    }
    if(!validLname){
        lnameInput.style.borderColor = borderErrorColor;
        errorMessageContainer.innerText += "Please enter your last name\n";
    }
    if(!validEmail){
        emailInput.style.borderColor = borderErrorColor;
        errorMessageContainer.innerText += "Please enter a valid email address\n";
    }
    if(!validMessage){
        messageInput.style.borderColor = borderErrorColor;
        errorMessageContainer.innerText += "Please enter a message\n";
    }

}

function SetInputsValid(){
    fnameInput.style.borderColor = ogBorderColour;
    lnameInput.style.borderColor = ogBorderColour;
    emailInput.style.borderColor = ogBorderColour;
    messageInput.style.borderColor = ogBorderColour;
    errorMessageContainer.innerText = "";
}

submitButton.addEventListener("click", ValidateForm);