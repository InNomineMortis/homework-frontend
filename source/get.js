'use strict';

const get = (object, field) => {
    if ((typeof object !== "object") || (object === null) || (typeof field !== "string")) {
        return void (0);
    }
    const fields = field.slice(1).split('.');
    if (field === '.') {
        return object;
    }
    if (fields[0] in object) {
        return fields.reduce((previousValue, currentValue) => previousValue[currentValue], object);
    }
    return void (0);
};
