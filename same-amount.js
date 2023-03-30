function sameAmount(str, patern1, patern2) {
    let conteur1 = []
    let conteur2 = []
        conteur1 = (str.match(new RegExp(patern1,'g')))
        conteur2 = (str.match(new RegExp(patern2,'g')))
    if ((conteur1 === null && conteur2 !== null) || (conteur1 !== null && conteur2 === null)){
        return false
    }
    if (conteur1.length === conteur2.length)
    {
        return true
    }
}

const data = 'qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqwijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd'


console.log(sameAmount('hello how are you', /l/, /e/))
console.log(sameAmount('hello how are you', /h/, /e/))
console.log(sameAmount('hello how are you', /he/, /ho/))
console.log(sameAmount(data, /i/, /p/))
console.log(!sameAmount(data, /h/, /w/))
console.log(sameAmount(data, /qqqq /, /qqqqqqq/))
console.log(!sameAmount(data, /q /, /qqqqqqq/))
console.log(sameAmount(data, /fs[^q]/, /q /))
console.log(sameAmount(data, /^[qs]/, /^[gq]/))
console.log(sameAmount(data, /j/, /w/))
console.log(!sameAmount(data, /j/, / /))
console.log(sameAmount(data, /fs./, /jn./))