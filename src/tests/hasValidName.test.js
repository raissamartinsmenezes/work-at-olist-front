let hasValidName = require('../js/hasValidName')

describe('hasValidName', () => {
    test('should return true when the name value is `João Paulo` with space and the initial letters are low', () => {
        expect(hasValidName('roberta maria')).toBe(true)
    })

    test('should return true when the name value is `João Paulo` with space and the initial letters are capital', () => {
        expect(hasValidName('Roberta Maria')).toBe(true)
    })

    test('should return false when the name value is a number', () => {
        expect(hasValidName('9999')).toBe(false)
    })

    test('should return false when the name value has a number or numbers', () => {
        expect(hasValidName('roberta9 maria000')).toBe(false)
    })

    test('should return false when the name value has spaces', () => {
        expect(hasValidName(' ')).toBe(false)
    })

    test('should return false when the name value has just one name', () => {
        expect(hasValidName('roberta')).toBe(false)
    })
    
    test('should return false when the name value has special characters', () => {
        expect(hasValidName('Roberta &*% Maria')).toBe(false)
    })
})

