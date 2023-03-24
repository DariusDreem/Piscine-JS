function indexOf(arr,list,start=0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === list) {
            return i;
        }
    }
    return -1
}

function lastIndexOf(arr,list,start=0) {
    let tempo = 0;
    for (let i = arr.length; i < start ; i--) {
        tempo++
        if (arr[i] === list) {
            return tempo;
        }
    }
    return -1;
}

function include(arr,list,start=0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === list) {
            return true;
        }
    }
    return false;
}