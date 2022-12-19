/**
 * Clase Evento, esta clase es la principal, la que va a contener la lógica de negocio de la aplicación, 
 * Esta clase va a ser una Entidad que va a trabajar con los usuarios y con los pagos.
 */
import Pago from './pago.js';
import Usuario from './usuario.js';
export default class Evento {
    /**
     * 
     * @param {String} nombre // Nombre del Evento 
     * @param {Arraylist(Usuario)} participantes // Participantes que hay en un Pago
     * @param {Arraylist(Pago)} pagos // Lista De Pagos (Cada Pago contiene la cantidad y el usuario que la ha pagado)
     *  
     */
    constructor(nombre, participantes) {
        this.nombre = nombre;
        this.participantes = participantes;
        this.pagos = [];
    }

    addPago(pago){
        return this.pagos.push(pago)
    }

    gastoPorUsuario(){
        let coste
        this.Pagos.forEach(pago =>{
            coste += pago.Cantidad
        });
        return coste/this.Participantes.lenght
    }
}

