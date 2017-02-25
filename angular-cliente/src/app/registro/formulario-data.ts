import { FormularioInterface } from './formulario';

export class Formulario implements FormularioInterface{
    nombre:string;
    usuario:string;
    correo:string;
    password:string;
    constructor(nombre:string, usuario:string, correo:string, password:string){
        this.nombre = nombre;
        this.usuario = usuario;
        this.correo = correo;
        this.password = password;
    }
}
