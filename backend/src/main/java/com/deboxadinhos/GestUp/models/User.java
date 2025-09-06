package com.deboxadinhos.GestUp.models;

import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "user_gestup")
public class User {

    @Id
    @GeneratedValue
    private UUID id;
    private String name;

    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String password;
    private String cpf;

    @OneToMany(mappedBy = "user",fetch = FetchType.EAGER, cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Business> business;

    public User(){}
    public User(String name, String email, String password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public String getName() { return this.name; }

    public String getEmail() {
        return this.email;
    }

    public UUID getId() { return this.id; }

    //falta muita seguranca
    public String getPassword() { return this.password; }

    public String getCpf() { return this.cpf; }

    public void setEmail(String email) { this.email = email; }

    public void setPassword(String password) { this.password = password; }
}
