export class Usuario {
    private nombre:string;
    private correo:string;
    private usuario:string;
    private direccion:string;
    private asignaturas:string[];

    constructor(
        nombre:string, 
        correo:string,
        usuario:string,
        direccion:string,
        asignaturas:string[]
        ){

        this.nombre = nombre;
        this.correo = correo;
        this.usuario = usuario;
        this.direccion = direccion;
        this.asignaturas = asignaturas;
    }
    getAsignaturas():string[]{
        return this.asignaturas;
    }

}