package com.deboxadinhos.GestUp.dto;

import com.deboxadinhos.GestUp.models.Product;

import java.util.List;
import java.util.UUID;

public class BusinessDTO {

    private UUID id;
    private String name;
    private String cnpj;
    private String address;

    public BusinessDTO(UUID id, String name, String cnpj, String address) {
        this.id = id;
        this.name = name;
        this.cnpj = cnpj;
        this.address = address;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
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
}
