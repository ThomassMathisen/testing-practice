import {add, subtract, multiply, divide } from '../code/calculator'

test('Add', () => {
    expect(add(2, 7)).toBe(9);
});

test('Subtract', () => {
    expect(subtract(7, 2)).toBe(5);
});

test('Multiply', () => {
    expect(multiply(2, 7)).toBe(14);
});

test('Divide', () => {
    expect(divide(14, 7)).toBe(2);
});
