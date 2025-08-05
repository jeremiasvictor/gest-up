package com.deboxadinhos.GestUp;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity //informar ao banco de dados
public class Produto {
    @Id //diz que a classe terá um id no banco de dados
    @GeneratedValue //cria um id para essa classe no banco
    private long id;

    private double valor;
    private int quantidade;
    private String tipos;
    private String nomeProduto;


    //Getters e setters
    public long getId()
    {
        return id;
    }

    public double getValor(){
        return valor;
    }

    public int getQuantidade(){
        return quantidade;
    }

    public String getNomeProduto(){
        return nomeProduto;
    }

    public void setQuantidade(int quantidade){
        this.quantidade = quantidade;
    }

    public void setValor(double valor){
        this.valor = valor;
    }

    public void setNomeProduto(String nomeProduto){
        this.nomeProduto = nomeProduto;
    }


}
