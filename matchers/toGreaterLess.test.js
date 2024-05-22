
test('Validando multiplicação', () => {

    const resultado = 10 * 5;

    expect(resultado).toBeGreaterThan(25);
    expect(resultado).toBeGreaterThanOrEqual(45.5);
    expect(resultado).toBeGreaterThanOrEqual(50);
    expect(resultado).toBeLessThan(100);
    expect(resultado).toBeLessThanOrEqual(50.1);
});