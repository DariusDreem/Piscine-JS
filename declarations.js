const escapeStr = "\`\\\/\"\'"
const arr = [4,'2']
object.freeze(arr)

const obj = {
    str:"oui",
    num:34,
    bool:true,
    undef:undefined
}
object.freeze(obj)
const nested = {
    arr:[4,undefined,'2'],
     obj:{
        str:"non",
         num:98,
         bool:true
    }
}
object.freeze(nested)