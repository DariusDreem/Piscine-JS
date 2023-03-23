function sign (number) {
    if (number > 0) {
        return 1
    }
    else if (number < 0) {
        return -1
    }
    else
    {
        return 0
    }
}

function sameSign (frst,scd) {
    return sign(frst) === sign(scd);
}
