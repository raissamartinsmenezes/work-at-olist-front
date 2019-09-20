function hasValidName(inputValue){
    const regexName = /^[A-Za-zÀ-ú'" ]+ [A-Za-zÀ-ú'" ][^#&<>\"~;$^%{}?]+$/
    return regexName.test(inputValue) 
}

module.exports = hasValidName


