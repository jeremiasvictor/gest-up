package com.deboxadinhos.GestUp.models;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue
    private UUID id;

    private String name;
    private int quantity;
    private double price;

    @ManyToOne
    private Business business;

    public Product(){}

    public Product(String name, int quantity, double price) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Getters and Setters ruim
    public UUID getId() {return this.id;}

    public String getNome() {return this.name;}
    public void setNome(String nome) {this.name=name;}

    public int getQuantity() {return this.quantity;}
    public void setQuantity(int quantity) {this.quantity=quantity;}

    public double getPrice() {return this.price;}
    public void setPrice(double price) {this.price=price;}


}
