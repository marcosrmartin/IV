/**
 * Clase Pago, representa un pago que se realiza, basicamente va a almacenar el Usuario que realiza el Pago y la cantidad
 * Comprobando que la Cantidad sea > 0, será un objeto-valor ya que permanece inmutable tras su creación y va a ser
 * gestionado por la Entidad de Eventos
 */
import Usuario from './usuario.js';
export default class Pago{
    /**
     * @param {String} nombre // Nombre del Pago 
     * @param {Float} cantidad 
     * @param {Usuario} usuarioPaga
     * @param {Arraylist(Usuario)} participantes
     * @constructor Crea un Pago con comprobación de que el saldo introducido sea positivo. 
     */
    constructor(nombre, cantidad, usuarioPaga, participantes){
        try{
            if (cantidad <= 0){
                throw new Error("La cantidad tiene que ser mayor que 0.");
            }
            this.cantidad = cantidad;
            if (nombre.length === 0){
                throw new Error ("Nombre no puede ser vacío");
            }
            this.nombre = nombre;
            if (participantes.length === 0){
                throw new Error ("Debe haber al menos un participante.");
            }
            this.participantes = participantes.slice();
            this.usuarioPaga = usuarioPaga;
        }catch(e){
            console.log(e);
        }
    }
    
    getCantidad(){
        return this.cantidad;
    }

    getUsuarioPaga(){
        return this.usuarioPaga;
    }

    getParticipantes(){
        return this.participantes;
    }

    getNombre(){
        return this.nombre;
    }
}
