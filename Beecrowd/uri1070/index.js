var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const firstValue = parseInt(lines.shift());
const secondValue = parseInt(lines.shift());
let sum = 0;

if (firstValue > secondValue) {
    for (let i = secondValue + 1; i < firstValue; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
} else {
    for (let i = firstValue + 1; i < secondValue; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
}

console.log(sum);
