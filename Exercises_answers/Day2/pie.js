// WRITE ME!!
let result = 0

for (let i = 0; i < 1000000; i++) {
    result += (-1)**i / (2*i + 1)
}

result *= 4

console.log(result)