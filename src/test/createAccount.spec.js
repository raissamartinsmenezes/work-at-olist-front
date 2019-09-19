require('../js/createAccount.js')

// describe('Smoke Test', () => {
//     describe('hasValidName', () => {
//         it('should exist and be a function', () => {
//             expect(hasValidName).toBe('function')
//         })
//     })
// })

describe('hasValidName', () => {

    const validation = () => ({
        isItValid: false,
        currentValue: '',
    })

    beforeEach(() => {
        nameValue = validation();
    })

    it('should be not valid if contain numbers in the name', () => {
        nameValue.currentValue = 'João Paulo999'
        hasValidName(nameValue.currentValue)
        expect(nameValue.isItValid).toBe(false)
    })
})