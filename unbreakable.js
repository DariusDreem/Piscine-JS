function split(str, separator) {
    const arr = [];
    let startIndex = 0;
    let separatorIndex = str.indexOf(separator, startIndex);
    while (separatorIndex !== -1) {
        arr.push(str.substring(startIndex, separatorIndex));
        startIndex = separatorIndex + separator.length;
        separatorIndex = str.indexOf(separator, startIndex);
    }
    arr.push(str.substring(startIndex));
    return arr;
}

function join(arr, separator) {
    return arr.reduce((acc, curr, i) => {
        if (i === 0) {
            return curr;
        } else {
            return acc + separator + curr;
        }
    }, '');
}
