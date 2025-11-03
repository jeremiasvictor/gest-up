package com.deboxadinhos.GestUp.models;

import jakarta.persistence.*;

@Entity
@DiscriminatorValue("ADMIN_USER")
public class UserAdmin extends BaseUser {

    private String adminPermissionLevel;

    // Constructors
    public UserAdmin() {super();}
    public UserAdmin(String name, String email, String password, String permissionLevel) {
        super(name, email, password);
        this.adminPermissionLevel = permissionLevel;
    }

    @Override
    public String getRole() {
        return "ROLE_ADMIN";
    }

    // Getters and Setters
}