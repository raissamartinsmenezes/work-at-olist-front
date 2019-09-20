document.addEventListener('DOMContentLoaded', function(){

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const confirmPasswordInput = document.getElementById('confirmPassword')
const submitButton = document.getElementById('submitButton')

const validation = () => ({
    isItValid: false,
    currentValue: '',
})

nameValue = validation()
emailValue = validation()
passwordValue = validation()
confirmPasswordValue = validation()

function paintBorderGreen(inputElement){
    inputElement.classList.add('border-green')
    inputElement.classList.remove('border-red')
}

function paintBorderRed(inputElement){
    inputElement.classList.remove('border-green')
    inputElement.classList.add('border-red')
}

function paintBorder(inputValue, inputElement){
    if(inputValue){
        return paintBorderGreen(inputElement)
    } else {
        return paintBorderRed(inputElement)
    }
}

function testRegex(regex, inputValue){
    if(regex.test(inputValue)) {
        return true
    } else {
        return false 
    }
}

function paintIndicators(testRegexCapital, testRegexNumber, inputValueLength){
    let indicator1 = document.getElementById('indicator1')
    let indicator2 = document.getElementById('indicator2')
    let indicator3 = document.getElementById('indicator3')
    let dot1 = document.getElementById('dot1')
    let dot2 = document.getElementById('dot2')
    let dot3 = document.getElementById('dot3')

    if(testRegexCapital == true){
        dot2.classList.add('color-green')
    } else {
        dot2.classList.remove('color-green')
        dot2.classList.add('color-red')
    }
    
    if(testRegexNumber == true){
        dot3.classList.add('color-green')
    } else {
        dot3.classList.remove('color-green')
        dot3.classList.add('color-red')
    }
    
    if(inputValueLength == true){
        dot1.classList.add('color-green')
    } else {
        dot1.classList.remove('color-green')
        dot1.classList.add('color-red')
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

function testRegexPassword(regexCapital, regexNumber, inputValue){
    if(inputValue.length > 5 && regexCapital.test(inputValue) && regexNumber.test(inputValue)) {  
        return true 
    } else {
        return false
    }
}

function hasValidName(inputValue){
    const regexName = /^[A-Za-zÀ-ú'" ]+ [A-Za-zÀ-ú'" ][^#&<>\"~;$^%{}?]+$/
    nameValue.isItValid = regexName.test(inputValue) 
    // if(regexName.test(inputValue)){
        // return nameValue.isItValid = true
    // } 
    // else {
    //     return nameValue.isItValid = false
    // }
}

// function hasValidName(inputValue){
//     const regexName = /^[A-Za-zÀ-ú'" ]+ [A-Za-zÀ-ú'" ][^#&<>\"~;$^%{}?]+$/
//     if(testRegex(regexName, inputValue)){
//         return nameValue.isItValid = true
//     } else {
//         return nameValue.isItValid = false
//     }
// }

function hasValidEmail(inputValue){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"][^#&<>\"~;$^%{}?]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(testRegex(regexEmail, inputValue)){
        return emailValue.isItValid = true
    } else {
        return emailValue.isItValid = false
    }
}

function hasValidPassword(inputValue){
    const regexPasswordCapitalLetter = /[A-Z]/g
    const regexPasswordNumber = /[0-9]/g
    if(testRegexPassword(regexPasswordCapitalLetter, regexPasswordNumber, inputValue)) {
        return passwordValue.isItValid = true 
    } else {
        return passwordValue.isItValid = false 
    }  
}

function hasValidConfirmPassword(inputValue, passwordValue, inputElement){
    if(inputValue == passwordValue){
        return confirmPasswordValue.isItValid = true
    } else {
        return confirmPasswordValue.isItValid = false
    }  
}

function hasValidForm() {
    if(nameValue.isItValid == true 
        && emailValue.isItValid == true 
        && passwordValue.isItValid == true 
        && confirmPasswordValue.isItValid == true){
        return submitButton.disabled = false
    } else {
        return submitButton.disabled = true
    }
}

// monitoring events for DOM elements

nameInput.addEventListener('keyup', () => {
    nameValue.currentValue = nameInput.value.trim() // removing whitespaces from both sides of the 'string' value
    hasValidName(nameValue.currentValue)
    paintBorder(nameValue.isItValid, nameInput) 
    hasValidForm()
}); nameInput.addEventListener('focusout', () => { 
    nameValue.currentValue = nameInput.value.trim()
    hasValidName(nameValue.currentValue)
    paintBorder(nameValue.isItValid, nameInput)
    hasValidForm()  
})

emailInput.addEventListener('keyup', () => {
    emailValue.currentValue = emailInput.value.toLowerCase().trim(); 
    hasValidEmail(emailValue.currentValue)
    paintBorder(emailValue.isItValid, emailInput)
    hasValidForm() 
}); emailInput.addEventListener('focusout', () => {
    emailValue.currentValue = emailInput.value.toLowerCase().trim(); 
    hasValidEmail(emailValue.currentValue)
    paintBorder(emailValue.isItValid, emailInput)
    hasValidForm() 
})

passwordInput.addEventListener('keyup', () => {
    passwordValue.currentValue = passwordInput.value
    hasValidPassword(passwordValue.currentValue)
    paintBorder(passwordValue.isItValid, passwordInput)
    const regexPasswordCapitalLetter = /[A-Z]/g
    const regexPasswordNumber = /[0-9]/g
    let testRegexCapital = regexPasswordCapitalLetter.test(passwordValue.currentValue)
    let testRegexNumber = regexPasswordNumber.test(passwordValue.currentValue)
    paintIndicators(testRegexCapital, testRegexNumber, (passwordValue.currentValue.length > 5))
    hasValidForm() 
}); passwordInput.addEventListener('focusout', () => {
    passwordValue.currentValue = passwordInput.value
    hasValidPassword(passwordValue.currentValue)
    paintBorder(passwordValue.isItValid, passwordInput)
    hasValidForm() 
})

confirmPasswordInput.addEventListener('keyup', () => {
    confirmPasswordValue.currentValue = confirmPasswordInput.value
    passwordValue.currentValue = passwordInput.value
    hasValidConfirmPassword(confirmPasswordValue.currentValue, passwordValue.currentValue)
    paintBorder(confirmPasswordValue.isItValid, confirmPasswordInput)
    hasValidForm() 
}); confirmPasswordInput.addEventListener('focusout', () => {
    confirmPasswordValue.currentValue = confirmPasswordInput.value
    passwordValue.currentValue = passwordInput.value
    hasValidConfirmPassword(confirmPasswordValue.currentValue, passwordValue.currentValue)
    paintBorder(confirmPasswordValue.isItValid, confirmPasswordInput)
    hasValidForm()    
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault() // preventing default event from button submit
    
    let loadingStatus = document.getElementById('loadingStatus')
    let createAccountContent = document.getElementById('createAccountContent')
    createAccountContent.classList.add('disable')
    loadingStatus.classList.remove('disable')
        
    setTimeout(() => {
    let loginDoneBox = document.getElementById('loginDoneBox')
    let loginFormBox = document.getElementById('loginFormBox')
    loginFormBox.classList.add('disable')
    loginDoneBox.classList.remove('disable')
    }, 2000) 
})

function clearForm(){ // cleaning the form after refresh 
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';
}

clearForm()

})

module.exports = hasValidName