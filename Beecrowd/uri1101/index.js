var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let rows;
const pattern = /[0-9]/g;
let arr = [];
let sequence = [];
let sum = 0;
let txt;

do {
    rows = lines.shift();

    if (rows == undefined) {
        return;
    }

    if (rows.includes("-")) {
        return;
    }

    if (rows) {
        for (let e of rows) {
            if (pattern.test(e)) {
                arr.push(parseInt(e));
            }
        }

        if (arr[0] === 0 || arr[1] === 0) {
            return;
        }
        if (arr[0] > arr[1]) {
            for (let i = arr[1]; i <= arr[0]; i++) {
                sequence.push(i);
            }

            txt = String(sequence).replace(/[,]/g, " ");
            sum = sequence.reduce((previus, value) => previus + value);

            console.log(`${txt} Sum=${sum}`);
            sequence = [];
            txt = "";
        }
        if (arr[0] < arr[1]) {
            for (let i = arr[0]; i <= arr[1]; i++) {
                sequence.push(i);
            }

            txt = String(sequence).replace(/[,]/g, " ");
            sum = sequence.reduce((previus, value) => previus + value);

            console.log(`${txt} Sum=${sum}`);
            sequence = [];
            txt = "";
        }
    }
    arr = [];
} while (rows !== undefined);
