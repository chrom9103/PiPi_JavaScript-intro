let n = 1024

// WRITE ME!!
let result = ""
while (n > 0) {
    result = (n % 2) + result
    n = Math.floor(n / 2)
}

console.log(result)