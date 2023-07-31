import { isObject } from "../../object";

const testData = [
    { value: undefined, expected: false, options: undefined },
    { value: null, expected: false, options: undefined },
    { value: [], expected: false, options: undefined },
    { value: 'string', expected: false, options: undefined },
    { value: 1, expected: false, options: undefined },
    { value: () => {}, expected: false, options: undefined },
    { value: NaN, expected: false, options: undefined },
    { value: {}, expected: true, options: undefined },
    // non empty
    { value: {}, expected: false, options: { nonEmpty: true } },
    { value: { a: 1 }, expected: true, options: { nonEmpty: true } },
];

describe('Object', () => {
    describe('isObject', () => {
        it.each([
            ...testData
        ])(`When function param "target" is "$value" and "options" is "$options", then function must return "$expected"`, ({ value, expected, options }) => {
            const result = isObject(value, options);

            expect(result).toBe(expected);
        });
    });
});
