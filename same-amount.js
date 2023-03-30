function sameAmount(str, patern1, patern2) {
    let conteur1 = []
    let conteur2 = []
        conteur1 = (str.match(new RegExp(patern1,'g')))
        conteur2 = (str.match(new RegExp(patern2,'g')))
    if ((conteur1 === null && conteur2 !== null) || (conteur1 !== null && conteur2 === null)){
        return false
    }
    if (conteur1.length === conteur2.length)
    {
        return true
    }
}

