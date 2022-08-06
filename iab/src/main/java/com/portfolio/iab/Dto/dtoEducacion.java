
package com.portfolio.iab.Dto;

import javax.validation.constraints.NotBlank;

public class dtoEducacion {
    @NotBlank
    private String nombreEdu;
    @NotBlank
    private String inicioEdu;
    @NotBlank
    private String finEdu;
    @NotBlank
    private String imgEdu;
    
    //Constructor

    public dtoEducacion() {
    }

    public dtoEducacion(String nombreEdu, String inicioEdu, String finEdu, String imgEdu) {
        this.nombreEdu = nombreEdu;
        this.inicioEdu = inicioEdu;
        this.finEdu = finEdu;
        this.imgEdu = imgEdu;
    }

    
    //Getters and setters

    public String getNombreEdu() {
        return nombreEdu;
    }

    public void setNombreEdu(String nombreEdu) {
        this.nombreEdu = nombreEdu;
    }

    public String getInicioEdu() {
        return inicioEdu;
    }

    public void setInicioEdu(String inicioEdu) {
        this.inicioEdu = inicioEdu;
    }

    public String getFinEdu() {
        return finEdu;
    }

    public void setFinEdu(String finEdu) {
        this.finEdu = finEdu;
    }

    public String getImgEdu() {
        return imgEdu;
    }

    public void setImgEdu(String imgEdu) {
        this.imgEdu = imgEdu;
    }

    
}
