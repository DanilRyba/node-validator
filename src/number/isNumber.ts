export function isNumber(target: unknown, options?: { min?: number, max?: number }) {
    if (typeof target !== 'number' || Number.isNaN(target)) {
        return false;
    }

    if (options) {
        const { min, max } = options;

        if (isNumber(min) && target < min) {
            return false;
        }

        if (isNumber(max) && target > max) {
            return false;
        }
    }

    return true;
}
