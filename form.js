
window.addEventListener("load", function(){ 
    //Retrieve the field/value pairs from the URL 
    var formData = location.search.slice(1);
    formData = formData.replace(/\+/g , " ");
    formData = decodeURIComponent(formData);
    var formFields = formData.split(/[&=]/g);

    //Write the field values sto the e
    document.forms.order.elements.orderDate.value =formFields[1];
    document.forms.order.elements.modelName.value =formFields[5];
    document.forms.order.elements.qty.value =formFields[7];
    document.forms.order.elements.initialCost.value =formFields[9];
    document.forms.order.elements.protectionName.value =formFields[13];
    document.forms.order.elements.protectionCost.value =formFields[15];
    document.forms.order.elements.subtotal.value =formFields[17];
    document.forms.order.elements.salesTax.value =formFields[19];
    document.forms.order.elements.totalCost.value =formFields[21];
});
window.addEventListener("load", function(){
    document.getElementById("subButton").onclick = runSubmit;
    document.getElementById("cardName").oninput = validateName;
    document.getElementById("cardNumber").oninput = validateNumber;
    document.getElementById("expYear").onchange = validateYear;
    document.getElementById("expMonth").onchange = validateMonth;
    document.getElementById("cvc").oninput = validateCVC;
})

function runSubmit(){
    validateName();
    validateCredit();
    validateNumber();
    validateYear();
    validateMonth();
    validateCVC();

}

function validateCVC(){
    var cardCVC = document.getElementById("cvc");
    var creditCard = document.querySelector('input[name="credit"]:checked').value;

    if (cardCVC.validity.valueMissing) {
          cardCVC.setCustomValidity("Enter your CVC number");
    } else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {
          cardCVC.setCustomValidity("Enter a 4-digit CVC number")
    } else if ((creditCard !== "amex") && (/^\d{3}$/.test(cardCVC.value) === false)) {
          cardCVC.setCustomValidity("Enter a 3-digit CVC number")
    } else{
          cardCVC.setCustomValidity("")
    }
}
function validateYear() {
    var cardYear = document.getElementById("expYear");
    if (cardYear.selectedIndex === 0) {
          cardYear.setCustomValidity("Select the expiration Year");
    } else {
          cardYear.setCustomValidity("");
    }
}
    

function validateMonth() {
    var cardMonth = document.getElementById("expMonth");
    if (cardMonth.selectedIndex === 0) {
          cardMonth.setCustomValidity("Select the expiration month");
    } else {
          cardMonth.setCustomValidity("");
    }
}

function validateNumber(){
    var cardNumber = document.getElementById("cardNumber");
    if (cardNumber.validity.valueMissing){
          cardNumber.setCustomValidity("Enter your card number");
    } else if(cardNumber.validity.patternMismatch){
          cardNumber.setCustomValidity("Enter a valid credit card number");
    }else if(luhn(cardNumber.value) === false){
          cardNumber.setCustomValidity("Enter a legitimate card Number")
    } else{
          cardNumber.setCustomValidity("");
    }
}

function validateCredit() {
    var creditCard = document.forms.payment.elements.credit[0]
    if (creditCard.validity.valueMissing) {
          creditCard.setCustomValidity("Select your credit card")
    } else {
          creditCard.setCustomValidity("");
    }
}
function validateName(){
    var cardName = document.getElementById("cardName");
    if (cardName.validity.valueMissing) {
          cardName.setCustomValidity("Enter your name as it appears on the card");
    } else {
          cardName.setCustomValidity("");
    }
}

function sumDigits(numStr) {
    var digitTotal = 0;
    for (var i = 0; i <numStr.length; i++){
          digitTotal += parseInt(numStr.charAt(i));
    }
    return digitTotal;
    
}

function luhn(idNum){
    var string1 = "";
    var string2 = "";

    //Retrieve the odd numbered digits
    for (var i = idNum.length - 1; i >= 0;i -=2){
          string1 += idNum.charAt(i);
    }
    //Retrieve the odd numbered digits and double these
    for(var i = idNum.length - 2; i >=0; i -= 2){
          string2 += 2 * idNum.charAt(i);
    }


return sumDigits(string1 + string2) % 10 === 0;
}
