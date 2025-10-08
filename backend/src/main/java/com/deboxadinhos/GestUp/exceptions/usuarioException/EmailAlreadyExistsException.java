package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class EmailAlreadyExistsException extends RuntimeException {

    public EmailAlreadyExistsException(String message) {
        super(message);
    }
    public EmailAlreadyExistsException() { super("Um usuário com esse email já existe.");
    }
}
