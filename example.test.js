import { plus, oddNumbersOnly } from './example';

test('1+1 should be 2', () => {
    const res = plus(1, 1);
    const expectation = 2;
    expect(res).toBe(expectation);
});

test('Should have 5 odd numbers in [1, 10]', () => {
    const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = oddNumbersOnly(oneToTen);
    const expectation = 5;
    expect(result.length).toBe(expectation);
});
