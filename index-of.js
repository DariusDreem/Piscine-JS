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


function include(arr,list,start=0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === list) {
            return true;
        }
    }
    return false;
}

const t = 9
console.log(lastIndexOf([t, 0, 0, t], t, 2))