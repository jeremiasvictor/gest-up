package com.deboxadinhos.GestUp.dto;

import java.util.UUID;

public class ProductDTO {

    private UUID id;
    private String name;
    private int quantity;
    private double price;

    public ProductDTO(){}
    public ProductDTO(UUID id,String name, int quantity, double price){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() { return quantity; }

    public UUID getId(){ return id; }


    public void setName(String name) { this.name = name; }

    public void setPrice(double price) { this.price = price; }

    public void setQuantity(int quantity) { this.quantity = quantity; }
}
