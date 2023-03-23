function repeat (phrase,repet) {
    const phraseog = phrase
    for (let i = 0; i < repet-1; i++) {
        phrase = phrase + phraseog
    }
    return phrase
}

console.log(repeat('a',3))