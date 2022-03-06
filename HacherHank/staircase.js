// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=false&h_r=next-challenge&h_v=zen
function staircase(n) {
    let row = [],
        position = n,
        txt,
        str;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            j < position ? row.push(" ") : row.push("#");
        }
        position = position - 1;

        txt = row.toString();
        str = txt.replace(/,/g, "");
        console.log(str);

        for (let i = 0; i < n; i++) {
            row.pop();
        }
    }
}

staircase(10);
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ########
// #########
// ##########