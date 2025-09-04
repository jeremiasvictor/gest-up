package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class EmailInvalidoException extends RuntimeException {
    public EmailInvalidoException(String message) {
        super(message);
    }

    public EmailInvalidoException(){ super("Email invalido mano"); }
}
