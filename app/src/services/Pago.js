/**
 * Clase Pago, representa un pago que se realiza, basicamente va a almacenar el Usuario que realiza el Pago y la cantidad
 * Comprobando que la Cantidad sea > 0, será un objeto-valor ya que permanece inmutable tras su creación y va a ser
 * gestionado por la Entidad de Eventos
 */
var Usuario = require('Usuario');
class Pago{
    /**
     * 
     * @param {Float} Cantidad 
     * @param {Usuario} Usuario_paga
     * @constructor Crea un Pago con comprobación de que el saldo introducido sea positivo. 
     */
    constructor(Cantidad, Usuario_paga){
        try{
            if (Cantidad > 0){
                this.Cantidad = Cantidad;
            }else{
                this.Cantidad = 0;
                throw new Error("Cantidad no puede ser negativa");
            }
            this.Usuario_paga = Usuario_paga;
        }catch(e){
            console.log(e);
        }
     
    }
    
}
module.exports.Pago = Pago;
