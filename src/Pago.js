//  Clase de Gastos, que van a ir asociados a un Evento y Contienen a un usuario.

class Pago{
    // Nombre del Pago
    // Fecha del Pago (Tipo de Dato Date)
    // Cantidad a Pagar (Debe de ser un entero positivo.)
    // Usuario que Paga (Tipo de Dato Usuario)
    // Usuarios que Participan (Array de Datos Usuario)
    constructor(Nombre, Fecha, Cantidad, Usuario_paga, Usuarios_participan,){
        try{
            this.Nombre = Nombre;
            // tipeof(Fecha) == Date ? this.Fecha = Fecha : this.Fecha = new Date(Fecha);
            this.Fecha = Fecha;
            if (Cantidad > 0){
                this.Cantidad = Cantidad;
            }else{
                this.Cantidad = 0;
                throw "Cantidad no puede ser negativa";
            }
            this.Usuario_paga = Usuario_paga;
            this.Usuarios_participan = Usuarios_participan;
        }catch(e){
            console.log(e);
        }
     
    }
    
}
//  Podemos eliminar el valor de una propiedad mediante la sentencia delete <objeto>.<propiedad>
module.exports.Pago = Pago;
//  Realizamos una prueba para ver como funciona la clase Pago
pagar = new Pago("Pago1", new Date(), 10, "Usuario1", ["Usuario1", "Usuario2"]);
console.log(pagar);