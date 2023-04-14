function fusion(obj1, obj2) {
    const result = {};

    // Loop through all the keys in obj1 and obj2
    for (const key of Object.keys(obj1).concat(Object.keys(obj2))) {
        const val1 = obj1[key];
        const val2 = obj2[key];

        if (typeof val1 === "undefined") {
            // If the key only exists in obj2, add it to the result
            result[key] = val2;
        } else if (typeof val2 === "undefined") {
            // If the key only exists in obj1, add it to the result
            result[key] = val1;
        } else if (Array.isArray(val1) && Array.isArray(val2)) {
            // If both values are arrays, concatenate them
            result[key] = val1.concat(val2);
        } else if (typeof val1 === "string" && typeof val2 === "string") {
            // If both values are strings, concatenate them with a space
            result[key] = val1 + " " + val2;
        } else if (typeof val1 === "number" && typeof val2 === "number") {
            // If both values are numbers, add them
            result[key] = val1 + val2;
        } else if (typeof val1 === "object" && typeof val2 === "object") {
            // If both values are objects, join them recursively
            result[key] = fusion(val1, val2);
        } else {
            // Otherwise, use the value from obj2
            result[key] = val2;
        }
    }

    return result;
}
