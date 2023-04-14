function reduceValue(array, func) {
    if (array.length < 1) {
        throw new Error("Array must have at least one element");
    }
    let accumulator = array[0];
    for (let i = 1; i < array.length; i++) {
        accumulator = func(accumulator, array[i]);
    }
    return accumulator;
}

function filterValue(array, callback) {
    const filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}

function mapValue(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}