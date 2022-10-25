// Clase Evento, Representa un Viaje,Evento... que se realiza y que se quiere guardar en la aplicacion.
// Es la clase Principal sobre la cual va a funcionar la aplicación.

export class Evento{
    // Fecha del Evento
    // Nombre del Evento
    // Array de Participantes (Array de Datos Usuario)
    // Descripcion del Evento (Opcional (String Con Info Descripción))
    // Divisa del Evento (Enum con los tipos de Divisa Diponibles (ISO))
    // Gasto Total del Evento
    // Pagos del Evento (Array de Datos Pago)
    // Participantes del Evento (Array de Datos Usuario)
    // Histórico (¿ Podría realizarse un map con los diferentes participantes y los pagos que han realizado?)
    // Lista de Pagos con los pagos que ha hecho cada participante.
    Constructor(Fecha, Nombre, Descripcion, Divisa, Participantes, ){
        this.Fecha = Fecha;
        this.Nombre = Nombre;
        this.Descripcion = Descripcion
        this.Gasto_Total = 0.0;
        this.Pagos = [];
        this.Historico = new Map();
        this.Participantes = Participantes;
        this.Divisa = Divisa;
    }

    Comprobar_Participante(Usuario){ 
        // Comprueba si el usuario esta en la lista de participantes
        for (var i = 0; i < this.Participantes.length; i++) {
            if (this.Participantes[i] == Usuario){
                return true;
            }
        }
        return false;   
    }

}

module.exports.Evento = Evento;