package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class VoidPasswordException extends RuntimeException {

    public VoidPasswordException(String message) {
        super(message);
    }

    public VoidPasswordException() {
        super("Put a password.");
    }
}

