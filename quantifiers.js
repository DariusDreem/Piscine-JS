function every (arr,func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]===true)) {
            continue
        }
        return false
    }
    return true
}

function some (arr,func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]===true)) {
            return true
        }
    }
    return false
}

function none (arr,func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]===true)) {
            return false
        }
    }
    return true
}