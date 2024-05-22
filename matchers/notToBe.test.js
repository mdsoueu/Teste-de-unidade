const funcao = require('./toBe');

test('Segundos errados', () => {
    expect(funcao(48)).not.toBe(172801);
});

test('Lista não contém número', () => {
    const lista2 = [100, 54, 20, 79, 28];
    expect(lista2).not.toBe(254);
});

test('Números não são iguais', () => {
    expect(58).not.toBe(154);
});