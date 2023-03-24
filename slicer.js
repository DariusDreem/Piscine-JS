function slice(list, start, end = list.length) {
    let container;
    let place = 0;
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

        container[place] = list[i];
        place++
    }
    return container;
}

console.log(slice([1, 2, 3, 4, 5, 6], 2));
