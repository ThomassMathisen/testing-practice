import caesarCipher from '../code/caesarCipher'

test('Wrapping from a to z', () => {
    expect(caesarCipher('zyxwvutsrqponmlkjihgfedcba', 5)).toBe('edcbazyxwvutsrqponmlkjihgf')
})

test('Keeping the same case', () => {
    expect(caesarCipher('Keep same CASE', 7)).toBe('Rllw zhtl JHZL');
})

test('Test punctuation', () => {
    expect(caesarCipher('Hey, how are you?', 3)).toBe('Khb, krz duh brx?')
})