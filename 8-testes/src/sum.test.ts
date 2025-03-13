import {sum} from "./index";

describe('sum', () => {
    let sumResult: number;

    beforeAll(() => {
        sumResult = 10;
    });

    afterAll(() => {
        console.log('Executado depois dos testes.');
    });

    test('sum must be 10', () => {
        const result = sum(3, 7);

        expect(result).toBe(sumResult);
    });

    it('should do the sum with result 4', () => {
        const result = sum(2, 2);

        expect(result).toBe(4);
    });
});