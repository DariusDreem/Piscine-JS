function indexOf(arr,list) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === list) {
            return i;
        }
    }
}

function lastIndexOf(arr,list) {
    let tempo = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === list) {
            tempo = i;
        }
    }
    return tempo;
}

function include(arr,list) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === list) {
            return true;
        }
    }
    return false;
}
