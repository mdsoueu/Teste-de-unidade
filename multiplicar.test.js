const multiplicar = require('./multiplicar');

test('Multiplicação de números positivos', () => {
    expect(multiplicar(25, 4)).toBe(100);
});

test('Multiplicação de número positivo e negativo', () => {
    expect(multiplicar(18, -3)).toBe(-54);
});

test('Multiplicação de números negativos', () => {
    expect(multiplicar(-41, -10)).toBe(410);
});