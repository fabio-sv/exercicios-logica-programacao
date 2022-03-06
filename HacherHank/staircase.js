// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=false&h_r=next-challenge&h_v=zen

function staircase(n) {
    let row = [];
    let position = n;
    let str

    for (let i = 1; i <= n; i++) {
        // console.log('row ' + i + ':' + position)

        for (let j = 1; j <= n; j++) {
            j < position ? row.push(" ") : row.push("#");
        }
        position = position - 1;

        str = row.toString()

        console.log("row:", str);

        for (let i = 0; i < n; i++) {
            row.pop();
        }
    }
}

staircase(4);
