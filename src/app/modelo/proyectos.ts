export class Proyectos {
    id?: number;
    nombrePro : string;
    descripcionPro: string;
    urlPro: string;

    constructor(nombrePro: string, descripcionPro: string, urlPro: string) {
        this.nombrePro = nombrePro;
        this.descripcionPro = descripcionPro;
        this.urlPro = urlPro;
    }
}
