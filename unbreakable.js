function split(str, splitArg) {
    let result = [];
    let resultTemp = "";
    let countToRemoveIfIsNotSplitArg = 0, i = 0;

    if (splitArg === "") {
        return justSplit(str);
    }

    for (let i = 0; i < str.length; i++) {
        if (splitArg[0] === str[i]) {
            for (let j = 0; j < splitArg.length; j++) {
//                console.log("i : ", i, ", j : ", j, " : ", splitArg.length)
                if (str[i] !== splitArg[j]) {
                    i -= countToRemoveIfIsNotSplitArg;
                } else if ((str[i] === splitArg[j]) && j === splitArg.length - 1) {
                    console.log(resultTemp)
                    if (resultTemp === "" || resultTemp === undefined) {
                    }
                    result.push(resultTemp)
                    resultTemp = ""
//                    i = i - 1;
                } else {
                    countToRemoveIfIsNotSplitArg++;
                    i++
                }
            }
            continue
        }
        resultTemp += str[i];
    }

    if (resultTemp !== 'undefined') {
//        console.log("i : ", i)
        result.push(resultTemp)
    } else {
        result.push('')
    }


    return result
}

function justSplit(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str[i])
    }
    return result;
}

function join(arr, joinArg) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
        if (i === arr.length - 1) continue
        result += joinArg;

    }
    return result
}

console.log(join(['ggg', 'ddd', 'b'], ' - '))
//console.log(split("Hello - mother -   !", " - "))
//console.log(join(['H', "E", "L", "L", "O"], " ")