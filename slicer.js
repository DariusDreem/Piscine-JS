function slice(list, start, end = list.length) {
    let container = undefined
    if (start < 0) {
        Math.abs(start)
        for (let i = end - start; i < end; i++) {
            container += list[i]
        }
        return container
    } else {
        for (let i = start; i < end; i++) {
            container += list[i]
        }
        return container
    }
}