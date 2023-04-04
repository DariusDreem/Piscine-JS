function adder(arr,onsejame=0) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, onsejame);
}
console.log(adder([9, 24, 7, 11, 3], 10), 64)

function sumOrMul(arr,onsejame=0) {
    return arr.reduce((accumulator, currentValue) => {
        if (currentValue % 2 === 1) {
            return accumulator + currentValue;
        } else {
            return accumulator * currentValue;
        }
    }, onsejame);
}

function funcExec(functions) {
    return functions.reduce((result, func) => func(result), null);
}
