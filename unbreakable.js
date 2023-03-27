function split(phrase) {
    let toreturn = [];
    for (let i = 0; i < phrase.length; i++) {
        toreturn[i] = phrase[i];
    }
    return toreturn;
}

function join(list) {
    let phrase = ""
    for (let i = 0; i < list.length; i++) {
        if (i === list.length-1) {
            phrase += list[i]
        } else {
            phrase += list[i] + ", "
        }
    }
    return phrase
}

console.log(join(["bonsoir", "ça", "va ?"]));
