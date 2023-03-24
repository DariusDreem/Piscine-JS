function slice(list, start, end = list.length) {
    let container;
    if (typeof list === "string") {
        container = "";
    } else {
        container = [];
    }
    if (start < 0) {
        start = list.length + start;
    }
    for (let i = start; i < end; i++) {
        container += list[i];
    }
    return container;
}

console.log(slice("abcdef", -2)); // "ef"
