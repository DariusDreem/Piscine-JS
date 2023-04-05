function filter(array, callback) {
    const filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}

function reject(array, callback) {
    const rejectedArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            rejectedArray.push(array[i]);
        }
    }

    return rejectedArray;
}

function partition(array, callback) {
    const partitionedArray = [[], []];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            partitionedArray[0].push(array[i]);
        } else {
            partitionedArray[1].push(array[i]);
        }
    }

    return partitionedArray;
}