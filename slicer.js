function slice(list, start, end = list.length) {
    let container;
    let place = 0;
    if (start < 0) {
        start = list.length + start;
    }

    if (end < 0) {
        end = list.length - Math.abs(end)
    }

    if (typeof list === "string") {
        container = "";
        for (let i = start; i < end; i++) {

            container += list[i];
        }
    } else {
        container = [];
        for (let i = start; i < end; i++) {

            container[place] = list[i];
            place++
        }
    }
    return container;
}

console.log(slice('abcdef', 2))