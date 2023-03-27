function split(phrase, motif) {
    let toreturn = [];
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] !== motif) {
            toreturn.push(phrase[i]);
        }
    }
    return toreturn;
}

function join(list) {
    let phrase = "";
    for (let i = 0; i < list.length; i++) {
        if (i === list.length - 1) {
            phrase += list[i];
        } else {
            phrase += list[i] + " ";
        }
    }
    return phrase;
}

console.log(join(split('a b c', ' '))); // Output: "a b c"
