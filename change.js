const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
}
console.log(set("num",54))

function get (lakey) {
    return sourceObject[lakey]
}

function set (lakey,newvalue) {
    sourceObject[lakey] = newvalue
    return get(lakey)
}