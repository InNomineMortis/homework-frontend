'use strict';

const get = function (object, field) {
    field = field.slice(1);
    let fields = field.split('.');
    if (field === '') {
        return object
    }
    if (fields[0] in object) {
        let newObject = object;
        for (let key in fields) {
            newObject = newObject[fields[key]];
        }
        return newObject
    }
    return object.field
};
