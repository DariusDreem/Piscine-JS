function pick(obj, keys) {
    if (typeof keys === 'string') {
        keys = [keys];
    }
    const picked = {};
    for (const key of keys) {
        if (obj.hasOwnProperty(key)) {
            picked[key] = obj[key];
        }
    }
    return picked;
}


function omit(obj, keys) {
    const omitted = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && !keys.includes(key)) {
            omitted[key] = obj[key];
        }
    }
    return omitted;
}
