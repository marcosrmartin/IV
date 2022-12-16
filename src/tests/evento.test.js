import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import { faker } from '@faker-js/faker';

import Evento from '../services/evento.js'
import Pago  from '../services/pago.js'
import Usuario from '../services/usuario.js'

describe('Evento', () => {
    describe('addPago', () => {
        it('Devuelve el resultado la suma de todos los pagos entre la cantidad de participantes en Evento.Pagos', () => {
            let usuarios = []
            let pagos = []
            let nUsuarios = faker.datatype.number({ max: 6})
            let nPagos = faker.datatype.number({ max: 30})
            let total

            for (let i = 0; i < nUsuarios; i++) {
                usuarios.push(new Usuario(faker.name.firstName()))
            }
            for (let i = 0; i < nPagos; i++) {
                pagos.push(new Pago(faker.datatype.float({ max: 30 }), usuarios[Math.floor(Math.random()*usuarios.length)]))
            }
            let evento = new Evento(faker.address.cityName(), usuarios);
            pagos.forEach(pago => {
                evento.addPago(pago)
            });
            pagos.forEach(pago => {
                total += pago.Cantidad
            });
            

            let gastoPorUsuario = evento.gastoPorUsuario()


            assert.strictEqual(gastoPorUsuario, total/usuarios.length, `No se ha calculado correctamente el resultado ${gastoPorUsuario} != ${total/usuarios.length}`);
        });
    });
});