function RNA(str) {
    let rna = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            rna += 'U';
        } else if (str[i] === 'T') {
            rna += 'A';
        } else if (str[i] === 'C') {
            rna += 'G';
        } else if (str[i] === 'G') {
            rna += 'C';
        }
    }
    return rna;
}

function DNA(str) {
    let dna = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            dna += 'T';
        } else if (str[i] === 'U') {
            dna += 'A';
        } else if (str[i] === 'C') {
            dna += 'G';
        } else if (str[i] === 'G') {
            dna += 'C';
        }
    }
    return dna;
}
