function diagonalDifference(arr) {
    let rows = arr.length
    let element = 0
    let elementLast = arr[0].length - 1
    let diagonal1 = 0
    let diagonal2 = 0
    
    for(let i = 0; i < rows; i++) {
        diagonal1 += arr[i][element++]  
    }
    for(let i = 0; i < rows; i++) {
        diagonal2 += arr[i][elementLast--]
    }
    return diagonal1 > diagonal2 ? diagonal1 - diagonal2 : diagonal2 - diagonal1
}

let arr = [
    [1, 2, 4, 2],
    [4, 6, 8, 0],
    [1, 4, 2, 0],
    [9, 0, 0, 9],
]
console.log(diagonalDifference(arr))