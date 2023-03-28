function letterSpaceNumber(string) {
    const pattern = /[a-zA-Z]\s\d(?![a-zA-Z\d])/g;
    const matches = string.match(pattern);
    return matches || [];
}

console.log(letterSpaceNumber('I like 7up.')); // Devrait afficher ["e 7"]
