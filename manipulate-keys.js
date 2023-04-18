function filterKeys(obj, filterFunc) {
    const filtered = {}
    for (const key in obj) {
        if (filterFunc(key)) {
            filtered[key] = obj[key]
        }
    }
    return filtered
}

function mapKeys(obj, mapFunc) {
    const mapped = {}
    for (const key in obj) {
        const newKey = mapFunc(key)
        mapped[newKey] = obj[key]
    }
    return mapped
}


function reduceKeys(obj, reduceFunc, initialValue) {
    let accumulator = initialValue
    for (const key in obj) {
        accumulator = reduceFunc(accumulator, obj[key])
    }
    return accumulator
}