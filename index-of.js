function indexOf(list, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (list === arr[i]) {
            return i;
        }
    }
}

function lastIndexOf(list, arr) {
    let tempo = -1;
    for (let i = 0; i < arr.length; i++) {
        if (list === arr[i]) {
            tempo = i;
        }
    }
    return tempo;
}

function include(list, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (list === arr[i]) {
            return true;
        }
    }
    return false;
}

/*console.log(indexOf(2, [1, 2, 3, 4, 5, 4, 3, 2, 1]));
console.log(lastIndexOf(2, [1, 2, 3, 4, 5, 4, 3, 2, 1]));
console.log(include(2, [1, 2, 3, 4, 5, 4, 3, 2, 1]));
*/