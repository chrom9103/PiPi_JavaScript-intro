let list = ["ずん", "どこ"]
let stack = []

while (true) {
    let random = Math.floor(Math.random() * 2)
    console.log(list[random])
    if (random == 0) {
        stack.push(list[random])
    } else {
        if(stack.length == 4){
            break
        }
        stack = []
    }
}
console.log("きよし！！")