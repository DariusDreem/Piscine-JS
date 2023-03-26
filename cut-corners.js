function round(arrondissont) {
    let integerPart = ~~arrondissont;
    let decimalPart = arrondissont - integerPart;
    let rounded = integerPart;
    if (decimalPart !== 0) {
        let decimalAbs = decimalPart < 0 ? -decimalPart : decimalPart;
        let decimalRounded = 1 - decimalAbs;
        if (decimalRounded < decimalAbs) {
            rounded += integerPart < 0 ? -1 : 1;
        }
    }
    return rounded;
}



function ceil (suparrond) {
    if (suparrond >= 0){
    return ~~((suparrond) / 1)+1
}
    else
    {
        return ~~((suparrond) / 1)
    }
}

function floor (suparrond) {
    if (suparrond >= 0){
        return ~~((suparrond) / 1)
    }
    else
    {
        return ~~((suparrond) / 1) -1
    }
}

function trunc (arround) {
    return ~~((arround) / 1)
}
console.log( trunc(7.46) )
