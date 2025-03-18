let A = [1,5,2,4,8,3,7,8,3,1,6,8,2,4,3,7,4,2,4,3]
let N = A.length

let swapped

for (let i = 0; i < N - 1; i++) {
    swapped = false
    for (let j = 0; j < N - 1 - i; j++) {
        if (A[j] < A[j + 1]) {
            [A[j], A[j + 1]] = [A[j + 1], A[j]];
            swapped = true;
        }
    }
    if (swapped == false){
        break
    }
}

console.log(A)
