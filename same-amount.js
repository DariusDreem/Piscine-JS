function sameAmount(str, patern1, patern2) {
    let conteur1 = []
    let conteur2 = []
        conteur1 = (str.match(patern1,'g'))
        conteur2 = (str.match(patern2,'g'))
    return conteur1=== conteur2
}

