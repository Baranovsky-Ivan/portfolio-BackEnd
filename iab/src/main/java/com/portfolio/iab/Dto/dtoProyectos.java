
package com.portfolio.iab.Dto;

import javax.validation.constraints.NotBlank;


public class dtoProyectos {
    @NotBlank
    private String nombrePro;
    @NotBlank
    private String descripcionPro;
    @NotBlank
    private String urlPro;

    public dtoProyectos() {
    }

    public dtoProyectos(String nombrePro, String descripcionPro, String urlPro) {
        this.nombrePro = nombrePro;
        this.descripcionPro = descripcionPro;
        this.urlPro = urlPro;
    }

    public String getNombrePro() {
        return nombrePro;
    }

    public void setNombrePro(String nombrePro) {
        this.nombrePro = nombrePro;
    }

    public String getDescripcionPro() {
        return descripcionPro;
    }

    public void setDescripcionPro(String descripcionPro) {
        this.descripcionPro = descripcionPro;
    }

    public String getUrlPro() {
        return urlPro;
    }

    public void setUrlPro(String urlPro) {
        this.urlPro = urlPro;
    }
    
    
}
