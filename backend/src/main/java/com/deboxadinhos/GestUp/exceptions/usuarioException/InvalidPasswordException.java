package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class InvalidPasswordException extends RuntimeException {
    public InvalidPasswordException(String message) {
        super(message);
    }

    public InvalidPasswordException() {
        super("Wrong password.");
    }
}
