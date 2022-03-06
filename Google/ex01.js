// 1 + 3
// 2 - 3 * 2
// 2 ^ 3 / 4
// 0 * 5 * (4 + 1)
// 5 + 5 / 0
// 5 + + 1
// 5 + ( 465 + 1

function expreValidation(value) {

    let erro = 'ERR SYNTAX'
    let len = value.length
    let pattern = /[0-9]/

    if(value[0] == pattern) {
        console.log(erro)
    }

}

expreValidation('/1+1') 