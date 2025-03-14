let year = 2000

// WRITE ME!!
let result = ""

if(year % 400 == 0){
    result = "閏年"
}
else if(year % 100 == 0){
    result = "平年"
}
else if(year % 4 == 0){
    result = "閏年"
}
else{
    result = "平年"
}

console.log(result)