function map(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

function flatMap(arr, fn) {
    return arr.reduce((acc, val, index) => {
        return acc.concat(fn(val).map(item => `${index}: ${item === undefined ? "undefined" : item}`));
    }, []);
}


