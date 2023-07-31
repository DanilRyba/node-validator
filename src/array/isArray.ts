import { isNumber } from "../number/isNumber";

export function isArray(target: unknown, options?: { minLength?: number, maxLength?: number }): boolean {
    if (!Array.isArray(target)) {
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
