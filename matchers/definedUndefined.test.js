
test('Valor definido', () => {
    const cinquenta = 50;
    expect(cinquenta).toBeDefined();
});

test('Valor não definido', () => {
    const cinquenta = 50;
    expect(cinquenta).not.toBeUndefined();
});