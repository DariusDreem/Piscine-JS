function multiply(a, b) {
    let result = 0;
    if (Math.abs(b) > Math.abs(a)) {
        [a, b] = [b, a];
    }
    for (let i = 0; i < Math.abs(b); i++) {
        result += Math.abs(a);
    }
    return Math.sign(a) === Math.sign(b) ? result : -result;
}


function divide(dividend, divisor) {
    let quotient = 0;
    if (divisor === 0) {
        return 0;
    }
    while (true) {
        quotient++;
        if (multiply(divisor, quotient) > dividend || quotient > 100000) {
            return quotient - 1;
        }
    }
}


function modulo(a, b) {
    let i = divide(a, b);
    return a - (multiply(i, b));
}
console.log(divide(123,-22))