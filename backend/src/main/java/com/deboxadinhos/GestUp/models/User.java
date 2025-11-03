package com.deboxadinhos.GestUp.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Entity
@DiscriminatorValue("COMMON_USER")
public class User extends BaseUser {

    private String cpf;
    @OneToMany(mappedBy = "user",fetch = FetchType.LAZY, cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonManagedReference
    private List<Business> business;

    //Constructors
    public User(){super();}
    public User(String name, String email, String password, String cpf){
        super(name, email, password);
        this.cpf = cpf;
    }

    // Methods

    @Override
    public String getRole(){
        return "ROLE_USER";
    }

    // Getters and Setters
    public String getCpf() { return this.cpf; }

    public void setCpf(String cpf) { this.cpf = cpf; }

    public List<Business> getBusiness() { return this.business; }

}
