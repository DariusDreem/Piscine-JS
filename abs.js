function isPositive (number) {
    return number > 0;
}

function abs (number) {
    if (number !== 0 && isPositive(number) === false) {
        return number*-1
    }
    else
    {
        return number
    }
}
