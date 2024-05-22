const menos = require('./menos');

test('Subtração de números positivos', () =>{
    expect(menos(10, 4)).toBe(6);
});

test('Subtração de números neagtivos', () =>{
    expect(menos(-15, -8)).toBe(-7);
});

test('Subtração de número positivo e neagtivo', () =>{
    expect(menos(50, -25)).toBe(75);
});