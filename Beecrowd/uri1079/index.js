// sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5.

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const sum = 10;
const rows = Number(lines.shift());

Array.prototype.filterAverage = function () {
    for (let i = 0; i < this.length; i++) {
        if (i === 0) {
            this[i] = this[i] * 2;
        }
        if (i === 1) {
            this[i] = this[i] * 3;
        }
        if (i === 2) {
            this[i] = this[i] * 5;
        }
    }
};

for (let i = 0; i < rows; i++) {
    let notas = lines.shift().split(" ");

    notas = notas.map((e) => Number(e));
    notas.filterAverage();

    const media = notas.reduce((total, value) => (total += value)) / 10;

    console.log(media.toFixed(1));
}
