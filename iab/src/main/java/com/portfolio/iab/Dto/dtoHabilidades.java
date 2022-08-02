
package com.portfolio.iab.Dto;

import javax.validation.constraints.NotBlank;

public class dtoHabilidades {
    @NotBlank
    private String nombreHab;
    @NotBlank
    private String porcentajeHab;
    @NotBlank
    private String imgHab;

    public dtoHabilidades() {
    }

    public dtoHabilidades(String nombreHab, String porcentajeHab) {
        this.nombreHab = nombreHab;
        this.porcentajeHab = porcentajeHab;
        this.imgHab = imgHab;
    }

    public String getNombreHab() {
        return nombreHab;
    }

    public void setNombreHab(String nombreHab) {
        this.nombreHab = nombreHab;
    }

    public String getPorcentajeHab() {
        return porcentajeHab;
    }

    public void setPorcentajeHab(String porcentajeHab) {
        this.porcentajeHab = porcentajeHab;
    }

    public String getImgHab() {
        return imgHab;
    }

    public void setImgHab(String imgHab) {
        this.imgHab = imgHab;
    }
    
    
}
