function repeat (phrase,repet) {
    const phraseog = phrase
    for (let i = 0; i < repet; i++) {
        phrase = phrase + phraseog
    }
    return phrase
}

console.log(repeat('ui',3))