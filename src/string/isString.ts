import { isNumber } from "../number/isNumber";

import { TIsStringOptions } from "../types/string.types";

export function isString(target: unknown, options?: TIsStringOptions): boolean {
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
