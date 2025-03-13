import {sum} from "./index";

describe('sum', () => {
    test('sum must be 10', () => {
        const result = sum(3, 7);

        expect(result).toBe(10);
    });

    test('sum must be 4', () => {
        const result = sum(2, 2);

        expect(result).toBe(4);
    });
});