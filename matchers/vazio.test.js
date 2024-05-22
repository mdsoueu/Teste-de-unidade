
test('Valor vazio', () => {
    const valor = null;
    expect(valor).toBeNull();
});

test('Valor cheio', () => {
    const valor = 'null';
    expect(valor).not.toBeNull();
});


