function first (liste) {
    return liste[0]
}

function last (liste) {
    return liste[liste.length-1]
}

function kiss (liste) {
    liste2 = liste[liste.length-1] + liste[0]
    return liste2
}