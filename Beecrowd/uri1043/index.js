var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const [a, b, c] = [
    ...lines
        .shift()
        .split(" ")
        .map((e) => Number(e)),
];

const perimetro = a + b + c;
const area = ((a + b) * c) / 2;

if (a < b + c && b < a + c && c < a + b) {
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
    console.log(`Area = ${area.toFixed(1)}`);
}
