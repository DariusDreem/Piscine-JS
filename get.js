function get(src, path) {
    const keys = path.split('.');
    let result = src;
    for (const key of keys) {
        if (result === undefined) {
            return undefined;
        }
        result = result[key];
    }
    return result;
}
