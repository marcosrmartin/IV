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
     * @param {Arraylist(Usuario)} participantes // Participantes que hay en un Evento
     * @param {Arraylist(Pago)} pagos // Lista De Pagos (Cada Pago contiene la cantidad y el usuario que la ha pagado)
     * @param {Dictionary(Usuario)} netos // Diccionario donde se apunta el estado actual de cada usuario
     *  
     */
    constructor(nombre, participantes) {
        this.nombre = nombre;
        this.participantes = participantes.slice();
        this.pagos = [];
        this.netos = new Map();
        participantes.forEach(usuario => this.netos.set(usuario.getNombre(), 0))
    }

    addPago(pago){
        pago.getParticipantes().forEach(usuario => {
            if(this.participantes.indexOf(usuario) == -1){
                throw new Error(`El usuario "${usuario.getNombre()}" en el pago no está en el evento.`);
            }
        });
        if((this.participantes.filter(usuario => usuario.getNombre() == pago.getUsuarioPaga().getNombre())).length == 0){
            throw new Error(`El usuario "${pago.getUsuarioPaga().getNombre()}" que realiza el pago no está en el evento.`);
        }

        let debe = pago.getCantidad() / pago.getParticipantes().length;                                                                                          //Se divide el pago entre los participantes
        pago.getParticipantes().forEach(usuario => this.netos.set(usuario.getNombre(), parseFloat((this.netos.get(usuario.getNombre()) + debe).toFixed(2))));    //Se suma a cada uno su parte
        this.netos.set(pago.getUsuarioPaga().getNombre(), parseFloat((this.netos.get(pago.getUsuarioPaga().getNombre()) - pago.getCantidad()).toFixed(2)));      //Al que paga se le resta el importe
        this.pagos.push(pago);
    }

    getNeto(usuario){
        if(this.participantes.indexOf(usuario) == -1){
            throw new Error(`El usuario "${usuario.getNombre()}" no está en el evento.`);
        }
        return this.netos[usuario]
    }

    getCuentas(){
        let positivos = new Map();
        let negativos = new Map();
        let cuentas = [];
        let cuentasFinal = [];

        for(let [k,v] of this.netos.entries()){
            if(v>0){
                positivos.set(k,v)
            }else if(v<0){
                negativos.set(k,v)
            }
        }

        let recorrer = (positivos, negativos, cuentas) => {
            if(positivos.size + negativos.size < 2){       //Si es uno se puede terminar, ya que será por fallos de acarreo y será mínimo
                if(cuentasFinal.length == 0 || cuentasFinal.length > cuentas.length){
                    cuentasFinal = cuentas.slice();
                }
                return 0;
            }

            let count = Infinity;
            let newCuentas = cuentas.slice();
            let iter = negativos.entries().next();
            let usuarioNegativo = iter.value[0];
            let negativo = iter.value[1];

            for (let [usuarioPositivo, positivo] of positivos.entries()){
                let newPositivos = new Map(positivos);
                let newNegativos = new Map(negativos);
                                

                if(positivo > -negativo){
                    newCuentas.push([usuarioPositivo, usuarioNegativo, -negativo])
                    newPositivos.set(usuarioPositivo, parseFloat((positivo + negativo).toFixed(2)))
                    newNegativos.delete(usuarioNegativo);
                }else{ 
                    newCuentas.push([usuarioPositivo, usuarioNegativo, positivo])
                    if(positivo < -negativo){
                        newNegativos.set(usuarioNegativo, parseFloat((positivo + negativo).toFixed(2)))
                        newPositivos.delete(usuarioPositivo);
                    }else{
                        newNegativos.delete(usuarioNegativo);
                        newPositivos.delete(usuarioPositivo);
                    }
                }
                //Una vez a buscado todas las combinaciones posibles comenzando por positivo, actualiza si es menor     
                count = Math.min(count, recorrer(newPositivos, newNegativos, newCuentas));
                newCuentas.pop();
            }
            return count + 1;
        };
        recorrer(positivos, negativos, cuentas);
        return cuentasFinal;
    }
}

