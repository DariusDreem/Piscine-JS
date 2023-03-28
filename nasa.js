function nasa (number) {
    let toreturn = ""
    let divisable = false
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0) {
            toreturn += "NA"
            divisable = true
        }
        if (i % 5 === 0) {
            toreturn += "SA"
            divisable = true
        }
        if (divisable === false) {
            toreturn += i
        }
        if (i === number)
        {
            break
        }
        else{
        toreturn += " "
        divisable = false
    }
    }
    return toreturn
}
console.log(nasa(15))