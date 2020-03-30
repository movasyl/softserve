function raiseToDegree(a, b) {
    return Math.pow(Math.trunc(a), Math.trunc(b));
}

let a = prompt('число');
let b = prompt('степінь');

raiseToDegree(a, b);