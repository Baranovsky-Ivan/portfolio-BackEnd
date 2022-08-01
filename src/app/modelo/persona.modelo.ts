export class Persona{
    id?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    img: string;
    info: string;

    constructor(nombre: string,apellido: string,titulo: string,img:string,info:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.img = img;
        this.info = info;
    }
}