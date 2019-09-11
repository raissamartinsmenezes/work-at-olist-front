const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const submitButton = document.getElementById('submitButton');

const validation = () => ({
    isItValid: false,
    currentValue: '',
});

nameValue = validation();
emailValue = validation();
passwordValue = validation();
confirmPasswordValue = validation();

// function addClass(classInput, selector){
//     // let inputElement = document.getElementById(selector);
//     const elemento = document.getElementById(selector);
//     elemento.classList.add(classInput)
//     // inputElement.classList.add(classInput);
// }

// // function removeClass(inputElement, classInput, selector){
// function removeClass(classInput, selector){
//     // let inputElement = document.getElementById(selector);
//     // document.getElementById(selector).classList.remove(classInput)
//     // inputElement.classList.remove(classInput);
//     const elemento = document.getElementById(selector);
//     elemento.classList.remove(classInput)
// }

// function paintBorder(inputValue, inputElement){
//     if(inputValue){
//         console.log(inputElement)
//         inputElement.classList.add('border-green');
//         inputElement.classList.remove('border-red');
   
//     } else {
//         inputElement.classList.remove('border-green');
//         inputElement.classList.add('border-red');
//     }
//     return inputElement;    // função de pintar borda adicionando ou removendo a classe
// }

function paintBorderGreen(inputElement){
    inputElement.classList.add('border-green');
    inputElement.classList.remove('border-red');
}

function paintBorderRed(inputElement){
    inputElement.classList.remove('border-green');
    inputElement.classList.add('border-red');
}

// function to test regex for name and email
function testRegex(regex, inputValue, inputElement){
    if(regex.test(inputValue)) {
        paintBorderGreen(inputElement)
        return true
    } else {
        paintBorderRed(inputElement)
        return false 
    }
}

function paintIndicators(testRegexCapital, testRegexNumber, inputValueLength){
    let indicator1 = document.getElementById('indicator1');
    let indicator2 = document.getElementById('indicator2');
    let indicator3 = document.getElementById('indicator3');
    let dot1 = document.getElementById('dot1');
    let dot2 = document.getElementById('dot2');
    let dot3 = document.getElementById('dot3');

    if(testRegexCapital == true){
        dot2.classList.add('color-green');
    } else {
        dot2.classList.remove('color-green');
        dot2.classList.add('color-red');
    }
    
    if(testRegexNumber == true){
        dot3.classList.add('color-green');
    } else {
        dot3.classList.remove('color-green');
        dot3.classList.add('color-red');
    }
    
    if(inputValueLength == true){
        dot1.classList.add('color-green');
    } else {
        dot1.classList.remove('color-green');
        dot1.classList.add('color-red');
        // dot2.classList.add('dot-red');
        // dot3.classList.add('dot-red');
    }

    if(testRegexCapital == true || testRegexNumber == true || inputValueLength == true){
        indicator1.classList.remove('color-yellow')
        indicator2.classList.remove('color-yellow')
        indicator1.classList.add('color-red')
    } else {
        indicator1.classList.remove('color-red')
    }


    if(testRegexCapital == true && testRegexNumber == true || testRegexCapital == true && inputValueLength == true || testRegexNumber == true && inputValueLength == true){
        indicator1.classList.remove('color-red')
        indicator1.classList.add('color-yellow')
        indicator2.classList.add('color-yellow')
    } else {
        indicator1.classList.remove('color-yellow')
        indicator2.classList.remove('color-yellow')
    }

    if(testRegexCapital == true && testRegexNumber == true && inputValueLength == true) {
        indicator1.classList.remove('color-yellow')
        indicator2.classList.remove('color-yellow')
        indicator1.classList.add('color-green')
        indicator2.classList.add('color-green')
        indicator3.classList.add('color-green')
    } else {
        indicator1.classList.remove('color-green')
        indicator2.classList.remove('color-green')
        indicator3.classList.remove('color-green')
    }
    
}

// function to test regex for password and confirmPassword 
function testRegexPassword(regexCapital, regexNumber, inputValue, inputElement){
    if(inputValue.length > 5 && regexCapital.test(inputValue) && regexNumber.test(inputValue)) {  
        paintBorderGreen(inputElement)
        return true 
    } else {
        paintBorderRed(inputElement)
        return false
    }
}

