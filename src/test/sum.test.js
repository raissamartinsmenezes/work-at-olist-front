const sum = require('./sum')

test('é uma função', () => {
    expect(sum(1, 2)).toBe(3)
})