function adder(arr,onsejame=0) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, onsejame);
}

function sumOrMul(arr,onsejame=0) {
    return arr.reduce((accumulator, currentValue) => {
        if (currentValue % 2 === 1) {
            return accumulator + currentValue;
        } else {
            return accumulator * currentValue;
        }
    }, onsejame);
}

function funcExec(functions, initialValue) {
    return functions.reduce((result, func) => func(result), initialValue);
}
const fArr1 = [
    (x) => x + 2,
    (x) => x ** 2,
    (x) => x - 7,
    (x) => `result: [${x}]`,
]
console.log(funcExec(fArr1, 10), `result: [137]`)
