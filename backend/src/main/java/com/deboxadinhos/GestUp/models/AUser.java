package com.deboxadinhos.GestUp.models;

public abstract class AUser {

    private int type;
    private String name;
    private String email;
    private String password;
    private String cpf;

    public boolean validatePassword(String password) {
        return password.equals(this.password);
    }

}
