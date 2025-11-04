package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class NullNameException extends RuntimeException {
    public NullNameException(String message) {
        super(message);
    }
    public NullNameException(){super("Null name");}
}
