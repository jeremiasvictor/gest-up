package com.deboxadinhos.GestUp.dto;

import com.deboxadinhos.GestUp.models.Product;

import java.util.List;
import java.util.UUID;

public class CreateBusinessDTO {

    private String name;
    private String cnpj;
    private String address;
    private UUID userID;
    private List<Product> products;

    public CreateBusinessDTO(){}
    public CreateBusinessDTO(String name, String cnpj, String address, UUID userID, List<Product> products) {
        this.name = name;
        this.cnpj = cnpj;
        this.address = address;
        this.userID = userID;
        this.products = products;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public UUID getUserID() {
        return userID;
    }

    public void setUserID(UUID userID) {
        this.userID = userID;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
