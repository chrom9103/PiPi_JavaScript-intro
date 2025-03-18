
function halfAdder(A, B) {
    let sum = false
    let carry = false

    // WRITE ME!!
    sum = and(or(A, B), not(and(A, B)))
    carry = and(A, B)

    return { sum, carry }
}

let A = false
let B = false

let result = halfAdder(A, B)
console.log("Sum:", result.sum)
console.log("Carry:", result.carry)

function or(a, b) {
    let result = (a == true || b == true) ? true : false;
    return result
}

function and(a, b) {
    let result = (a == true && b == true) ? true : false;
    return result
}

function not(a) {
    return a == true ? false : true;
}