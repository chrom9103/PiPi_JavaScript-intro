let num = 2
let error = 0.0001

// WRITE ME!!
let result = num
let diff = 1
while(true){
    let new_result = result * result
    if(Math.abs(new_result - num) < error){
        break
    }

    if(new_result < num){
        result += diff
    }else{
        result -= diff
        diff /= 2
    }
}


console.log(`${num}の平方は${result}です。`)