function hasValidName(inputValue, nameInput){
    const regexName = /^[A-Za-zÀ-ú'" ]+ [A-Za-zÀ-ú'" ][^#&<>\"~;$^%{}?]+$/
    // /^[A-Za-zÀ-ú'" ]+ [A-Za-zÀ-ú'" ][^#&<>\"~;$^%{}?]+$/g
    // /^[A-Za-zÀ-ú'" ]+ [A-Za-zÀ-ú'" ]+$/
    // /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/g
    if(testRegex(regexName, inputValue, nameInput)){
        return nameValue.isItValid = true
    } else {
        return nameValue.isItValid = false
    }
}

function hasValidEmail(inputValue, emailInput){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(testRegex(regexEmail, inputValue, emailInput)){
        return emailValue.isItValid = true
    } else {
        return emailValue.isItValid = false
    }
}

// hasValidPassword
function hasValidPassword(inputValue, passwordInput){
    const regexPasswordCapitalLetter = /[A-Z]/g
    const regexPasswordNumber = /[0-9]/g
    
    if(testRegexPassword(regexPasswordCapitalLetter, regexPasswordNumber, inputValue, passwordInput)) {
        return passwordValue.isItValid = true 
    } else {
        return passwordValue.isItValid = false 
    }
    
}

function hasValidConfirmPassword(inputValue, passwordValue, inputElement){
    if(inputValue === passwordValue){
        paintBorderGreen(inputElement)
        return confirmPasswordValue.isItValid = true
    } else {
        paintBorderRed(inputElement)
        return confirmPasswordValue.isItValid = false
    }
    
}

function enableButton() {
    submitButton.disabled = false
}

function hasValidForm() {
    if(nameValue.isItValid == true 
        && emailValue.isItValid == true 
        && passwordValue.isItValid == true 
        && confirmPasswordValue.isItValid == true){
        enableButton()
    } 
}

function loadingSpinners() {
    setTimeout(() => {
        let loadingStatus = document.getElementById('loadingStatus')
        let createAccountContent = document.getElementById('createAccountContent')
        // let loginDoneBox = document.getElementById('loginDoneBox')
        // let loginFormBox = document.getElementById('loginFormBox')
        createAccountContent.classList.add('disable')
        loadingStatus.classList.remove('disable')
        // loginFormBox.classList.add('disable')
        // loginDoneBox.classList.remove('disable')
    }, 6000);
}
// function hasValidForm(nameValue){
//     if(nameValue == true){
//         submitButton.disabled == false
//     }
// }

// function hasValidForm() {
//     if(nameValue === true && emailValue === true && passwordValue === true && confirmPasswordValue === true){
//         submitButton.disabled == false
//     } 
// }

// não colocar as funções nos retornos returns

// monitoring 'keyup' and 'focusout' for nameInput 
nameInput.addEventListener('keyup', () => {
    nameValue.currentValue = nameInput.value.trim() // removing whitespaces from both sides of the 'string' value
    // console.log(nameValue.currentValue)
    hasValidName(nameValue.currentValue, nameInput) // name input validation
    hasValidForm() // form validation for name
}); nameInput.addEventListener('focusout', () => { 
    nameValue.currentValue = nameInput.value.trim()
    hasValidName(nameValue.currentValue, nameInput)
    hasValidForm() 
    // hasValidForm(nameValue) // form validation for name
    // console.log(nameValue.isItValid)
})

// monitoring 'keyup' and 'focusout' for emailInput 
emailInput.addEventListener('keyup', () => {
    emailValue.currentValue = emailInput.value.toLowerCase().trim(); 
    hasValidEmail(emailValue.currentValue, emailInput)
    console.log(emailValue.currentValue)
    hasValidForm() 
}); emailInput.addEventListener('focusout', () => {
    emailValue.currentValue = emailInput.value.toLowerCase().trim(); 
    hasValidEmail(emailValue.currentValue, emailInput)
    hasValidForm() 
    // validate form here
    console.log(emailValue.isItValid)
})

passwordInput.addEventListener('keyup', () => {
    passwordValue.currentValue = passwordInput.value
    console.log(passwordValue.currentValue)
    hasValidPassword(passwordValue.currentValue, passwordInput)
    console.log(passwordValue.isItValid)
    const regexPasswordCapitalLetter = /[A-Z]/g
    const regexPasswordNumber = /[0-9]/g
    let testRegexCapital = regexPasswordCapitalLetter.test(passwordValue.currentValue)
    let testRegexNumber = regexPasswordNumber.test(passwordValue.currentValue)
    paintIndicators(testRegexCapital, testRegexNumber, (passwordValue.currentValue.length > 5))
    hasValidForm() 
}); passwordInput.addEventListener('focusout', () => {
    passwordValue.currentValue = passwordInput.value
    hasValidPassword(passwordValue.currentValue, passwordInput)
    hasValidForm() 
})

confirmPasswordInput.addEventListener('keyup', () => {
    confirmPasswordValue.currentValue = confirmPasswordInput.value
    passwordValue.currentValue = passwordInput.value
    hasValidConfirmPassword(confirmPasswordValue.currentValue, passwordValue.currentValue, confirmPasswordInput)
    hasValidForm() 
    console.log(confirmPasswordValue.isItValid)
}); confirmPasswordInput.addEventListener('focusout', () => {
    confirmPasswordValue.currentValue = confirmPasswordInput.value
    passwordValue.currentValue = passwordInput.value
    hasValidConfirmPassword(confirmPasswordValue.currentValue, passwordValue.currentValue, confirmPasswordInput)
    hasValidForm() 
})



submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    hasValidForm() 
    loadingSpinners() 
    let loginDoneBox = document.getElementById('loginDoneBox')
    let loginFormBox = document.getElementById('loginFormBox')
    loginFormBox.classList.add('disable')
    loginDoneBox.classList.remove('disable')
    // console.log('aqui')
})



// deixar o botão opaco 
// limpar o form > criar função


