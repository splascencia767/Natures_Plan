/*
Capstone Project Form Verification

    Date:8.17.18
    Name: Stevan Guadalupe Plascencia-Gutierrez
    
    form.js
*/
"use strict"

var formValidity = false;

//Function to Validate User Name
function validateName(){
    var nameBoxes = document.querySelectorAll("#clientName"+" input");
    var errorDiv = document.getElementById("nameError");
    try{
        for(var i = 0; i < nameBoxes.length;i++){
            var currentElement = nameBoxes[i];
            if(currentElement.value === ""){
                throw "Please put in your name."
            }else{
                formValidity = true;
            }
        }
    }
    catch(msg){
        formValidity = false;
        errorDiv.innerHTML = msg 
        errorDiv.style.display = "block";
    }
}

//Function to Validate Credit Card Info
function validateCreditInfo(){
    var cardInfo = document.querySelectorAll("#cards"+" input");
    var selectBoxes = document.querySelectorAll("#cards"+" select")
    var errorDiv = document.getElementById("cardError");
    try{
        for(var i = 0; i < cardInfo.length;i++){
            var currentElement = cardInfo[i];
            if((currentElement.value === "")||(currentElement.value )){
                throw "Please put in your car information."
            }else{
                formValidity = true;
            }
        }
    }
    catch(msg){
        formValidity = false;
        errorDiv.innerHTML = msg 
        errorDiv.style.display = "block";
    }
}
//Function to Validate Form
function validateForm(evt){
    if(evt.preventDefault){
        evt.preventDefault();
    }else{
        evt.returnValue = false;
    }
    
    validateCreditInfo();
    validateName();
    
    if(formValidity === true) {
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName(form)[1].submit();
    }else{
        document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit your order.";
        document.getElementById("errorText").style.display = "block";
        scroll(0,0);
    }
}

// function to create our event listeners
function createEventListeners () {
    var form = document.getElementsByTagName("form")[1];
    if (form.addEventListener) {
    form.addEventListener("submit", validateForm, false)
    }   else if(form.attachEvent) {
    form.attachEvent("onsubmit", validateForm)
    }
}

function setUpPage(){
    createEventListeners();
}

//Enable Load Event Handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false)
}else if(window.attachEvent) {
    window.attachEvent("onload", setUpPage)
}