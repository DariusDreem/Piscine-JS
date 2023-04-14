
function filterValues(obj, predicate) {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && predicate(obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}

function mapValues(obj, callback) {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = callback(obj[key]);
        }
    }
    return result;
}

function reduceValues(obj, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : obj[Object.keys(obj)[0]];
    const startingIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startingIndex; i < Object.keys(obj).length; i++) {
        accumulator = callback(accumulator, obj[Object.keys(obj)[i]]);
    }
    return accumulator;
}
