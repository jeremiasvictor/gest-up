package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class InvalidEmailException extends RuntimeException {
    public InvalidEmailException(String message) {
        super(message);
    }

    public InvalidEmailException(){ super("Something went wrong"); }
}
