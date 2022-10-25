//  Clase Usuario, los cuales van a participar en un evento y van a tener una serie de Gastos y Deudas.

class Usuario{
    // Lista de Eventos a los que pertenece el usuario
    // Nombre del usuario (¿Duda si debe ser único o se puede repetir?)
    // Correo del usuario (¿Duda si debe ser único o se puede repetir?)
    constructor(Nombre, Correo, Eventos){
        this.Nombre = Nombre;
        this.Correo = Correo;
        this.Eventos = [];
    }
}

module.exports.Usuario = Usuario;
usuario = new Usuario("Usuario1", "alvaroselo@gmail.com",);
console.log(usuario);