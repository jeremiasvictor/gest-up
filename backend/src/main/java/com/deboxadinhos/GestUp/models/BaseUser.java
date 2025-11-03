package com.deboxadinhos.GestUp.models;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "user_gestup")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type")
public abstract class BaseUser {

    @Id
    @GeneratedValue
    private UUID id;
    private String name;
    @Column(unique = true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;

    // Constructors
    public BaseUser() {}
    public BaseUser(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // Abstract method forcing children to say who they are
    public abstract String getRole();

    // Common methods
    public boolean validatePassword(String password) {
        return password.equals(this.password);
    }

    // Getter and Setters
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
}
