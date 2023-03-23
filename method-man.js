function words (phrase) {
    return phrase.split(" ")
}

function sentence(words) {
    return words.join(" ");
}

function yell (phrase) {
    return phrase.toUpperCase()
}

function whisper (phrase) {
    return "*"+phrase.toLowerCase()+"*"
}

function capitalize (phrase) {
    return phrase.charAt(0).toUpperCase() + phrase.slice(1).toLowerCase()
}
