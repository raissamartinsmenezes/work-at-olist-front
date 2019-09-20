let hasValidPassword = require('../js/hasValidPassword')

describe('hasValidPassword', () => {
    test('should return true when the password value was `5Ahigi`', () => {
        expect(hasValidPassword('5Ahigi')).toBe(true)
    })

    test('should return false when the password value has just spaces', () => {
        expect(hasValidPassword(' ')).toBe(false)
    })

    test('should return false when the password value was `951516165162315`', () => {
        expect(hasValidPassword('951516165162315')).toBe(false)
    })

    test('should return false when the password value was `1526`', () => {
        expect(hasValidPassword('1526')).toBe(false)
    })

    test('should return false when the password value was `1526abcdesf`', () => {
        expect(hasValidPassword('1526abcdesf')).toBe(false)
    })

    test('should return false when the password value was `abcd`', () => {
        expect(hasValidPassword('abcd')).toBe(false)
    })

    test('should return false when the password value was `abcdefg`', () => {
        expect(hasValidPassword('abcdefg')).toBe(false)
    })

    test('should return false when the password value was `%@abcdef&`', () => {
        expect(hasValidPassword('%@abcdef&')).toBe(false)
    })
    
    test('should return false when the password value was `ABC15`', () => {
        expect(hasValidPassword('ABC15')).toBe(false)
    })
})