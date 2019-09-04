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
        return console.log(inputValue)
    } else {
        paintBorderRed(inputElement)
        // aqui eu tenho que pintar a borda de vermelho 
        return console.log('erro')
    }
}

function validName(inputValue, nameInput) {
    const regexName = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/g
    testRegex(regexName, inputValue, nameInput);
    return inputValue
}

function validEmail(inputValue, emailInput) {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    testRegex(regexEmail, inputValue, emailInput);
    // acho que tenho que colocar um if aqui!
    return inputValue
    
}

nameInput.addEventListener('keyup', () => {
    let nameValue = nameInput.value
    validName(nameValue, nameInput)
    // posso pegar as iniciais e passar para maiúscula
})

emailInput.addEventListener('keyup', () => {
    let emailValue = emailInput.value.toLowerCase(); 
    validEmail(emailValue, emailInput)
});


// deixar o botão opaco 


