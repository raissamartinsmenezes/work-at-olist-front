const nameInput = document.getElementById('name')

const validation = () => ({
    isItValid: false,
    currentValue: '',
})

nameValue = validation()

function testRegex(regex, inputValue, inputElement){
    if(regex.test(inputValue)) {
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

nameInput.addEventListener('keyup', () => {
    nameValue.currentValue = nameInput.value.trim() // removing whitespaces from both sides of the 'string' value
    // console.log(nameValue.currentValue)
    hasValidName(nameValue.currentValue, nameInput) // name input validation
    hasValidForm() // form validation for name
}); nameInput.addEventListener('focusout', () => { 
    nameValue.currentValue = nameInput.value.trim()
    hasValidName(nameValue.currentValue, nameInput)
    hasValidForm() 
})

module.exports = hasValidName
module.exports = testRegex 