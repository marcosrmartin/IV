import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import Evento from '../services/evento.js'
import Pago  from '../services/pago.js'
import Usuario from '../services/usuario.js'

describe('Evento', () => {
    describe('addPago', () => {
        it('Devuelve el resultado la suma de todos los pagos entre la cantidad de participantes en Evento.Pagos', () => {
            let usuarios = [];
            let pagos = [];
            let total;
            let solucion = [
                [ 'Bruno', 'Alex', 22.8 ],
                [ 'Guillermo', 'Alex', 35.8 ],
                [ 'Tomas', 'Alex', 7.6 ],
                [ 'Tomas', 'Julia', 28.2 ]
              ];

            usuarios.push(new Usuario("Alex"));
            usuarios.push(new Usuario("Bruno"));
            usuarios.push(new Usuario("Guillermo"));
            usuarios.push(new Usuario("Julia"))
            usuarios.push(new Usuario("Tomas"))
            pagos.push(new Pago("Picnic", 13, usuarios[1], usuarios));
            pagos.push(new Pago("Coche", 64, usuarios[3], usuarios));
            pagos.push(new Pago("Hotel", 102, usuarios[0], usuarios));

            let evento = new Evento("Viaje a Madrid", usuarios);
            pagos.forEach(pago => {
                evento.addPago(pago);
            });
            pagos.forEach(pago => {
                total += pago.Cantidad;
            });
            

            let cuentas = evento.getCuentas();

            
            assert.deepStrictEqual(cuentas, solucion, `No se ha calculado correctamente el resultado {${cuentas}} != {${solucion}}`);
        });
    });
});