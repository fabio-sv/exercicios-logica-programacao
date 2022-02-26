function plusMinus(arr) {
    let positive = 0, 
    negative = 0,
    zero = 0,
    len = arr.length

    for(let i = 0; i < len; i++) {
        if(arr[i] > 0) {
            positive++
        }
        if(arr[i] < 0) {
            negative++
        }
        if(arr[i] == 0) {
            zero++
        }   
    }
    positive /= len
    negative /= len
    zero /= len

    console.log(positive.toFixed(6))
    console.log(negative.toFixed(6))
    console.log(zero.toFixed(6))
}
const arr = [1, 1, 0, -1, -1]
plusMinus(arr)