// multiply function
function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
        result += Math.abs(a);
    }
    return Math.sign(a) === Math.sign(b) ? result : -result;
}

// divide function
function divide(dividend, divisor) {
    let quotient = 0;
    if (divisor === 0) {
        return NaN;
    }
    while (Math.abs(dividend) >= Math.abs(divisor)) {
        dividend = dividend - Math.abs(divisor);
        quotient++;
    }
    return Math.sign(quotient) === Math.sign(divisor) ? quotient : -quotient;
}

// modulo function
function modulo(dividend, divisor) {
    if (divisor === 0) {
        return NaN;
    }
    while (Math.abs(dividend) >= Math.abs(divisor)) {
        dividend = dividend - Math.abs(divisor);
    }
    return Math.sign(dividend) === Math.sign(divisor) ? dividend : -dividend;
}
