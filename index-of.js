function indexOf(arr,list,start=0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === list) {
            return i;
        }
    }
    return -1
}

function lastIndexOf(arr, val,start=0) {
    for (let i = arr.length - 1; i >= start; i--) {
        if (arr[i] === val) {
            return i;
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

console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))