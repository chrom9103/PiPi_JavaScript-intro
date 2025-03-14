let cnt = 0
let n = 1000
for(let i = 0; i < n; i++){
    if(isWin()){
        cnt++
    }
}
console.log("確率："+cnt/n)

function isWin(){
    let numbers = [];
    while (numbers.length < 3) {
        let num = Math.floor(Math.random() * 100) + 1;
        if (isIncluded(num, numbers) == false) {
            numbers.push(num);
            if(num <= 10){
                return true;
            }
        }
    }
    return false;
}

function isIncluded(num, numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (num == numbers[i]) {
            return true;
        }
    }
    return false;
}