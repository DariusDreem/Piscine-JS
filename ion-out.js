function ionOut(string) {
    let pattern = /\b\w*tion\w*\b/g;
    let toreturn = [];
    let matches = string.match(pattern);
    if (matches !== null) {
        for (let i = 0; i < matches.length; i++) {
            matches[i] = matches[i].slice(0, -3);
        }
    }
    return matches || [];
}

