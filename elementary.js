function multiply(a,b) {
    let result = 0
    let neg = false
    if (a < 0) {
        a = Math.abs(a)
        neg =true
    }
    if (b < 0) {
        b = Math.abs(b)
        neg = (neg)?neg = false:neg=true;
    }
    for (let i = 0; i < b; i++) {
        result += a
    }
    if (neg) {
        let resultstr = "-" + result
        result = Number(resultstr)
    }
    return result;
}
function divide(a,b) {
    let result = 0;
    let neg = false;
    if (a < 0) {
        a = Math.abs(a)
        neg =true
    }
    if (b < 0) {
        b = Math.abs(b)
        neg = (neg)?neg = false:neg=true;
    }
    for (let i = b; i <= a; result++) {
        i += b;
    }
    if (neg) {
        let resultstr = "-" + result
        result = Number(resultstr)
    }
    return result
}
function modulo(a,b) {
    let i = 0;
    let result = a;
    let neg = false;
    if (a < 0) {
        a = Math.abs(a)
        result = a;
        console.log(a)
        neg =true
    }

    if (b < 0) {
        b = Math.abs(b)
    }
    for (i = 0; a >= 0 ; a-=b,i++) {
        console.log(a)
    }
    i--;
    result = result - multiply(b,i)
    if (neg) {
        let resultstr = "-" + result
        console.log(resultstr)
        result = Number(resultstr)
    }
    return result
}

console.log(modulo(-123, 22));
// console.log(123%22);