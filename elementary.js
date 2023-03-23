function multiply (a,b) {
    let result = 0
    let negative = false
    if (b < 0){
        b = Math.abs(b)
        negative = true
    }
    for (let i = 0; i < b; i++) {
        result += a
    }
    if (negative === true) {
        result= result - result - result
    }
    return result
}

function divide (a,b) {
    let i = 0
    let result = 0
    while (result === 0) {
        i++
        if (multiply(b,i) > a){
            return i-1
        }
    }
}

function modulo (a,b) {
    let i = divide(a,b)
return a-(multiply(i,b))
}
console.log(multiply(123,-22))