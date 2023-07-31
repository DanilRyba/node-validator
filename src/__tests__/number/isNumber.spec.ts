import { isNumber } from "../../number";

const testData = [
    { value: undefined, expected: false, options: undefined },
    { value: null, expected: false, options: undefined },
    { value: [], expected: false, options: undefined },
    { value: 'string', expected: false, options: undefined },
    { value: {}, expected: false, options: undefined },
    { value: () => {}, expected: false, options: undefined },
    { value: NaN, expected: false, options: undefined },
    { value: 1, expected: true, options: undefined },
    // min
    { value: 5, expected: false, options: { min: 6 } },
    { value: 6, expected: true, options: { min: 6 } },
    // max
    { value: 5, expected: false, options: { max: 4 } },
    { value: 4, expected: true, options: { max: 4 } },
    // combined min & max
    { value: 5, expected: false, options: { min: 3, max: 4 } },
    { value: 6, expected: true, options: { min: 1, max: 7 } },
];

describe('Number', () => {
    describe('isNumber', () => {
        it.each([
            ...testData
        ])(`When function param "target" is "$value" and "options" is "$options", then function must return "$expected"`, ({ value, expected, options }) => {
            const result = isNumber(value, options);

            expect(result).toBe(expected);
        });
    });
});
