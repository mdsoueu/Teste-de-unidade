const booleanFalso = require('./toBeFalsy');

test('Valor de multiplicacao falsa', () => {
    let resultado = 10 * 50;
    expect(resultado === 501).toBeFalsy();
});

test('Falso verdadeiro', () => {
    expect(booleanFalso()).toBeFalsy();
});
