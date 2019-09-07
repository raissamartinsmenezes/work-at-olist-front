const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const submitButton = document.getElementById('submitButton');

const validation = () => ({
    isItValid: false,
    updatedValue: '',
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

// function to test regex
function testRegex(regex, inputValue, inputElement){
    if(regex.test(inputValue)) {
        // paintBorder(inputValue, inputElement)
        paintBorderGreen(inputElement)
        return true
        // return console.log(inputValue)
    } else {
        paintBorderRed(inputElement)
        return false 
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
    
    if(inputLength == true){
        dot1.classList.add('color-green');
    } else {
        dot1.classList.remove('color-green');
        dot1.classList.add('color-red');
        // dot2.classList.add('dot-red');
        // dot3.classList.add('dot-red');
    }

    if(testRegexCapital == true || testRegexNumber == true || inputLength == true){
        indicator1.classList.remove('color-yellow')
        indicator2.classList.remove('color-yellow')
        indicator1.classList.add('color-red')
    } else {
        indicator1.classList.remove('color-red')
    }

    // problemas com 6 caracteres e o numero 

    if(testRegexCapital == true && testRegexNumber == true || testRegexCapital == true && inputLength == true || testRegexNumber == true && inputLength == true){
        indicator1.classList.remove('color-red')
        indicator1.classList.add('color-yellow')
        indicator2.classList.add('color-yellow')
    } else {
        indicator1.classList.remove('color-yellow')
        indicator2.classList.remove('color-yellow')
    }

    if(testRegexCapital == true && testRegexNumber == true && inputLength == true) {
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
    const regexName = /^[A-Za-zÀ-ú'" ]+ [A-Za-zÀ-ú'" ][^#&<>\"~;$^%{}?]+$/
    // /^[A-Za-zÀ-ú'" ]+ [A-Za-zÀ-ú'" ][^#&<>\"~;$^%{}?]+$/g
    // /^[A-Za-zÀ-ú'" ]+ [A-Za-zÀ-ú'" ]+$/
    // /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/g
    if(testRegex(regexName, inputValue, nameInput)){
        return console.log(inputValue)
    } else {
        return false
    }

    //  validar melhor o nome ainda apresenta erros
}

function validEmail(inputValue, emailInput){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    testRegex(regexEmail, inputValue, emailInput);
    // acho que tenho que colocar um if aqui!
    return inputValue
    // espaços em branco após estão sendo contados 
}

// hasValidPassword
function validPassword(inputValue, passwordInput){
    const regexPasswordCapitalLetter = /[A-Z]/g
    const regexPasswordNumber = /[0-9]/g
    testRegexPassword(regexPasswordCapitalLetter, regexPasswordNumber, inputValue, passwordInput);
    
}

function validConfirmPassword(inputValue, passwordValue, inputElement){
    if(inputValue === passwordValue){
        paintBorderGreen(inputElement)
        return console.log(inputValue)
    } else {
        paintBorderRed(inputElement)
        return console.logo(passwordValue)
        
    }
}

function hasValidForm(nameValue){
    if(nameValue == true){
        submitButton.disabled == false
    }
}

// function hasValidForm() {
//     if(nameValue === true && emailValue === true && passwordValue === true && confirmPasswordValue === true){
//         submitButton.disabled == false
//     } 
// }

// não colocar as funções nos retornos returns


nameInput.addEventListener('keyup', () => {
    nameValue.updatedValue = nameInput.value.trim()
    console.log(nameValue.updatedValue)
    validName(nameValue, nameInput)
    hasValidForm(nameValue)
    // posso pegar as iniciais e passar para maiúscula
}); nameInput.addEventListener('focusout', () => {
    let nameValue = nameInput.value
    validName(nameValue, nameInput)
});

// colocar o focusout aqui!!!!! para a borda ficar ver quando o focus for ativado

emailInput.addEventListener('keyup', () => {
    let emailValue = emailInput.value.toLowerCase().trim(); 
    validEmail(emailValue, emailInput)
    return emailValue
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
    let passwordValue = passwordInput.value
    validConfirmPassword(confirmPasswordValue, passwordValue, confirmPasswordInput)
})



// submitButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     if(hasValidForm()) {
//         // ativa o botao 
//         // troca a classe para os spinners 
//         // muda a página para 'tudo certo'
//     }
// })

// deixar o botão opaco 


