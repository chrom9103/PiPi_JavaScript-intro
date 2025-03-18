for(i = 1; i < 10000; i++){
    let num = i
    while(num != 1){
        if(num % 2 == 0){
            num /= 2
        }else{
            num = num * 3 + 1
        }
    }
}
console.log("Task complete!")