package com.deboxadinhos.GestUp.dto;

import java.util.UUID;

public class CreateProductDTO {

    private String name;
    private int quantity;
    private UUID business_id;
    private double price;

    public CreateProductDTO(){}
    public CreateProductDTO(String name, int quantity, double price, UUID business_id){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.business_id = business_id;
    }

    public double getPrice() {
        return price;
    }
    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public UUID getBusiness_id() {
        return business_id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


}
