package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class EmailAlreadyExistsException extends RuntimeException {

    public EmailAlreadyExistsException(String message) {
        super(message);
    }
    public EmailAlreadyExistsException() { super("An user with this email already exists.");
    }
}
