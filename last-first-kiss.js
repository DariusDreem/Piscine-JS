function first (liste) {
    return liste[0]
}

function last (liste) {
    return liste[liste.length-1]
}

function kiss (liste) {
    const liste2 = []
    liste2[0] = last(liste)
    liste2[1] = first(liste)
    return liste2
}