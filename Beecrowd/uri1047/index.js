var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const values = lines.shift().split(" ");

let horaInicial = parseInt(values[0]);
let minutoInicial = parseInt(values[1]);
let horaFinal = parseInt(values[2]);
let minutoFinal = parseInt(values[3]);

function gameDuration(horaInicial) {
    let total = null;
    let horas = null;
    let minutos = null;

    if (horaInicial <= horaFinal) {
        horaInicial *= 60;
        horaFinal *= 60;
        horas = Math.floor(
            (horaFinal + minutoFinal - (horaInicial + minutoInicial)) / 60
        );
        minutos =
            (horaFinal + minutoFinal - (horaInicial + minutoInicial)) % 60;
    }
    if (horaInicial >= horaFinal) {
        horaInicial *= 60;
        horaFinal *= 60;

        horas = Math.floor(
            (1440 - (horaInicial + minutoInicial) + (horaFinal + minutoFinal)) /
                60
        );

        minutos = Math.floor(
            (1440 - (horaInicial + minutoInicial) + (horaFinal + minutoFinal)) %
                60
        );

        if (horas === 24 && minutos > 0) {
            horas = 0;
        }
    }

    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
}

gameDuration(horaInicial);
