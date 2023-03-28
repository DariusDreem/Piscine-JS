function letterSpaceNumber(string) {
    const pattern = /[a-z]\s\d(?!\d)/g;
    return string.match(pattern);
}

console.log(letterSpaceNumber('example 1, example 20'));
