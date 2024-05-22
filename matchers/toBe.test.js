const segundos = require('./toBe');

test('Transforma horas em segundo', () => {
    expect(segundos(2)).toBe(7200);
});

test('Transforma horas em segundo', () => {
    expect(segundos(24)).toBe(86400);
});

test('Transforma horas em segundo', () => {
    expect(segundos(48)).toBe(172800);
});
