function indexOf(arr,list,start) {
    if (start === undefined) {
        start = 0
    }
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === list) {
            return i;
        }
    }
}

function lastIndexOf(arr,list,start) {
    let tempo = -1;
    if (start === undefined) {
        start = 0
    }
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === list) {
            tempo = i;
        }
    }
    return tempo;
}

function include(arr,list,start) {
    if (start === undefined) {
        start = 0
    }
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === list) {
            return true;
        }
    }
    return false;
}
