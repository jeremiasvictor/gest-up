package com.deboxadinhos.GestUp;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity //informar ao banco de dados que é uma entidade
public class Produto{
    @Id //diz que a classe terá um id no banco de dados
    @GeneratedValue //cria um id para essa classe no banco
    private long id;

    private double valor;
    private int quantidade;
    private String tipos;
    private String nomeProduto;

    private long idEmpresa;

    public Produto(double valor, int quantidade, String tipos, String nomeProduto, long idEmpresa){
        this.nomeProduto = nomeProduto;
        this.quantidade = quantidade;
        this.valor = valor;
        this.tipos = tipos;
        this.idEmpresa = idEmpresa;

    } //mais para teste

    public Produto(){

    }

    //Getters e setters
    public long getId()
    {
        return id;
    }

    public long getIdEmpresa() {
        return idEmpresa;
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

    public String getTipos(){
        return this.tipos;
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
