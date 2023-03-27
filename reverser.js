function reverse(reversed) {
    let toreturn;
    let increment = 0;
    if (typeof reversed == "string") {
        toreturn = "";
        for (let i = reversed.length-1; i > 0 -1; i--) {
            toreturn += (reversed[i]);
        }
    } else {
        toreturn = [];
        for (let i = reversed.length-1; i > 0 -1; i--) {
            toreturn[increment] = (reversed[i]);
            increment++
        }
    }

    return toreturn;
}

