package com.deboxadinhos.GestUp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Usuario {

    @Id
    @GeneratedValue
    private long id;
    private String nome;
    private String email;
    private String senha;

    public Usuario(){}
    public Usuario(String nome, String email, String senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    public String getNome() { return this.nome; }

    public String getEmail() {
        return this.email;
    }

    public long getId() { return this.id; }

    //falta muita seguranca
    public String getSenha() { return this.senha; }

    public void setEmail(String email) { this.email = email; }

    public void setSenha(String senha) { this.senha = senha; }
}
