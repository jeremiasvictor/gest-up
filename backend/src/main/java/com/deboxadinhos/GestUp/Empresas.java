package com.deboxadinhos.GestUp;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Empresas
{

    @Id
    @GeneratedValue
    private long id;

    private String cnpj;
    private String nomeDono;
    private double montante;


    Empresas(){

    }

    Empresas(String cnpj, String nomeDono, double montante){
        this.cnpj = cnpj;
        this.montante = montante;
        this.nomeDono = nomeDono;
    }

    public long getId() {
        return id;
    }

    public double getMontante() {
        return montante;
    }

    public String getCnpj() {
        return cnpj;
    }

    public String getNomeDono() {
        return nomeDono;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public void setMontante(double montante) {
        this.montante = montante;
    }

    public void setNomeDono(String nomeDono) {
        this.nomeDono = nomeDono;
    }

    public void setId(long id) {
        this.id = id;
    }
}
