function get (lakey) {
    return sourceObject[lakey]
}

function set (lakey,newvalue) {
    sourceObject[lakey] = newvalue
    return get(lakey)
}

