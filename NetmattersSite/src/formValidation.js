const nameInput = document.getElementById("name-entry-form");
const emailInput = document.getElementById("email-entry-form");
const checkbox = document.getElementById("marketing-checkbox");
const submitButton = document.getElementById("submit-btn");

const errorMessageContainer = document.getElementById("form-error-message-container");

const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailRegex = /^\S+@\S+\.\S+$/;

const ogBorderColour = nameInput.style.borderColor;

let validName;
let validEmail;
let enabledMarketing;
let errorCloseBtns;

let openErrors = [false, false, false];

function ValidateForm(event){
    validName = nameRegex.test(nameInput.value);
    validEmail = emailRegex.test(emailInput.value);
    enabledMarketing = checkbox.checked;
    console.log(checkbox.checked);
    if(validName && validEmail && enabledMarketing){
        errorMessageContainer.innerHTML = "";
    }
    else{
        event.preventDefault();
        SetInputsInvalid();
    }
}

function SetInputsInvalid(){
    errorMessageContainer.innerHTML = "";
    if(!validName){
        CreateError("name-error", "The name field is required.");
    }
    if(!validEmail){
        CreateError("email-error", "The email field is required.");
    }
    if(!enabledMarketing){
        CreateError("checkbox-error", "The marketing preference field is required.");
    }

    MakeEventListeners();
}

function CreateError(id,message){
    let htmlToAdd = '<div id="' + id + '" class="error-message"><p>';
    htmlToAdd += message;
    htmlToAdd += '</p><span class="close-error-btn"><i class="fas fa-times"></i></span></div>'
    errorMessageContainer.innerHTML += htmlToAdd;

    errorCloseBtns = document.getElementsByClassName("close-error-btn");
    
    console.log(errorCloseBtns.length - 1);
    if(id == "name-error"){
        openErrors[0] = true;
    }

    if(id == "email-error"){
        openErrors[1] = true;
    } 

    if(id == "checkbox-error"){
        openErrors[2] = true;
    }
    
}

function MakeEventListeners(){
    for(let i = 0; i < errorCloseBtns.length; i++){
        if(openErrors[0] && i==0){
            errorCloseBtns[i].addEventListener("click", CloseNameError);
            console.log("making name error");
            openErrors[0] = false;

        } 
        else if (openErrors[1] && i<=1){
            errorCloseBtns[i].addEventListener("click", CloseEmailError);
            console.log("making email error");
            openErrors[1] = false;
        }
        else if (openErrors[2]){
            errorCloseBtns[i].addEventListener("click", CloseCheckboxError);
            console.log("making check error");
            openErrors[2] = false;
        }
    }
}

function CloseNameError(){
    if(!validName){
        console.log("poop")
        validName = true;
        SetInputsInvalid();
    }
}

function CloseEmailError(){
    if(!validEmail){
        console.log("woop")
        validEmail = true;
        SetInputsInvalid();
    }
}

function CloseCheckboxError(){
    if(!enabledMarketing){
        console.log("goop")
        enabledMarketing = true;
        SetInputsInvalid();
    }
}

submitButton.addEventListener("click", ValidateForm);