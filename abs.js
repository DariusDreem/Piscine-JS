function isPositive (number) {
    return number > 0;
}

function abs (number) {
    if (isPositive(number) == false) {
        return number*-1
    }
    else
    {
        return number
    }
}
