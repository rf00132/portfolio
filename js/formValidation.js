"use strict";

var fnameInput = document.getElementById("fname-input");
var lnameInput = document.getElementById("lname-input");
var emailInput = document.getElementById("email-input");
var subjectInput = document.getElementById("subject-input");
var messageInput = document.getElementById("message-input");
var submitButton = document.getElementById("submit-btn");
var errorMessageContainer = document.getElementById("form-error-message");
var emailRegex = /^\S+@\S+\.\S+$/;
var validFname;
var validLname;
var validEmail;
var validSubject;
var validMessage;

function ValidateForm(event) {
  validFname = fnameInput.value.length > 0 && fnameInput.value != " ";
  validLname = lnameInput.value.length > 0 && lnameInput.value != " ";
  validEmail = emailRegex.test(emailInput.value);
  validMessage = messageInput.value.length > 0;

  if (validFname && validLname && validEmail && validMessage) {
    SetInputsValid();
  } else {
    event.preventDefault();
    SetInputsValid();
    SetInputsInvalid();
  }
}

function SetInputsInvalid() {
  if (!validFname) {
    fnameInput.style.borderColor = borderErrorColor;
    errorMessageContainer.innerText += "Please enter your first name\n";
  }

  if (!validLname) {
    lnameInput.style.borderColor = borderErrorColor;
    errorMessageContainer.innerText += "Please enter your last name\n";
  }

  if (!validEmail) {
    emailInput.style.borderColor = borderErrorColor;
    errorMessageContainer.innerText += "Please enter a valid email address\n";
  }

  if (!validMessage) {
    messageInput.style.borderColor = borderErrorColor;
    errorMessageContainer.innerText += "Please enter a message\n";
  }
}

function SetInputsValid() {
  fnameInput.style.borderColor = ogBorderColour;
  lnameInput.style.borderColor = ogBorderColour;
  emailInput.style.borderColor = ogBorderColour;
  messageInput.style.borderColor = ogBorderColour;
  errorMessageContainer.innerText = "";
}

submitButton.addEventListener("click", ValidateForm);