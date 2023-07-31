import { isString } from "../../string";

const testData = [
    { value: undefined, expected: false, options: undefined },
    { value: null, expected: false, options: undefined },
    { value: [], expected: false, options: undefined },
    { value: {}, expected: false, options: undefined },
    { value: 1, expected: false, options: undefined },
    { value: () => {}, expected: false, options: undefined },
    { value: NaN, expected: false, options: undefined },
    { value: 'string', expected: true, options: undefined },
    // min length
    { value: 'str', expected: false, options: { minLength: 4 } },
    { value: 'string', expected: true, options: { minLength: 4 } },
    // max length
    { value: 'str', expected: false, options: { maxLength: 2 } },
    { value: 'string', expected: true, options: { maxLength: 6 } },
    // combined min & max length
    { value: 'str', expected: false, options: { minLength: 1, maxLength: 2 } },
    { value: 'string', expected: true, options: { minLength: 3, maxLength: 7 } },
];

describe('String', () => {
    describe('isString', () => {
        it.each([
            ...testData
        ])(`When function param "target" is "$value" and "options" is "$options", then function must return "$expected"`, ({ value, expected, options }) => {
            const result = isString(value, options);

            expect(result).toBe(expected);
        });
    });
});
