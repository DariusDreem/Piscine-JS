function split(phrase, motif) {
    let toreturn = [];
    let element = "";
    for (let i = 0; i < phrase.length; i++) {
        if (phrase.substring(i, i + motif.length) === motif) {
            toreturn.push(element);
            element = "";
            i += motif.length - 1;
        } else {
            element += phrase[i];
        }
    }
    toreturn.push(element);
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

console.log(split('ggg - ddd - b', ' - '));
