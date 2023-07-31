import { isEmail } from "../../string";

const testData = [
    { value: null, expected: false },
    { value: 'string', expected: false },
    { value: '@example.com', expected: false },
    { value: 'example@', expected: false },
    { value: 'exa@mple', expected: false },
    { value: 'test@example.com', expected: true },
    { value: 'test@example.edu.com', expected: true },
];

describe('String', () => {
    describe('isEmail', () => {
        it.each([
            ...testData
        ])(`When function param "target" is "$value", then function must return "$expected"`, ({ value, expected }) => {
            const result = isEmail(value);

            expect(result).toBe(expected);
        });
    });
});
