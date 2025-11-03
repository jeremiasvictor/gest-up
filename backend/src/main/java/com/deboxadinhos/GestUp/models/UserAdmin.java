package com.deboxadinhos.GestUp.models;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "user_gestup")
public class UserAdmin {

    @Id
    @GeneratedValue
    private UUID id;
    private String name;
    @Column(unique = true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    private String cpf;
    private int type;

    public UserAdmin(){}
    public UserAdmin(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = 1;
    }

    //Getters and Setters

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}
