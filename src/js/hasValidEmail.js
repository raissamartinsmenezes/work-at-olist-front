function hasValidEmail(inputValue){
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    return regexEmail.test(inputValue)
}

module.exports = hasValidEmail


