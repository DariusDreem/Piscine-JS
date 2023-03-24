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

    if (end < 0) {
        end = list.length - Math.abs(end)
    }

    for (let i = start; i < end; i++) {
        container += list[i];
    }
    return container;
}

console.log( slice('abcdef', 0, -2));
