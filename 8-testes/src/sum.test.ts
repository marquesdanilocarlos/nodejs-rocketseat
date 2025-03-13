import {sum} from "./index";

test('sum must be 10', () => {
    const result = sum(3, 7);

    expect(result).toBe(11);
});