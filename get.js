function get(src, path) {
    const keys = path.split('.');
    let value = src;

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        value = value[key];
    }

    return value;
}
