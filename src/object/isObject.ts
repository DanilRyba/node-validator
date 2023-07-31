export function isObject(target: unknown, options?: { nonEmpty?: boolean }): boolean {
    if (target === null || typeof target !== 'object' || Array.isArray(target)) {
        return false;
    }

    if (options?.nonEmpty && Object.keys(target).length < 1) {
        return false;
    }

    return true;
}
