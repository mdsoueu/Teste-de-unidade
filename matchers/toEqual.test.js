test('Arrays iguais', () => {
    const lista1 = [100, 54, 20, 79, 28];
    const lista2 = [100, 54, 20, 79, 28];

    expect(lista1).toEqual(lista2);
});

test('Objstos iguais', () => {
    const obj1 = { w: 1, f: 8, s: 15 };
    const obj2 = { w: 1, f: 8, s: 15 };

    expect(obj1).toEqual(obj2);
});

