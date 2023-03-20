const escapeStr = "\`\\\/\"\'"
const arr = [4,'2']
Object.freeze(arr)

const obj = {
    str:"oui",
    num:34,
    bool:true,
    undef:undefined
}
Object.freeze(obj)
const nested = {
    arr:[4,undefined,'2'],
     obj:{
        str:"non",
         num:98,
         bool:true
    }
}
Object.freeze(nested)