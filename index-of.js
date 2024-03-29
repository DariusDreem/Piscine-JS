function indexOf(arr,list,start=0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === list) {
            return i;
        }
    }
    return -1
}

function lastIndexOf(arr, nb) {
    if(arr[0] === nb) {
        return 0;
    }

    let index = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === nb) {
            index = i;
        }
    }

    if(index > 0) {
        return index;
    }

    return -1
}


function includes(arr,list,start=0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === list) {
            return true;
        }
    }
    return false;
}