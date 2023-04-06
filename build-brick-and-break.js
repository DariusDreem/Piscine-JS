function sleep(i, nb) {
    setTimeout(() => {
        let brick = document.createElement('div');
        brick.id = `brick-${i}`
        if (i % 3 === 2) {
            brick.setAttribute("foundation", true)
        }
        document.body.appendChild(brick)
        if (i != nb) sleep(i + 1, nb)

    }, 100)
}

export function build(nbBricks) {
    sleep(1, nbBricks)
}

export function repair(id) {
    const brick = document.getElementById(id)
    console.log(brick, '  ', id)
    let nbId = id.slice(6, id.length)
    console.log(nbId)
    if (nbId % 3 === 2) brick.setAttribute("repaired", "in progress")
    else brick.setAttribute("repaired", true)
}

export function destroy() {
    console.log(document.querySelectorAll('div'))
    let divs = document.querySelectorAll('div')
    let lastDiv = divs[divs.length - 1];
    lastDiv.remove()
}