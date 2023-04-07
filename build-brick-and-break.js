export const build = (num) => {
    let count = 0;
    let base = 1;
    const body = document.querySelector("body");
    var timerInt = setInterval(() => {
        const newBrick = document.createElement("div");
        newBrick.id = "brick-" + (count + 1);
        newBrick.innerHTML = count + 1;
        if (base == count) {
            newBrick.dataset.foundation = true;
            base = count + 3;
        }
        body.append(newBrick);

        count++;
        if (count == num) {
            clearInterval(timerInt);
        }
    }, 100);
};

export const repair = (...ids) => {
    ids.forEach((val) => {
        let brick = document.querySelector("div#" + val);
        if (brick) {
            if (brick.hasAttribute("data-foundation")) {
                brick.dataset.repaired = "in progress";
            } else {
                brick.dataset.repaired = true;
            }
        }
    });
};

export const destroy = () => {
    let bricks = document.querySelectorAll("div");
    let arr = [];
    for (let each of bricks) {
        arr.push(each);
    }
    bricks = arr.slice(-1)[0];
    if (bricks) {
        bricks.remove();
    }
};
