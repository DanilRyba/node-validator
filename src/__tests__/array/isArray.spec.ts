import { isArray } from "../../array";

const testData = [
    { value: undefined, expected: false, options: undefined },
    { value: null, expected: false, options: undefined },
    { value: 1, expected: false, options: undefined },
    { value: 'string', expected: false, options: undefined },
    { value: {}, expected: false, options: undefined },
    { value: () => {}, expected: false, options: undefined },
    { value: [], expected: true, options: undefined },
    // min length
    { value: [], expected: false, options: { minLength: 1 } },
    { value: [1], expected: true, options: { minLength: 1 } },
    // max length
    { value: [1, 1], expected: false, options: { maxLength: 1 } },
    { value: [1], expected: true, options: { maxLength: 1 } },
    // combined min & max length
    { value: [1, 2, 3], expected: false, options: { minLength: 1, maxLength: 2 } },
    { value: [1, 2, 3], expected: true, options: { minLength: 0, maxLength: 4 } },
];

describe('Array', () => {
    describe('isArray', () => {
        it.each([
            ...testData
        ])(`When function param "target" is "$value" and "options" is "$options", then function must return "$expected"`, ({ value, expected, options }) => {
            const result = isArray(value, options);

            expect(result).toBe(expected);
        });
    });
});
