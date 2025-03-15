let A = [1,5,2,4,8,3,7,8,3,1,6,8,2,4,3,7,4,2,4,3]
let N = A.length

//WRITE ME!!
function minProductionDays(N, A) {
    // 製作日数を降順にソート（大きいものから順に処理する）
    sort(A)

    let workers = [0, 0, 0];

    // 各工芸品を作業者に割り当てる
    for (let i = 0; i < N; i++) {
        // 作業時間が最も少ない作業者に割り当てる
        workers[idxOfMin(workers)] += A[i]
    }

    console.log("各作業者の作業時間：" + workers)

    // 最も作業が長い作業者の終了時間が最短日数
    return workers[idxOfMax(A)]
}

function sort(A) {
    let n = A.length
    let swapped

    for (let i = 0; i < n - 1; i++) {
        swapped = false

        for (let j = 0; j < n - 1 - i; j++) {
            if (A[j] < A[j + 1]) {
                [A[j], A[j + 1]] = [A[j + 1], A[j]];
                swapped = true;
            }
        }

        if (swapped == false){
            break
        }
    }
    return A
}

function idxOfMin(A) {
    let min = A[0]
    let idx = 0

    for (let i = 1; i < A.length; i++) {
        if (A[i] < min) {
            min = A[i]
            idx = i
        }
    }

    return idx
}

function idxOfMax(A) {
    let max = A[0]
    let idx = 0

    for (let i = 1; i < A.length; i++) {
        if (A[i] > max) {
            max = A[i]
            idx = i
        }
    }

    return idx
}

console.log("最短日数：" + minProductionDays(N, A) + "日")