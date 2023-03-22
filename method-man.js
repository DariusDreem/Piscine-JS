function words (phrase) {
    return phrase.split(" ")
}

function sentence (phrase1,phrase2) {
    phrase1 = phrase1 + phrase2
return phrase1
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

console.log(words('a b c'))