let year = 2000

let era = ""
let eraYear = 0

// WRITE ME!!
if(year >= 2019){
    era = "令和"
    eraYear = year - 2018
}else if(year >= 1989){
    era = "平成"
    eraYear = year - 1988
}else if(year >= 1926){
    era = "昭和"
    eraYear = year - 1925
}else{
    console.log("昭和以前です。")
    return
}

console.log(year + "年は" + era + eraYear + "年です。")