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
    if (sign(frst) === sign(scd)) {
        return true
    }
    else
    {
        return false
    }
}
