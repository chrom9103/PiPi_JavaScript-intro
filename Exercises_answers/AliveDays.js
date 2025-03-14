function isLeapYear(year) {
    //WRITE ME!! (閏年判定)
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

let birthDate = [2005,9,27]

let date = new Date()
let nowDate = [date.getFullYear(),date.getMonth()+1,date.getDate()]

//WRITE ME!!
let days = 0

// 年単位の日数を加算
for(let i = birthDate[0]; i < nowDate[0]; i++){
    if(isLeapYear(i)){
        days += 366
    }else{
        days += 365
    }
}

// 誕生日の年の日数を減算
let monthDays;
if (isLeapYear(birthDate[0])) {
    monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
} else {
    monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
for(let i = 0; i < birthDate[1]-1; i++){
    days -= monthDays[i]
}
days -= birthDate[2]

// 今年の日数を加算
if (isLeapYear(birthDate[0])) {
    monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
} else {
    monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
for(let i = 0; i < nowDate[1]-1; i++){
    days += monthDays[i]
}
days += nowDate[2]

console.log(days)