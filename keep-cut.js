function cutFirst(string) {
    const result = [];
    for (let i = 2; i < string.length; i++) {
        result.push(string[i]);
    }
    return result.join('');
}

function cutLast(string) {
    const result = [];
    for (let i = 0; i < string.length-2; i++) {
        result.push(string[i]);
    }
    return result.join('');
}

function cutFirstLast (string) {
    string = cutFirst(string)
    string = cutLast(string)
    return string
}

function keepFirst (string) {
    let tokeep = []
    tokeep.push(string[0])
    tokeep.push(string[1])

     return tokeep.join('');
}

function keepLast (string) {
    let tokeep = []
    tokeep.push(string[string.length-2])
    tokeep.push(string[string.length-1])

    return tokeep.join('');
}

function keepFirstLast (string) {
if (string.length < 2) {
    return keepFirst(string)
}
    return keepFirst(string) + keepLast(string)
}

console.log( keepFirstLast('af'))