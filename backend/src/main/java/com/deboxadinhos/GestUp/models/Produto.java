package com.deboxadinhos.GestUp.models;

import jakarta.persistence.*;

@Entity
@Table(name = "produto")
public class Produto {

    @Id
    @GeneratedValue
    private long id;

    private String nome;
    private int quantidade;
    private double preco;

    @ManyToOne()
    private Empresa empresa;

    public Produto(){}

    public Produto(String nome, int quantidade, double preco) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    // Getters and Setters ruim
    public Long getId() {return this.id;}
    public void setId(Long id) {this.id = id;}

    public String getNome() {return this.nome;}
    public void setNome(String nome) {this.nome=nome;}

    public int getQuantidade() {return this.quantidade;}
    public void setQuantidade(int quantidade) {this.quantidade=quantidade;}

    public double getPreco() {return this.preco;}
    public void setPreco(double preco) {this.preco=preco;}


}
