function sameAmount(str, patern1, patern2) {
    let conteur1 = 0
    let conteur2 = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(patern1)) {
            conteur1++
        }
        if (str[i].match(patern2)) {
            conteur2++
        }
    }
    return conteur1 === conteur2;
}

console.log(sameAmount('hello how are you', /l/, /e/),)