function mult2(x) {
    return function (y) {
        return x * y;
    };
}

const mulTwo = mult2(2);
console.log(mulTwo(3));

function add3(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
}

const addOne = add3(2)
const adTwo = addOne(2)
console.log(adTwo(3))

function sub4(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a - b - c - d;
            };
        };
    };
}

    const subOne = sub4(2)
    const subTwo = subOne(2)
    const subThree = subTwo(2)
    console.log(subThree(3))
