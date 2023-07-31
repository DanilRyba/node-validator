import { isIP } from "../../string";

const testData = [
    { value: null, expected: false, options: undefined },
    { value: 'string', expected: false, options: undefined },
    { value: '127.0.0.1', expected: true, options: undefined },
    { value: '2001:db8:3333:4444:5555:6666:7777:8888', expected: true, options: undefined },
    // version 4
    { value: '127.0.0.1', expected: false, options: { version: '6' } },
    { value: '127.0.0.1', expected: true, options: { version: '4' } },
    // version 6
    { value: '2001:db8:3333:4444:5555:6666:7777:8888', expected: false, options: { version: '4' } },
    { value: '2001:db8:3333:4444:5555:6666:7777:8888', expected: true, options: { version: '6' } }
];

describe('String', () => {
    describe('isIP', () => {
        it.each([
            ...testData
        ])(`When function param "target" is "$value" and "options" is "$options", then function must return "$expected"`, ({ value, expected, options }) => {
            // @ts-ignore
            const result = isIP(value, options);

            expect(result).toBe(expected);
        });
    });
});
