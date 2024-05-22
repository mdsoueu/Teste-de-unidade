const dividir = require('./dividir');

test('Divisão de números positivos', () => {
    expect(dividir(10, 2)).toBe(5);
});

test('Divisão de número positivo e negativo', () => {
    expect(dividir(14, -2)).toBe(-7);
});

test('Divisão de números negativos', () => {
    expect(dividir(-22, -2)).toBe(11);
});