// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=false

function miniMaxSum(arr) {
    let mini = Math.min(...arr)
    let max = Math.max(...arr) 
    let value1 = 0, value2 = 0

    if(max > mini) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] != mini)
            value2 += arr[i]
        }
        
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] != max) {
                value1 += arr[j]
            }
        }
        console.log(value1 + ' ' + value2)
    } 
    else {
        let value = arr[0]
        let len = arr.length - 1
        console.log(value * len, value * len)
    }
}

const arr = [5, 5, 5, 5, 5]
console.log(miniMaxSum(arr))
