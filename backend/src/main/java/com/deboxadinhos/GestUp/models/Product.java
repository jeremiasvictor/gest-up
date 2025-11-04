package com.deboxadinhos.GestUp.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;
    private int quantity;
    private double price;

    @ManyToOne
    @JoinColumn(name = "business_id")
    @JsonBackReference
    private Business business;

    public Product(){}

    public Product(String name, int quantity, double price, Business business) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.business = business;
    }

    // Getters and Setters ruim
    public UUID getId() {return this.id;}

    public String getName() {return this.name;}
    public void setName(String name) {this.name= name;}

    public int getQuantity() {return this.quantity;}
    public void setQuantity(int quantity) {this.quantity=quantity;}

    public double getPrice() {return this.price;}
    public void setPrice(double price) {this.price=price;}

    public Business getBusiness() { return business; }
}
