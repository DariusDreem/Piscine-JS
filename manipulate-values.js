function filterValues(obj, callback) {
    const filtered = {};
    for (const [key, value] of Object.entries(obj)) {
        if (callback(value)) {
            filtered[key] = value;
        }
    }
    return filtered;
}

function mapValues(obj, callback) {
    const mapped = {};
    for (const [key, value] of Object.entries(obj)) {
        mapped[key] = callback(value);
    }
    return mapped;
}

function reduceValues(obj, callback, initialValue) {
    let acc = initialValue;
    for (const [key, value] of Object.entries(obj)) {
        acc = callback(acc, value);
    }
    return acc;
}
