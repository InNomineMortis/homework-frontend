'use strict';

const get = (object, field) => {
    if (typeof object !== "object" || object === null  || typeof field !== "string")
        return void (0);
    field = field.slice(1);
    let fields = field.split('.');
    if (field === '') {
        return object
    }
    if (fields[0] in object) {
        let newObject = object;
        // fields.forEach(value => {
        //     newObject = newObject[value];
        // });
        return fields.reduce((previousValue, currentValue) => {
            return previousValue[currentValue];
        }, newObject);
    }
    return void (0);
};
