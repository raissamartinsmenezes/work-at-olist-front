let hasValidEmail = require('../js/hasValidEmail')

describe('hasValidEmail', () => {
    test('should return true when the email value was `roberta@gmail.com`', () => {
        expect(hasValidEmail('roberta@gmail.com')).toBe(true)
    })

    test('should return true when the email value was `roberta@gmail.com.br`', () => {
        expect(hasValidEmail('roberta@gmail.com.br')).toBe(true)
    })

    test('should return false when the email value was `roberta@gmail`', () => {
        expect(hasValidEmail('roberta@gmail')).toBe(false)
    })

    test('should return false when the email value was `roberta@gmail.`', () => {
        expect(hasValidEmail('roberta@gmail.')).toBe(false)
    })

    test('should return false when the email value has just the name', () => {
        expect(hasValidEmail('robertamaria')).toBe(false)
    })

    test('should return false when the email the value was `roberta.`', () => {
        expect(hasValidEmail('roberta.')).toBe(false)
    })
    
    test('should return false when the email value has accent', () => {
        expect(hasValidEmail('robertá@gmail.com')).toBe(false)
    })

    test('should return false when the email value has just numbers', () => {
        expect(hasValidEmail('9999999999')).toBe(false)
    })

    test('should return false when the email value has spaces', () => {
        expect(hasValidEmail(' ')).toBe(false)
    })
})

