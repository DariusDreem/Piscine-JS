//import {people} from './get-them-all.data.js'

export function getBonannoPisano(arr, el = undefined, jsp = undefined) {
    const bonannoPisano = document.getElementById("BonannoPisano");
    const another = Array.from(document.querySelectorAll('a:not(#BonannoPisano)'));

    console.log("B : ", bonannoPisano, "| a : ", another)
    return [bonannoPisano, another];
}

export const getArchitects = () => {
    const architects = Array.from(document.querySelectorAll('a'));
    const nonArchitects = Array.from(document.querySelectorAll('span'));
    return [architects, nonArchitects];
};

export function getActive(arr, el = undefined, jsp = undefined) {
    const classic = Array.from(document.getElementsByClassName('active'));
    const another = Array.from(document.querySelectorAll('a:not(.active)'));
    return [classic, another];
}

export function getClassical(arr, el = undefined, jsp = undefined) {
    const classic = Array.from(document.getElementsByClassName('classical'));
    const another = Array.from(document.querySelectorAll('a:not(.classical)'));
    console.log("B : ", classic, "| a : ", another)

    return [classic, another];
}