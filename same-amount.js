function sameAmount(str, patern1, patern2) {
    let conteur1 = 0
    let conteur2 = 0
    for (let i = 0; i < str.length; i++) {
        if (patern1.match(str[i])) {
            conteur1++
        }
        if (patern2.match(str[i])) {
            conteur1++
        }
    }
    return conteur1 === conteur2;
}

