function triangle (motif,number) {
let ligneperligne = ""
    for (let i = 1; i < number+1; i++) {
        for (let j = 0; j < i; j++) {
            ligneperligne += motif
        }
        if (i !== number) {
            ligneperligne += "\n"
        }
    }
    return ligneperligne
}
