/**
 * Clase Pago, representa un pago que se realiza, basicamente va a almacenar el Usuario que realiza el Pago y la cantidad
 * Comprobando que la Cantidad sea > 0, será un objeto-valor ya que permanece inmutable tras su creación y va a ser
 * gestionado por la Entidad de Eventos
 */
import Usuario from './usuario.js';
export default class Pago{
    /**
     * 
     * @param {Float} cantidad 
     * @param {Usuario} usuarioPaga
     * @constructor Crea un Pago con comprobación de que el saldo introducido sea positivo. 
     */
    constructor(cantidad, usuarioPaga){
        try{
            if (cantidad > 0){
                this.cantidad = cantidad;
            }else{
                this.cantidad = 0;
                throw new Error("Cantidad no puede ser negativa");
            }
            this.usuarioPaga = usuario_paga;
        }catch(e){
            console.log(e);
        }
     
    }
    
}
