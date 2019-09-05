const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const submitButton = document.getElementById('submitButton');

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

// function to test regex
function testRegex(regex, inputValue, inputElement){
    if(regex.test(inputValue)) {
        // paintBorder(inputValue, inputElement)
        paintBorderGreen(inputElement)
        // return console.log(inputValue)
    } else {
        paintBorderRed(inputElement)
        // aqui eu tenho que pintar a borda de vermelho 
        // return console.log('erro')
    }
}

function paintIndicators(testRegexCapital, testRegexNumber, inputLength){
    let indicator1 = document.getElementById('indicator1');
    let indicator2 = document.getElementById('indicator2');
    let indicator3 = document.getElementById('indicator3');
    let dot1 = document.getElementById('dot1');
    let dot2 = document.getElementById('dot2');
    let dot3 = document.getElementById('dot3');

    if(testRegexCapital == true){
        dot2.classList.add('dot-green');
    } else {
        dot2.classList.remove('dot-green');
        dot2.classList.add('dot-red');
    }
    
    if(testRegexNumber == true){
        dot3.classList.add('dot-green');
    } else {
        dot3.classList.remove('dot-green');
        dot3.classList.add('dot-red');
    }
    
    if(inputLength == true){
        dot1.classList.add('dot-green');
    } else {
        dot1.classList.remove('dot-green');
        dot1.classList.add('dot-red');
        // dot2.classList.add('dot-red');
        // dot3.classList.add('dot-red');
    }

    if(testRegexCapital == true || testRegexNumber == true || inputLength == true){
        indicator1.classList.remove('dot-yellow')
        indicator2.classList.remove('dot-yellow')
        indicator1.classList.add('dot-red')
    } else {
        indicator1.classList.remove('dot-red')
    }

    if(testRegexCapital == true && testRegexNumber == true || testRegexCapital == true && inputLength == true || textRegexNumber == true && inputLength == true){
        indicator1.classList.add('dot-yellow')
        indicator2.classList.add('dot-yellow')
    } else {
        indicator1.classList.remove('dot-yellow')
        indicator2.classList.remove('dot-yellow')
    }

    if(testRegexCapital == true && testRegexNumber == true && inputLength == true) {
        indicator1.classList.remove('dot-yellow')
        indicator2.classList.remove('dot-yellow')
        indicator1.classList.add('dot-green')
        indicator2.classList.add('dot-green')
        indicator3.classList.add('dot-green')
    } else {
        indicator1.classList.remove('dot-green')
        indicator2.classList.remove('dot-green')
        indicator3.classList.remove('dot-green')
    }
    
}

function testRegexPassword(regexCapital, regexNumber, inputValue, inputElement){
    if(inputValue.length > 5 && regexCapital.test(inputValue) && regexNumber.test(inputValue)) {  
        paintBorderGreen(inputElement)
        return inputValue
    } else {
        return paintBorderRed(inputElement)
    }
}

// function paintPasswordIndicators(inputValue, inputElement){
//     if(regexCapital.test(inputValue)) {
//         inputElement.classList.add('dot-green');
//     } else if(regexNumber.test(inputValue)) {
//         inputElement.classList.add('dot-green');
//     } else if(inputValue.length > 5) {
//         inputElement.classList.add('dot-green');
//     } else {
//         inputElement.classList.add('dot-red');
//     }
// }

// function paintDotIndicators(){

// }

function validName(inputValue, nameInput){
    const regexName = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/g
    testRegex(regexName, inputValue, nameInput);
    return inputValue
}

function validEmail(inputValue, emailInput){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    testRegex(regexEmail, inputValue, emailInput);
    // acho que tenho que colocar um if aqui!
    return inputValue
    
}

function validPassword(inputValue, passwordInput){
    const regexPasswordCapitalLetter = /[A-Z]/g
    const regexPasswordNumber = /[0-9]/g
    testRegexPassword(regexPasswordCapitalLetter, regexPasswordNumber, inputValue, passwordInput);
    
}

function validConfirmPassword(inputValue, passwordValue, inputElement){
    if(inputValue === passwordValue){
        paintBorderGreen(inputElement)
        return inputValue
    } else {
        return paintBorderRed(inputElement)
    }
}

nameInput.addEventListener('keyup', () => {
    let nameValue = nameInput.value
    validName(nameValue, nameInput)
    // posso pegar as iniciais e passar para maiúscula
})

// colocar o focusout aqui!!!!! para a borda ficar ver quando o focus for ativado

emailInput.addEventListener('keyup', () => {
    let emailValue = emailInput.value.toLowerCase(); 
    validEmail(emailValue, emailInput)
});

passwordInput.addEventListener('keyup', () => {
    let passwordValue = passwordInput.value
    validPassword(passwordValue, passwordInput)
    const regexPasswordCapitalLetter = /[A-Z]/g
    const regexPasswordNumber = /[0-9]/g
    let inputLength = passwordValue.length
    let testRegexCapital = regexPasswordCapitalLetter.test(passwordValue)
    let testRegexNumber = regexPasswordNumber.test(passwordValue)
    paintIndicators(testRegexCapital, testRegexNumber, (inputLength > 5))
})

confirmPasswordInput.addEventListener('keyup', () => {
    let confirmPasswordValue = confirmPasswordInput.value
    validConfirmPassword(confirmPasswordValue, passwordValue, confirmPasswordInput)
})

// deixar o botão opaco 


