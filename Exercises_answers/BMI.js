let weight = 60  // 体重 (kg)
let height = 170  // 身長 (cm)

let result = ""

// WRITE ME!!
let BMI = weight / (height/100)**2
if(BMI < 18.5){
    result = "やせ型"
}else if(BMI < 25){
    result = "普通"
}else{
    result = "肥満"
}

console.log(result)