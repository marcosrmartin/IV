//  Clase de Gastos, que van a ir asociados a un Evento y Contienen a un usuario.

import Usuario from './Usuario.js';
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
                throw "Cantidad no puede ser negativa";
            }
            this.Usuario_paga = Usuario_paga;
        }catch(e){
            console.log(e);
        }
     
    }
    
}
module.exports.Pago = Pago;
