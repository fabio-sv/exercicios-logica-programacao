var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const caseTest = parseInt(lines.shift());
let cobaias = 0;
let ratos = 0;
let coelhos = 0;
let sapos = 0;
let porcRatos = 0;
let porcCoelhos = 0;
let porcSapos = 0;

for (let i = 0; i < caseTest; i++) {
    let animal = lines.shift();
    // ratos
    if (animal.includes("R")) {
        animal = animal.replace("R", "");
        ratos += parseInt(animal);
    }
    // coelhos
    if (animal.includes("C")) {
        animal = animal.replace("C", "");
        coelhos += parseInt(animal);
    }
    // sapos
    if (animal.includes("S")) {
        animal = animal.replace("S", "");
        sapos += parseInt(animal);
    }

    cobaias = ratos + coelhos + sapos;
}

porcRatos = (ratos / cobaias) * 100;
porcCoelhos = (coelhos / cobaias) * 100;
porcSapos = (sapos / cobaias) * 100;

console.log(
    `Total: ${cobaias} cobaias\nTotal de coelhos: ${coelhos}\nTotal de ratos: ${ratos}\nTotal de sapos: ${sapos}\nPercentual de coelhos: ${porcCoelhos.toFixed(
        2
    )} %\nPercentual de ratos: ${porcRatos.toFixed(
        2
    )} %\nPercentual de sapos: ${porcSapos.toFixed(2)} %`
);
