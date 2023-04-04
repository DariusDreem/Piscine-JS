function longWords (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < 5 && typeof arr[i] === "string") {
            return false
        }
    }
    return true
}

function oneLongWord (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 10 && typeof arr[i] === "string") {
            return true
        }
    }
    return false
}

function noLongWords (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 7 && typeof arr[i] === "string") {
            return false
        }
    }
    return true

}