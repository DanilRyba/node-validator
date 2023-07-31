import { isNumber } from "../number/isNumber";

export function isString(target: unknown, options?: { minLength?: number, maxLength?: number }): boolean {
    if (typeof target !== 'string') {
        return false;
    }

    if (options) {
        const { minLength, maxLength } = options;

        if (isNumber(minLength) && target.length < minLength) {
            return false;
        }

        if (isNumber(maxLength) && target.length > maxLength) {
            return false;
        }
    }

    return true;
}
