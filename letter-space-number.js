function letterSpaceNumber(string) {
    const pattern = /[a-z]\s\d(?!\d)/g;
    const matches = string.match(pattern);
    return matches || [];
}

console.log(letterSpaceNumber('I like 7up.')); // Devrait afficher ["e 7"]