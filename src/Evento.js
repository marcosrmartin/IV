// Clase Evento, Representa un Viaje,Evento... que se realiza y que se quiere guardar en la aplicacion.
// Es la clase Principal sobre la cual va a funcionar la aplicación.
import Pago from './Pago.js';
import Usuario from './Usuario.js';
export class Evento {
    /**
     * 
     * @param {String} Nombre 
     * @param {Arraylist(Usuario)} Participantes
     * @param {Arraylist(Pago)} Pagos
     *  
     */
    Constructor(Nombre, Participantes) {
        this.Nombre = Nombre;
        this.Participantes = Participantes;
        this.Pagos = [];
    }

}

module.exports.Evento = Evento;