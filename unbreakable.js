function split(str, separator) {
    const arr = [];
    let startIndex = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.substring(i, i + separator.length) === separator) {
            arr.push(str.substring(startIndex, i));
            startIndex = i + separator.length;
        }
    }
    arr.push(str.substring(startIndex));
    return arr;
}

function join(arr, separator) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            str += separator;
        }
        str += arr[i];
    }
    return str;
}

console.log(join(['ggg','ddd', 'b'], ' - '));
