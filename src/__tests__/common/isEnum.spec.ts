import { isEnum } from "../../common";

const testObject = {
    ONE: 'test1',
    TWO: 'test2'
};

enum testEnum {
    ONE = 1,
    TWO = 2
}

const testData = [
    // Invalid values
    { value: null, object: testEnum, expected: false },
    { value: undefined, object: testObject, expected: false },
    { value: NaN, object: testEnum, expected: false },
    { value: [], object: testObject, expected: false },
    { value: {}, object: testEnum, expected: false },
    // Invalid enum
    { value: 'test', object: undefined, expected: false },
    { value: 1, object: null, expected: false },
    { value: NaN, object: 'str', expected: false },
    { value: null, object: [], expected: false },
    { value: undefined, object: NaN, expected: false },
    // Invalid(empty) enum
    { value: undefined, object: {}, expected: false },
    { value: null, object: {}, expected: false },
    { value: 1, object: {}, expected: false },
    { value: 'test', object: {}, expected: false },
    { value: NaN, object: {}, expected: false },
    // Not in enum
    { value: 'test', object: testEnum, expected: false },
    { value: 'test', object: testObject, expected: false },
    { value: 3, object: testObject, expected: false },
    { value: 3, object: testEnum, expected: false },
    // Valid
    { value: 'test1', object: testObject, expected: true },
    { value: 'test2', object: testObject, expected: true },
    { value: 1, object: testEnum, expected: true },
    { value: 2, object: testEnum, expected: true },
];

describe('Common', () => {
    describe('isEnum', () => {
        it.each([
            ...testData
        ])(`When function param "target" is "$value" and "object" is "$object", then function must return "$expected"`, ({ value, object, expected }) => {
            const result = isEnum(value, object);

            expect(result).toBe(expected);
        });
    });
});
