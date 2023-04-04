function map(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

function flatMap(arr, callback) {
    return arr.reduce((acc, currentVal, index, array) => {
        return acc.concat(callback(currentVal, index, array));
    }, []).flat();
}
