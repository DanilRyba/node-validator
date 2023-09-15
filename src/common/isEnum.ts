import { isObject } from "../object";

export function isEnum(target: unknown, object: Object): boolean {
    if (!isObject(object)) {
        return false;
    }

    const enumValues = Object.values(object);
    return enumValues.includes(target);
}
