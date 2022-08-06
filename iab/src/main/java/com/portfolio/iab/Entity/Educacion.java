
package com.portfolio.iab.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Educacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreEdu;
    private String inicioEdu;
    private String finEdu;
    private String imgEdu;
    
    //Constructores

    public Educacion() {
    }

    public Educacion(String nombreEdu, String inicioEdu, String finEdu, String imgEdu) {
        this.nombreEdu = nombreEdu;
        this.inicioEdu = inicioEdu;
        this.finEdu = finEdu;
        this.imgEdu = imgEdu;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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
