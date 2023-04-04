function adder(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function sumOrMul(arr) {
    return arr.reduce((accumulator, currentValue) => {
        if (currentValue % 2 === 1) {
            return accumulator + currentValue;
        } else {
            return accumulator * currentValue;
        }
    }, 0);
}

function funcExec(functions) {
    return functions.reduce((result, func) => func(result), null);
}
