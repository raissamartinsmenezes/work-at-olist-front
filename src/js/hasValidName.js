
function hasValidName(inputValue){
    const regexName = /^[A-Za-zÀ-ú'" ]+ [A-Za-zÀ-ú'" ][^#&<>\"~;$^%{}?]+$/
    //= regexName.test(inputValue)
    return regexName.test(inputValue)
}

module.exports = hasValidName