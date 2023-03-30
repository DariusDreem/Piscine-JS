const vowels = /[AEIOUaeiou]/g;
function vowelDots(str) {
    let newStr = '';
    let lastIndex = 0;
    let match;
    while (match = vowels.exec(str)) {
        newStr += str.slice(lastIndex, match.index + 1) + '.';
        lastIndex = match.index + 1;
    }
    newStr += str.slice(lastIndex);
    return newStr;
}

