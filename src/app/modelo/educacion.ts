export class Educacion {
    id?: number;
    nombreEdu : string;
    inicioEdu: string;
    finEdu: string;
    imgEdu: string;

    constructor(nombreEdu: string, inicioEdu: string, finEdu: string, imgEdu: string) {
        this.nombreEdu = nombreEdu;
        this.inicioEdu = inicioEdu;
        this.finEdu = finEdu;
        this.imgEdu = imgEdu;
    }
}
