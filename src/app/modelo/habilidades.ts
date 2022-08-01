export class Habilidades {
    id?: number;
    nombreHab: string;
    porcentajeHab: string;
    imgHab: string;

    constructor(nombreHab: string, porcentajeHab: string, imgHab: string) {
        this.nombreHab = nombreHab;
        this.porcentajeHab = porcentajeHab;
        this.imgHab = imgHab;
    }
}
