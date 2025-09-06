package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class UserAlreadyExists extends RuntimeException {

    public UserAlreadyExists(String message) {
        super(message);
    }
    public UserAlreadyExists() { super("O usuário já existe." );
    }
}
