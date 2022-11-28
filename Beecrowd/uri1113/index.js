var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let rows = 0;

do {
    rows = lines.shift();
    if (rows == undefined) return;

    rows = rows.split(" ").map((e) => Number(e));

    if (rows[0] > rows[1]) {
        console.log("Decrescente");
    } else if (rows[0] < rows[1]) {
        console.log("Crescente");
    } else {
        return;
    }
} while (rows !== undefined);
