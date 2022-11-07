var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let arr = [];
for (let i = 1; i <= 6; i++) {
    arr.push(parseInt(lines.shift()));
}

const maxValue = Math.max(...arr);
const index = arr.indexOf(maxValue) + 1;

console.log(maxValue);
console.log(index);
