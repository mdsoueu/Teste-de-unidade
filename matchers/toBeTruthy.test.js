const booleanVerdade = require('./toBeTruthy');

test('Soma de caixa', () => {
    let final = 165 + 187 + 249;
    expect(final > 500).toBeTruthy();
});

test('Verdadeiro verdadeiro', () => {
    expect(booleanVerdade()).toBeTruthy();
});
