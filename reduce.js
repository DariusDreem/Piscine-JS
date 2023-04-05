function fold (arr,func,accumulator) {
    for (let i = 0; i < arr.length; i++) {
        accumulator = func(arr[i],accumulator)
    }
    return accumulator
}

function foldRight (arr,func,accumulator) {
    for (let i = arr.length-1; i >= 0; i--) {
        accumulator = func(arr[i],accumulator)
    }
    return accumulator
}

function reduce (arr,func,accumulator=0) {
    if ( arr.length <= 0) {
        throw new TypeError("Erreur : arr.length <= 0")
    }
    for (let i = 0; i < arr.length; i++) {
        accumulator = func(arr[i],accumulator)
    }
    return accumulator
}

function reduceRight (arr,func,accumulator=0) {
    if ( arr.length <= 0) {
        throw new TypeError("Erreur : arr.length <= 0")
    }
    for (let i = arr.length-1; i >= 0; i--) {
        accumulator = func(arr[i],accumulator)
    }
    return accumulator
}

/*
const adder = (a, b) => a + b

console.log(fold([1, 2, 3], adder, 2))
console.log(foldRight([1, 2, 3], adder, 2))
console.log(reduce([1, 2, 3], adder))
console.log(reduceRight([1, 2, 3], adder))*/