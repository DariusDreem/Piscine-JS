function pyramid(motif, number) {
    let pyrami = "";
    let range = 1;
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number - i - 1; j++) {
            pyrami += " ";
        }
        for (let j = 0; j < range; j++) {
            pyrami += motif;
        }
        if (i !== number-1) {
            pyrami += "\n";
            range += 2;
        }
    }
    return pyrami;
}

console.log(pyramid("#", 8));
