
/**
 * Clase Usuario, se va a implementar en un inicio como un objeto-valor ya que el usuario una vez creado 
 * permanecerá inmutable hasta que lo queramos eliminar y será gestionado por la Entidad de Eventos
 */
export default class Usuario {
    /**
     * 
     * @param {String} nombre 
     */
    constructor(nombre) {
        try{
            if (nombre.length > 0){
                this.nombre = nombre;
            }else{
                throw new Error ("Nombre no puede ser vacío");
            }
        }catch(e){
            console.log(e);
        }
    }
}
