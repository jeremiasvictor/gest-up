package com.deboxadinhos.GestUp;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Clientes {

    @Id
    @GeneratedValue
    private long id;

    private String nome;
    private String servicosUsados;

    Clientes(){

    }

    Clientes(String nome, String servicosUsados){
        this.nome = nome;
        this.servicosUsados = servicosUsados;
    }

    public long getId(){
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getServicosUsados() {
        return servicosUsados;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setServicosUsados(String servicosUsados) {
        this.servicosUsados = servicosUsados;
    }
}
