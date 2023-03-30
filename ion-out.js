function ionOut(string) {
    let pattern = /\b\w*tion\w*\b/g;
    let toreturn = [];
    let matches = string.match(pattern);
    for (let i = 0; i < matches.length; i++) {
        matches[i] = matches[i].slice(0, -3);
    }
    return matches;
}

console.log(ionOut("I'm on a mission to find a solution for this situation"));
