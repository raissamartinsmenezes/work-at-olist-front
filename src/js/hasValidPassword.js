function hasValidPassword(inputValue){
    const regexPasswordCapitalLetter = /[A-Z]/g
    const regexPasswordNumber = /[0-9]/g
    if(inputValue.length > 5 && regexPasswordCapitalLetter.test(inputValue) && regexPasswordNumber.test(inputValue)) {
        return true 
    } else {
        return false 
    }  
}

module.exports = hasValidPassword