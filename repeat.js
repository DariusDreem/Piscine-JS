function repeat (phrase,repet) {
    const phraseog = phrase
    if (repet === 0){
        return ''
    }
    for (let i = 0; i < repet-1; i++) {
        phrase = phrase + phraseog
    }
    return phrase
}
