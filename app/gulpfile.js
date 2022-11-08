const { parallel } = require('gulp');
const { exec } = require('child_process');

function evento() {
    return exec('node -c ./src/services/Evento.js');
}

function pago() {
    return exec('node -c ./src/services/Pago.js');
}

function usuario() {
    return exec('node -c ./src/services/Usuario.js');
}

exports.check = parallel(usuario, pago, evento);