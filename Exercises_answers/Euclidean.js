let A = 1071
let B = 1029
let r = 0

while(B != 0){
    r = A % B
    A = B
    B = r
}

console.log(A)