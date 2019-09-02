'use strict';

const get = (object, field) => {
    if (typeof object !== "object") return undefined;
    if (object === null) return undefined;
    if (typeof field !== "string") return undefined;
    field = field.slice(1);
    let fields = field.split('.');
    if (field === '') {
        return object
    }
    if (fields[0] in object) {
        let newObject = object;
        fields.forEach(value => {
            newObject = newObject[value];
        });
        return newObject
    }
    return undefined
};
