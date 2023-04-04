function map(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

function flatMap(arr, callback) {
    return arr.reduce((acc, val, index) => {
        const result = callback(val);
        if (result !== undefined) {
            return acc.concat(`${index}: ${result}`);
        }
        return acc.concat(result);
    }, []);
}



