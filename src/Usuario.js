
/**
 * Clase Usuario, se va a implementar en un inicio como un objeto-valor ya que el usuario una vez creado 
 * permanecerá inmutable hasta que lo queramos eliminar y será gestionado por la Entidad de Eventos
 */
class Usuario {
    /**
     * 
     * @param {String} Nombre 
     */
    constructor(Nombre) {
        this.Nombre = Nombre
    }
}
module.exports.Usuario = Usuario;
