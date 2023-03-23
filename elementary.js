function multiply (a,b) {
    let result = 0
    for (let i = 0; i < b; i++) {
        result += a
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

console.log(modulo(23,5))